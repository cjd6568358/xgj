<template>
  <div class="discuzThread-page">
    <Menus :url="url" :tid="tid" :fid="fid"></Menus>
    <div class="overflow-container">
      <ul class="thread">
        <li class="post" v-for="(post, i) of postList" :key="i">
          <div class="post-info">
            <span>{{ post.postFloor }}</span>
            <span>{{ post.authorName }}</span>
            <span>{{ post.authorLevel }}</span>
            <div class="post-time">{{ post.postTime }}</div>
          </div>
          <h2>{{ post.postTitle }}</h2>
          <div
            class="post-content"
            v-html="post.content"
            @click.capture="routerTo"
          ></div>
        </li>
      </ul>
      <Pagination
        v-if="!isLoading"
        :pageNum="pageInfo.pageNum"
        :pageCount="pageInfo.pageCount"
        :prevUrl="prevUrl"
        :nextUrl="nextUrl"
      ></Pagination>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from "vuex";
import Pagination from "../../components/Pagination";
import Menus from "../../components/Menus";
import { selectors } from "../../util";
export default {
  props: ["url"],
  components: { Pagination, Menus },
  data() {
    return {
      postList: [],
      tid: "",
      fid: "",
      pageInfo: {
        pageNum: 1,
        pageCount: 1,
      },
    };
  },
  computed: {
    ...mapState(["isLoading", "discuz"]),
    ...mapGetters(["targetHost"]),
    prevUrl() {
      let prevUrl = "";
      let { pageNum } = this.pageInfo;
      if (this.pageInfo && pageNum != 1) {
        prevUrl = `thread-${this.tid}-${pageNum - 1}-1.html`;
      }
      return prevUrl;
    },
    nextUrl() {
      let nextUrl = "";
      let { pageNum, pageCount } = this.pageInfo;
      if (this.pageInfo && pageNum < pageCount && this.url) {
        nextUrl = `thread-${this.tid}-${pageNum + 1}-1.html`;
      }
      return nextUrl;
    },
  },
  async mounted() {
    if (this.$route.query.tid) {
      this.tid = this.$route.query.tid;
    }
    try {
      await this.getThreadPageJson(this.url);
    } catch (error) {
      console.log(error);
    }
    let scrollElement = document.querySelector(".overflow-container");
    if (this.$route.query.scrollTop) {
      this.$nextTick(() => {
        scrollElement.scrollTop = this.$route.query.scrollTop;
      });
    } else if (this.$route.hash) {
      scrollElement = document.querySelector(this.$route.hash);
      scrollElement && scrollElement.scrollIntoView();
    }
  },
  beforeMount() {},
  destroyed() {},
  async beforeRouteUpdate(to, from, next) {
    next();
    await this.getThreadPageJson(to.params.url);
    let scrollElement = document.querySelector(".overflow-container");
    if (to.hash) {
      scrollElement = document.querySelector(this.$route.hash);
      scrollElement && scrollElement.scrollIntoView();
    } else {
      scrollElement.scrollTop = 0;
    }
  },
  methods: {
    ...mapActions(["getPageData"]),
    async getThreadPageJson(url) {
      let pageData = {};
      if (sessionStorage.getItem(url)) {
        pageData = JSON.parse(sessionStorage.getItem(url));
      } else {
        let selector = selectors.thread;
        pageData = await this.getPageData({
          url: this.targetHost + url,
          selector,
        });
        sessionStorage.setItem(url, JSON.stringify(pageData));
      }

      let {
        documentTitle,
        pageInfo,
        formhash,
        replyUrl,
        prevTopicUrl,
        nextTopicUrl,
        favoriteUrl,
        newThreadUrl,
        postList = [],
      } = pageData;

      document.title = documentTitle;
      this.discuz.formhash = formhash;
      if (pageInfo) {
        this.pageInfo = pageInfo;
      }
      if (replyUrl) {
        this.tid = replyUrl.replace(/(^post.*tid=)(\d.*)(&extra=.*$)/g, "$2");
        this.fid = replyUrl.replace(/(^post.*fid=)(\d.*)(&tid=.*$)/g, "$2");
      } else if (prevTopicUrl || nextTopicUrl) {
        this.tid = (prevTopicUrl || nextTopicUrl).replace(
          /(^redirect.*tid=)(\d.*)(&goto=.*$)/g,
          "$2"
        );
        this.fid = (prevTopicUrl || nextTopicUrl).replace(
          /(^redirect.*fid=)(\d.*)(&tid=.*$)/g,
          "$2"
        );
      } else if (favoriteUrl && newThreadUrl) {
        this.tid = favoriteUrl.replace(/(^my.*tid=)(\d.*)(.*$)/g, "$2");
        this.fid = newThreadUrl.replace(
          /(^post.*fid=)(\d.*)(&extra=.*$)/g,
          "$2"
        );
      }
      this.postList = postList;
      this.postList.forEach((item) => {
        item.content = item.content
          .replace(/[\t]/g, ``)
          .replace(/(\S)(<br>)(\S)/g, "$1$3")
          .replace(/="attachment/g, `="${this.targetHost}attachment`)
          .replace(/="images/g, `="${this.targetHost}images`)
          .replace(/="http:\/\/(.*)\/bbs\//g, `="${this.targetHost}`)
          // .replace(/(href="viewthread.*tid=)(\d.*)(&page=)(\d.*)(#pid\d.*)"?/g,'href="thread-$2-$4-1.html$5"')
          .replace(/:14pt/g, ":5vw");
      });
    },
    async routerTo(event) {
      let {
        target: { href, nodeName },
      } = event;
      if (nodeName === "A" && href.includes("viewthread.php?tid=")) {
        href = href.replace(
          /(^.*tid=)(\d.*)&page=(\d.*)#pid(\d.*)/g,
          `thread-$2-$3-1.html#postmessage_$4`
        );
        let { params, hash } = this.$route;
        if (params.url + hash != href) {
          this.$router.push(href);
        }
        event.preventDefault();
        event.stopPropagation();
      }
    },
  },
};
</script>
<style lang="scss" >
.discuzThread-page {
  .thread {
    background-color: #fff;
    padding: 20px;
    .post {
      line-height: 1.8;
      margin-bottom: 10px;
      .post-info {
        background: #fbfbff;
        span {
          margin-right: 10px;
        }
        .post-time {
          font-size: 14px;
        }
      }
      .post-content {
        background: #fff;
        overflow: auto;
        img {
          max-width: 100% !important;
        }
      }
    }
  }
}
</style>
