<template>
  <div class="account-list-page">
    <div class="overflow-container">
      <div class="title">
        <span class="icon-back" @click="$router.go(-1)"></span>
        网站列表
        <router-link class="icon-plus" tag="span" :to="{ name: 'AccountView', params: { type: 'add' } }"></router-link>
      </div>
      <ul>
        <router-link tag="li" :key="i" v-for="(item, i) of accountList" :to="{ name: 'AccountView', params: { type: 'edit', id: item.guid } }">{{ item.remark }}</router-link>
      </ul>
    </div>
    <TabBar></TabBar>
  </div>
</template>
<script>
import TabBar from "../../components/TabBar/index.vue";
import accountModel from "../../util/accountModel";
export default {
  components: { TabBar },
  data() {
    return {
      accountList: [],
    };
  },
  async mounted() {
    this.accountList = await accountModel.getAll();
  },
};
</script>
<style lang="scss" scoped>
.account-list-page {
  .overflow-container {
    .title {
      text-align: center;
      height: 80px;
      line-height: 80px;
      font-size: 26px;
      padding: 0 20px;
      border-bottom: 1px solid #d3d3d3;
      position: relative;
      .icon-plus {
        display: inline-block;
        position: absolute;
        width: 40px;
        height: 40px;
        top: 50%;
        right: 20px;
        transform: translateY(-50%);
        background: url(./images/plus.svg) 100% / 100% no-repeat;
      }
      .icon-back {
        display: inline-block;
        position: absolute;
        width: 48px;
        height: 48px;
        top: 50%;
        left: 20px;
        transform: translateY(-50%);
        background: url(../../assets/arrow-left.svg) 100% / 100% no-repeat;
      }
    }
    ul {
      background-color: #fff;
      li {
        padding: 0 20px;
        height: 80px;
        line-height: 80px;
        border-bottom: 1px solid #d3d3d3;
      }
    }
  }
}
</style>
