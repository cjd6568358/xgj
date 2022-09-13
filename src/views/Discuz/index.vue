<template>
  <div class="discuz-page">
    <div class="overflow-container" @scroll="onScroll">
      <div v-if="!discuz.isLogin" class="login-form">
        <center>
          <h3>discuz论坛手机版</h3>
        </center>
        <div class="input-warp">
          <input
            type="text"
            v-model="userInfo.username"
            placeholder="请输入用户名"
          />
        </div>
        <div class="input-warp">
          <input
            type="password"
            v-model="userInfo.password"
            placeholder="请输入密码"
          />
        </div>
        <div class="input-warp">
          <input
            type="text"
            v-model="userInfo.QA"
            placeholder="请输入问题ID和答案(以逗号分隔)"
          />
        </div>
        <a class="btn" @click="login">登录</a>
      </div>
      <template v-if="discuz.isLogin">
        <ul class="user-info">
          <router-link
            :to="{ name: 'DiscuzMyView' }"
            custom
            v-slot="{ navigate }"
          >
            <li @click="navigate">
              {{ discuz.userInfo.username }}
            </li>
          </router-link>
          <li v-if="discuz.signInfo.isSigned">已签到</li>
          <li v-else @click="dailySignIn">日签到</li>
          <li @click="monthSignIn">月签到</li>
          <li @click="logout">退出</li>
        </ul>
        <ul
          class="area"
          v-for="(area, i) of areaList"
          :key="i"
          :data-title="area.name"
        >
          <router-link
            v-for="(form, ii) of area.value"
            :key="ii"
            :to="{
              name: 'DiscuzForumView',
              params: { url: form.value },
            }"
            custom
            v-slot="{ navigate }"
          >
            <li @click="navigate">{{ form.name }}</li>
          </router-link>
        </ul>
      </template>
      <a class="btn switch" @click="switchProxy"
        >切换代理源({{ proxyServerPlatom }})</a
      >
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from "vuex";
import http from "../../util/http";
import { getCookie, selectors, proxyServers } from "../../util";
export default {
  name: "discuz-page",
  data() {
    return {
      areaList: [],
      userInfo: {
        username: "",
        password: "",
        QA: "",
      },
    };
  },
  computed: {
    ...mapState(["isLoading", "discuz"]),
    proxyServerPlatom() {
      return proxyServers.filter((item) => item.host === this.discuz.HOST)[0]
        .platom;
    },
  },
  activated() {
    this.init();
    // eslint-disable-next-line
    console.log("isLogin:", this.discuz.isLogin, this.discuz.HOST);
    document.querySelector(".overflow-container").scrollTop =
      sessionStorage.getItem("homePage") || 0;
  },
  methods: {
    ...mapActions([
      "switchProxy",
      "logout",
      "submitPost",
      "dailySignIn",
      "monthSignIn",
      "getPageData",
    ]),
    async init() {
      let { isLogin, signInfo } = this.discuz;
      if (isLogin) {
        if (!signInfo.isSigned) {
          this.checkSigned();
        }
        this.getIndexPageData();
      }
    },
    async login() {
      let {
        discuz: { HOST },
        userInfo: { username, password, QA },
      } = this;
      if (username && password) {
        let [questionid, answer] = QA.split(",");
        let formData = {
          formhash: "30b7da0e",
          cookietime: "315360000",
          loginfield: "username",
          questionid,
          answer,
          username,
          password,
          userlogin: "true",
        };
        if (!questionid || !answer) {
          delete formData.questionid;
          delete formData.answer;
        }
        const params = new URLSearchParams(Object.entries(formData));
        let postData = {
          httpConfig: {
            url: `/bbs/logging.php?action=login&loginsubmit=true`,
            method: "post",
            responseType: "arraybuffer",
            data: params.toString(),
          },
          encoding: "gbk",
        };
        this.$store.commit("SET_LOADING_STATUS", true);
        let { headers } = await http.post(
          `${HOST}/api/advancedProxy`,
          postData
        );
        this.$store.commit("SET_LOADING_STATUS", false);
        if (headers.corscookies) {
          headers.corscookies.split("|$$|").forEach((cookie) => {
            document.cookie = cookie;
          });
        }
        this.$store.commit("UPDATE_DISCUZ", {
          isLogin: !!getCookie("cdb3_auth"),
        });
        this.checkSigned();
        this.getIndexPageData();
      }
    },
    async checkSigned() {
      let {
        discuz: { signInfo },
      } = this;
      let url = `/bbs/my.php`;
      let selector = selectors.my;
      let pageData = await this.getPageData({ url, selector });
      let { formhash, username, recentReply, recentTopics } = pageData;
      this.discuz.formhash = formhash;
      recentTopics &&
        recentTopics.forEach((item) => {
          if (
            item &&
            item.title ==
              `${username}/${new Date().getMonth() + 1}月份/打卡签到帖`
          ) {
            if (item.lastPost.includes(new Date().Format("yyyy-M-d"))) {
              signInfo.isSigned = true;
            } else {
              signInfo.tid = item.tid;
            }
          }
        });
    },
    async getIndexPageData() {
      let url = `/bbs/index.php`;
      let selector = selectors.index;
      let pageData = {};
      if (sessionStorage.getItem(url)) {
        pageData = JSON.parse(sessionStorage.getItem(url));
      } else {
        pageData = await this.getPageData({ url, selector });
        sessionStorage.setItem(url, JSON.stringify(pageData));
      }

      this.areaList = pageData.areaList;
      let userInfo = Object.assign({}, this.discuz.userInfo);
      userInfo.creditList = pageData.creditList;
      userInfo.username = pageData.username;
      this.$store.commit("UPDATE_DISCUZ", { userInfo });
      if (!pageData.username) {
        this.logout();
      }
    },
    onScroll(e) {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        sessionStorage.setItem("homePage", e.target.scrollTop);
      }, 100);
    },
  },
};
</script>
<style lang="scss" scoped>
a.btn {
  border-radius: 8px;
  margin-top: 20px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  font-size: 36px;
  display: inline-block;
  color: #fff;
  border: 2px solid #3c76ff;
  background: #3c76ff;
  width: 100%;
  &.switch {
    width: 80%;
    margin: 20px 10%;
  }
}
.login-form {
  padding: 40px;
  .input-warp {
    margin-top: 20px;
    height: 100px;
    display: flex;
    input,
    select {
      border: 1px solid #ddd;
      padding-left: 40px;
      flex: 1;
      font-size: 32px;
      border-radius: 8px;
    }
    ::-webkit-input-placeholder {
      color: #ddd;
    }
    a.btn {
      margin-left: 10px;
      margin-top: 0;
      width: 200px;
    }
  }
}
.user-info {
  display: flex;
  padding: 20px;
  background: #fff;
  font-size: 32px;
  li {
    padding-right: 20px;
    margin-right: 20px;
    border-right: 2px solid #ddd;
    &:last-child {
      border-right: 0;
    }
  }
}
.area {
  position: relative;
  padding-top: 80px;
  background: #fff;
  max-height: 99999px;
  &::before {
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    font-size: 32px;
    padding-left: 24px;
    height: 80px;
    line-height: 80px;
    color: #fff;
    content: attr(data-title);
    background: #2a6eb4;
  }
  li {
    padding: 20px 24px;
    font-size: 30px;
    line-height: 1.5;
    &:nth-child(even) {
      background: #ddd;
    }
  }
}
</style>
