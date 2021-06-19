<template>
  <div class="discuzForum-page">
    <Menus :url="url"></Menus>
    <div class="overflow-container" @touchmove="onScroll">
      <template v-if="forumList.length">
        <ul class="area" data-title="子版块">
          <router-link
            v-for="(form, ii) of forumList"
            :key="ii"
            :to="{
              name: 'DiscuzForumView',
              params: { url: form.href },
            }"
            tag="li"
            >{{ form.name }}</router-link
          >
        </ul>
      </template>
      <ul class="area" v-for="(area, i) of threadList" :key="i" :data-title="area.name">
        <template v-for="(thread, ii) of area.value">
          <router-link
            v-if="thread.type != '投票'"
            :key="ii"
            :to="{
              name: 'DiscuzThreadView',
              params: { url: thread.href },
            }"
            tag="li"
          >
            [{{ thread.date }}] {{ thread.title }}
            <template v-if="thread.permission">[阅读权限{{ thread.permission }}]</template>
            ♥{{ thread.thanks }} ({{ thread.nums }})
          </router-link>
        </template>
      </ul>
      <Pagination v-if="!isLoading" :pageNum="pageInfo.pageNum" :pageCount="pageInfo.pageCount" :prevUrl="prevUrl" :nextUrl="nextUrl"></Pagination>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from "vuex";
import http from "../../util/http";
import Pagination from "../../components/Pagination";
import Menus from "../../components/Menus";
import { selectors } from "../../util";
export default {
  props: ["url"],
  components: { Pagination, Menus },
  data() {
    return {
      forumList: [],
      threadList: [],
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
      if (this.pageInfo && this.pageInfo.pageNum != 1 && this.url) {
        prevUrl = this.url.replace(/(^.*-)(\d.*)(.html$)/g, `$1${this.pageInfo.pageNum - 1}$3`);
      }
      return prevUrl;
    },
    nextUrl() {
      let nextUrl = "";
      if (this.pageInfo && this.pageInfo.pageNum < this.pageInfo.pageCount && this.url) {
        nextUrl = this.url.replace(/(^.*-)(\d.*)(.html$)/g, `$1${this.pageInfo.pageNum + 1}$3`);
      }
      return nextUrl;
    },
  },
  async mounted() {},
  async beforeRouteUpdate(to, from, next) {
    next();
    await this.getForumPageData(to.params.url);
    document.querySelector(".overflow-container").scrollTop = sessionStorage.getItem(to.params.url + "_scrollTop") || 0;
  },
  async activated() {
    await this.getForumPageData(this.url);
    document.querySelector(".overflow-container").scrollTop = sessionStorage.getItem(this.url + "_scrollTop") || 0;
  },
  beforeMount() {},
  destroyed() {},
  methods: {
    ...mapActions(["getPageData"]),
    async getForumPageData(url) {
      let pageData = {};
      if (sessionStorage.getItem(url)) {
        pageData = JSON.parse(sessionStorage.getItem(url));
      } else {
        let selector = selectors.forum;
        pageData = await this.getPageData({
          url: this.targetHost + url,
          selector,
        });
        sessionStorage.setItem(url, JSON.stringify(pageData));
      }
      this.forumList = pageData.forumList;
      this.threadList = pageData.threadList;
      this.pageInfo = pageData.pageInfo || {
        pageNum: 1,
        pageCount: 1,
      };
      document.title = pageData.documentTitle;
    },
    onScroll() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        sessionStorage.setItem(this.url + "_scrollTop", document.querySelector(".overflow-container").scrollTop);
      }, 500);
    },
  },
};
</script>
<style lang="scss" scoped>
.area {
  position: relative;
  padding-top: 60px;
  background: #fff;
  max-height: 99999px;
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    font-size: 32px;
    padding-left: 20px;
    height: 60px;
    line-height: 60px;
    color: #fff;
    content: attr(data-title);
    background: #2a6eb4;
  }
  li {
    line-height: 1.8;
    padding: 0 20px;
    font-size: 30px;
    &:nth-child(even) {
      background: #ddd;
    }
  }
}
</style>
