<template>
    <div class="video-page">
        <div class="overflow-container">
            <div class="flow-station">
                <input type="text" v-model="session" placeholder="请输入流量加油站session">
                <button @click="updateSession">
                    更新SESSION
                </button>
            </div>             
        </div>
        <TabBar></TabBar>
    </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
import TabBar from "../../components/TabBar/index.vue";
import http from "../../util/http";
import { HOST2 } from "../../config";
export default {
  name: "video-page",
  components: { TabBar },
  data() {
    return {
      session: ""
    };
  },
  computed: {
    ...mapState(["isLoading", "discuz"]),
    ...mapGetters(["targetHost"])
  },
  mounted() {},
  beforeMount() {},
  destroyed() {},
  methods: {
    async updateSession() {
      if (this.session) {
        this.$store.commit("SET_LOADING_STATUS", true);
        let {
          data: { data }
        } = await http.get(
          `${HOST2}/api/flowStation/update/oKXUCj2hnsXf3XNEHlYlaaOENtK0/${
            this.session
          }`
        );
        this.$store.commit("SET_LOADING_STATUS", false);
        this.$Toast.info(data);
      } else {
        this.$Toast.info("请先输入session!");
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.video-page {
  .flow-station {
    padding: 0 20px;
    margin: 40px 0;
    input {
      width: 100%;
      height: 60px;
      line-height: 60px;
      border: 1px solid #d3d3d3;
      padding-left: 20px;
    }
    button {
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
}
</style>
