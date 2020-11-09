<template>
  <div class="tools-page">
    <div class="overflow-container">
      <div class="flow-station">
        <input
          type="text"
          v-model="session"
          placeholder="请输入流量加油站session"
        />
        <select name id v-model="openId">
          <option value="oKXUCj2hnsXf3XNEHlYlaaOENtK0">17316345137</option>
          <option value="oKXUCj14Nnll-1jXgKc25hQ1QAEM">17721490806</option>
          <option value="oKXUCj6oxII_7cEvHM0dPk1RX-eQ">13386089856</option>
        </select>
        <button @click="updateSession">更新SESSION</button>
      </div>
      <div class="bt-download">
        <a
          class="btn"
          href="https://cjd6568358.3322.org:6706/download/"
          target="_blank"
          >查看BT资源</a
        >
      </div>
    </div>
    <TabBar></TabBar>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
import TabBar from "../../components/TabBar/index.vue";
import http from "../../util/http";
import { proxyServers } from "../../util";
export default {
  name: "video-page",
  components: { TabBar },
  data() {
    return {
      session: "",
      openId: "oKXUCj2hnsXf3XNEHlYlaaOENtK0",
    };
  },
  computed: {
    ...mapState(["isLoading", "discuz"]),
    ...mapGetters(["targetHost"]),
  },
  methods: {
    async updateSession() {
      if (this.session) {
        let HOST = proxyServers.filter((item) => item.platom === "N270")[0]
          .host;
        this.$store.commit("SET_LOADING_STATUS", true);
        let {
          data: { data },
        } = await http.get(
          `${HOST}/api/flowStation/update/${this.openId}/${this.session}`
        );
        this.$store.commit("SET_LOADING_STATUS", false);
        this.$Toast.info(data);
      } else {
        this.$Toast.info("请先输入session!");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.tools-page {
  .overflow-container {
    padding: 0 20px;
    input {
      width: 100%;
      height: 60px;
      line-height: 60px;
      border: 1px solid #d3d3d3;
      padding-left: 20px;
    }
    select {
      width: 100%;
      height: 60px;
      line-height: 60px;
      border: 1px solid #d3d3d3;
      margin: 30px 0;
    }
    button,
    a.btn {
      margin-top: 40px;
      display: block;
      width: 100%;
      height: 80px;
      border-radius: 10px;
      line-height: 80px;
      background-color: #3389e7;
      color: #fff;
      font-size: 28px;
    }
  }
  .flow-station {
    margin: 40px 0;
    select {
      margin: 30px 0;
    }
    button {
      margin-top: 40px;
    }
  }
  .bt-download {
    a {
      text-align: center;
    }
  }
}
</style>
