<template>
  <div class="discuzMy-page">
    <div class="overflow-container">
      <ul class="user-info">
        <li>用户名:{{ discuz.userInfo.username }}</li>
        <li v-if="discuz.signInfo.isSigned">签到状态:{{ discuz.signInfo.isSigned ? "已签到" : "未签到" }}</li>
        <li v-for="item of creditList" :key="item">{{ item }}</li>
      </ul>
      <ul class="area" data-title="我的收藏">
        <template v-for="(thread, i) of favorites">
          <li :key="i" v-if="thread">
            <router-link
              :to="{
                name: 'DiscuzThreadView',
                params: { url: thread.href },
                query: { scrollTop: thread.scrollTop, tid: thread.tid },
              }"
              >{{ thread.title }}</router-link
            >
          </li>
        </template>
      </ul>
      <ul class="area" data-title="最近回复">
        <template v-for="(thread, i) of recentReply">
          <router-link
            v-if="thread"
            :key="i"
            :to="{
              name: 'DiscuzThreadView',
              params: { url: thread.href },
            }"
            tag="li"
            >{{ thread.title }}</router-link
          >
        </template>
      </ul>
      <ul class="area" data-title="最近主题">
        <template v-for="(thread, i) of recentTopics">
          <router-link
            v-if="thread"
            :key="i"
            :to="{
              name: 'DiscuzThreadView',
              params: { url: thread.href },
            }"
            tag="li"
            >{{ thread.title }}</router-link
          >
        </template>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from "vuex";
import { selectors } from "../../util";
export default {
  name: "discuz-page",
  components: {},
  data() {
    return {
      favorites: [],
      creditList: [],
      recentReply: [],
      recentTopics: [],
    };
  },
  computed: {
    ...mapState(["isLoading", "discuz"]),
    ...mapGetters(["targetHost"]),
  },
  mounted() {
    this.init();
  },
  beforeMount() {},
  destroyed() {},
  methods: {
    ...mapActions(["getPageData"]),
    async init() {
      if (this.discuz.isLogin) {
        await this.getMyPageData();
        this.favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      } else {
        this.$router.replace("/index");
      }
    },
    async getMyPageData() {
      let {
        targetHost,
        discuz: { userInfo, signInfo },
      } = this;
      let url = `${targetHost}my.php`;
      let selector = selectors.my;
      let pageData = await this.getPageData({ url, selector });
      userInfo.username = pageData.username;
      this.creditList = pageData.creditList;
      this.recentReply = pageData.recentReply;
      this.recentTopics = pageData.recentTopics;
      this.recentTopics &&
        this.recentTopics.forEach((item) => {
          if (item && item.title == `${pageData.username}/${new Date().getMonth() + 1}月份/打卡签到帖`) {
            if (item.lastPost.includes(new Date().Format("yyyy-M-d"))) {
              signInfo.isSigned = true;
            } else {
              signInfo.tid = item.tid;
            }
          }
        });
    },
    onlongpress(thread) {
      if (confirm("确定删除该收藏吗")) {
        let i = this.favorites.findIndex((item) => {
          return item === thread;
        });
        this.favorites.splice(i, 1);
        localStorage.setItem("favorites", JSON.stringify(this.favorites));
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.user-info {
  // display: flex;
  padding: 20px;
  background: #fff;
  font-size: 32px;
  li {
    padding-right: 20px;
    margin-right: 20px;
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
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    font-size: 32px;
    padding-left: 20px;
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
