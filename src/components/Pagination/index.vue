<template>
    <div class="pagination">
        <a v-if="prevUrl" class="btn prev-btn" @click="gotoPage(prevUrl)">上一页</a>
        <a class="btn currPageInfo">{{`${currPageNum}/${totalPageNum}`}}</a>
        <a v-if="nextUrl" class="btn next-btn" @click="gotoPage(nextUrl)">下一页</a>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  props: ["prevUrl", "nextUrl", "currPageNum", "totalPageNum"],
  computed: {
    ...mapGetters([
      "targetHost"
    ])
  },
  methods: {
    gotoPage(url) {
      console.log(url)
      this.$router.push(
        encodeURIComponent(`${this.targetHost}${url}`)
      );
    }
  }
};
</script>
<style lang="scss" scoped>
.pagination {
  text-align: center;
  padding: 20px 0;
  .btn {
    display: inline-block;
    padding: 20px;
    background: #fff;
    border: 2px solid #ddd;
    border-radius: 10px;
    &.currPageInfo{
        margin: 0 20px;
    }
    &.prev-btn {
    }
    &.next-btn {
    }
  }
}
</style>
