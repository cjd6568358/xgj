<template>
  <div class="autoLogin-page"></div>
</template>
<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  async mounted() {
    let { cookies, redirectTo } = this.$route.query;
    if (cookies && redirectTo) {
      cookies = JSON.parse(cookies);
      Object.keys(cookies).forEach(
        (key) => (document.cookie = `${key}=${cookies[key]}`)
      );
      location.href = `/xgj/discuz/thread/${redirectTo}`;
    } else {
      this.$Toast.info("自动登录失败，缺少参数!");
    }
  },
};
</script>