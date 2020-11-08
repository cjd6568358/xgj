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
          <div class="post-content" v-html="post.content"></div>
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
import selectors from "../../util/html2JsonSelector";
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
        prevUrl = this.url.url.replace(
          /(^.*thread-\d.*-)(\d.*)(-\d.html)/g,
          `$1${pageNum - 1}$3`
        );
      }
      return prevUrl;
    },
    nextUrl() {
      let nextUrl = "";
      let { pageNum, pageCount } = this.pageInfo;
      if (this.pageInfo && pageNum < pageCount && this.url) {
        nextUrl = this.url.replace(
          /(^.*thread-\d.*-)(\d.*)(-\d.html)/g,
          `$1${pageNum + 1}$3`
        );
      }
      return nextUrl;
    },
  },
  async mounted() {
    await this.getThreadPageJson(this.url);
    if (this.$route.query.scrollTop) {
      this.$nextTick(() => {
        document.querySelector(
          ".overflow-container"
        ).scrollTop = this.$route.query.scrollTop;
      });
    }
  },
  beforeMount() {},
  destroyed() {},
  async beforeRouteUpdate(to, from, next) {
    next();
    await this.getThreadPageJson(to.params.url);
    document.querySelector(".overflow-container").scrollTop = 0;
  },
  methods: {
    ...mapActions(["getPageData"]),
    async getThreadPageJson(url) {
      let pageData = {};
      if (sessionStorage.getItem(url)) {
        pageData = JSON.parse(sessionStorage.getItem(url));
      } else {
        let selector = selectors.thread;
        pageData = await this.getPageData({ url, selector });
        sessionStorage.setItem(url, JSON.stringify(pageData));
      }

      let {
        documentTitle,
        pageInfo,
        formhash,
        replyUrl,
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
      }
      this.postList = postList;
      this.postList.forEach((item) => {
        item.content = item.content
          .replace(/="attachment/g, `="${this.targetHost}attachment`)
          .replace(/="images/g, `="${this.targetHost}images`)
          .replace(/="http:\/\/(.*)\/bbs\//g, `="${this.targetHost}`)
          .replace(/="(viewthread|thread.*)" target/g, ($0, $1) => {
            return `="${process.env.BASE_URL}discuz/thread/${encodeURIComponent(
              this.targetHost + $1
            )}" target`;
          })
          .replace(/:14pt/g, ":5vw");
      });
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
      &:not(:first-child) {
        // border-top: 2px solid #ddd;
      }
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
