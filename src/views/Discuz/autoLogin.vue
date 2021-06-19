<template>
  <div class="autoLogin-page"></div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["discuz"]),
  },
  async mounted() {
    let { cookies, redirectTo } = this.$route.query;
    if (this.discuz.isLogin) {
      this.$router.push(`/discuz/thread/${redirectTo}`);
    } else {
      if (cookies && redirectTo) {
        cookies = JSON.parse(cookies);
        Object.keys(cookies).forEach((key) => (document.cookie = `${key}=${cookies[key]}`));
        location.href = `/xgj/discuz/thread/${redirectTo}`;
      } else {
        this.$Toast.info("自动登录失败，缺少参数!");
      }
    }
  },
};
</script>