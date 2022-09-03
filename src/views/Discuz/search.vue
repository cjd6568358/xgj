<template>
  <div class="discuzSearch-page">
    <List
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      :immediate-check="false"
      @load="loadMore"
    >
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
          <RadioGroup direction="horizontal" v-model="orderBy">
            <Radio icon-size="20px" checked-color="#2b91fd" name="lastpost"
              >回复时间</Radio
            >
            <Radio icon-size="20px" checked-color="#2b91fd" name="dateline"
              >发布时间</Radio
            >
            <Radio icon-size="20px" checked-color="#2b91fd" name="replies"
              >回复数量</Radio
            >
            <Radio icon-size="20px" checked-color="#2b91fd" name="divs"
              >浏览次数</Radio
            >
          </RadioGroup>
        </div>
        <div class="search_params">
          <label class="title">排序方式:</label>
          <van-switch
            size="20px"
            v-model="sortType"
            active-value="asc"
            inactive-value="desc"
            active-color="#2b91fd"
          />
          &nbsp;&nbsp; {{ sortType == "asc" ? "  升序" : "  降序" }}
        </div>
        <div class="search_btn" @click="onSearch">搜索</div>
      </div>
      <div class="result_empty" v-if="!loading && threadList.length === 0">
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
    </List>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import { RadioGroup, Radio, Switch, List } from "vant";
import { selectors } from "../../util";
export default {
  name: "DiscuzSearchView",
  components: {
    RadioGroup,
    Radio,
    List,
    "van-switch": Switch,
  },
  data() {
    return {
      loading: false,
      finished: false,
      srchtxt: "",
      srchuname: "",
      orderBy: "lastpost",
      sortType: "desc",
      threadList: [],
      pageNum: 0,
      pageCount: 0,
    };
  },
  computed: {
    ...mapState(["isLoading", "discuz"]),
  },
  methods: {
    ...mapActions(["getPageData", "searchData"]),
    async onSearch() {
      let { srchtxt, srchuname, orderBy, sortType } = this;
      if (srchtxt || srchuname) {
        this.loading = true;
        this.finished = false;
        let { threadList, pageCount, searchHref } = await this.searchData({
          srchtxt,
          srchuname,
          orderBy,
          sortType,
        });
        if (pageCount) {
          Object.assign(this, {
            threadList,
            searchHref: searchHref.replace(/page=(.*)$/g, ""),
            pageNum: 1,
            pageCount,
          });
        } else {
          Object.assign(this, {
            threadList: [],
            searchHref: "",
            pageNum: 1,
            pageCount: 0,
          });
        }
        this.loading = false;
        if (1 >= pageCount) {
          this.finished = true;
        }
      }
    },
    async loadMore() {
      let { searchHref, pageNum } = this;
      let { threadList } = await this.getPageData({
        url: `/bbs/${searchHref}page=${pageNum + 1}`,
        selector: selectors.search,
      });
      if (threadList.length > 0) {
        Object.assign(this, {
          threadList: this.threadList.concat(threadList),
          pageNum: pageNum + 1
        });
      }
      this.loading = false;
      if (this.pageNum >= this.pageCount) {
        this.finished = true;
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
      margin-bottom: 15px;
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
      box-sizing: border-box;
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