<template>
  <div class="discuzSearch-page">
    <div class="search_wrap">
      <input
        class="search_input"
        type="text"
        v-model="srchtxt"
        maxlength="40"
        placeholder="请输入关键词, 关键字中可使用通配符 '*'"
      />
      <input
        class="search_input"
        type="text"
        v-model="srchuname"
        maxlength="40"
        placeholder="请输入用户名, 用户名中可使用通配符 '*', 如 *user*"
      />
      <div class="search_params">
        <label class="title">排序类型:</label>
      </div>
      <div class="search_params">
        <radio-group class="radio-group" @change="orderByChange">
          <label class="radio">
            <radio
              value="lastpost"
              color="#2b91fd"
              :checked="orderBy === 'lastpost'"
            />回复时间
          </label>
          <label class="radio">
            <radio
              value="dateline"
              color="#2b91fd"
              :checked="orderBy === 'dateline'"
            />发布时间
          </label>
          <label class="radio">
            <radio
              value="replies"
              color="#2b91fd"
              :checked="orderBy === 'replies'"
            />回复数量
          </label>
          <label class="radio">
            <radio
              value="divs"
              color="#2b91fd"
              :checked="orderBy === 'divs'"
            />浏览次数
          </label>
        </radio-group>
      </div>
      <div class="search_params">
        <label class="title">排序方式:</label>
        <switch
          class="sort_switch"
          color="#2b91fd"
          :checked="sortType === 'asc'"
          @change="sortTypeChange"
        />
        {{ sortType === "asc" ? "升序" : "降序" }}
      </div>
      <div class="search_btn" @click="onSearch">搜索</div>
    </div>
    <div class="result_empty" v-if="!isLoading && threadList.length === 0">
      暂无数据
    </div>
    <ul class="area" v-if="threadList.length" data-title="最近主题">
      <template v-for="(thread, i) of threadList">
        <router-link
          v-if="thread"
          :key="i"
          :to="{
            name: 'DiscuzThreadView',
            params: { url: `thread-${thread.tid}-1-1.html` },
          }"
          custom
          v-slot="{ navigate }"
        >
          <li class="item" @click="navigate">
            [{{ thread.date }}] {{ thread.title }} ({{ thread.nums }})
          </li>
        </router-link>
      </template>
    </ul>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "DiscuzSearchdiv",
  data() {
    return {
      srchtxt: "",
      srchuname: "",
      orderBy: "lastpost",
      sortType: "desc",
      threadList: [],
    };
  },
  computed: {
    ...mapState(["isLoading", "discuz"]),
    ...mapGetters(["targetHost"]),
  },
  methods: {
    ...mapActions(["getPageData", "searchData"]),
    async onSearch() {
      let { srchtxt, srchuname, orderBy, sortType } = this;
      if (srchtxt || srchuname) {
        let { threadList, pageCount, searchHref } = await this.searchData({
          srchtxt,
          srchuname,
          orderBy,
          sortType,
        });
        if (pageCount) {
          Object.assign(this.$data, {
            threadList,
            searchHref: searchHref.replace(/page=(.*)$/g, ""),
            pageNum: 1,
            pageCount,
          });
        } else {
          Object.assign(this.$data, {
            threadList: [],
            searchHref: "",
            pageNum: 1,
            pageCount: 0,
          });
        }
      }
    },
    orderByChange({ detail: { value } }) {
      this.setData({
        orderBy: value,
      });
    },
    sortTypeChange({ detail: { value } }) {
      this.setData({
        sortType: value ? "asc" : "desc",
      });
    },
    async loadMore() {
      let { pageNum, pageCount } = this;
      if (pageNum >= pageCount) {
        this.$Toast.info("没有更多啦!");
        return;
      } else {
        let { targetHost, searchHref } = this;
        let { threadList, threadTotal } = await this.getPageData({
          url: `${targetHost}${searchHref}page=${pageNum + 1}`,
          selector: selectors.search,
        });
        if (threadList.length > 0) {
          this.setData({
            threadList: this.threadList.concat(threadList),
            pageNum: pageNum + 1,
            pageCount: Math.ceil(threadTotal / 38) || 1,
          });
        }
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.discuzSearch-page {
  .search_wrap {
    margin-bottom: 30px;
    padding: 20px 40px;

    .search_input {
      width: 100%;
      height: 68px;
      line-height: 68px;
      background-color: #fff;
      border-radius: 10px;
      padding-left: 20px;
      margin-bottom: 20px;
    }

    .search_params {
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      font-size: 26px;

      .title {
        margin-right: 20px;
      }

      .sort_switch {
        scale: 0.8;
      }

      .radio-group {
        flex: 1;
        display: flex;
        justify-content: space-around;

        .radio {
          display: inline-flex;
          align-items: center;
        }
      }
    }

    .search_btn {
      margin-top: 20px;
      width: 100%;
      text-align: center;
      color: #fff;
      line-height: 68px;
      background-color: #2b91fd;
      border-radius: 10px;
    }
  }

  .result_empty {
    color: #666;
    margin-top: 40px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
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
  //   .item {
  //     line-height: 1.8;
  //     padding: 0 20px;
  //     font-size: 30px;

  //     &:nth-child(even) {
  //       background: #ddd;
  //     }
  //   }
}
</style>