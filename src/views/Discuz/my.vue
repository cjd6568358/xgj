<template>
	<div class="discuzMy-page">
		<div class="overflow-container">
			<ul class="user-info">
				<li>用户名:{{discuz.userInfo.username}}</li>
				<li v-if="discuz.signInfo.isSigned">签到状态:{{discuz.signInfo.isSigned?'已签到':'未签到'}}</li>
				<li v-for="item of creditList" :key="item">{{item}}</li>
			</ul>
			<ul class="area" data-title="我的收藏">
				<template v-for="(thread,i) of collections">
					<li :key="i" v-if="thread">
						<router-link :to="{name: 'DiscuzThreadView', params: { url: thread.href }, query: { scrollTop: thread.scrollTop }}">{{thread.title}}</router-link>
					</li>
				</template>
			</ul>
			<ul class="area" data-title="最近回复">
				<template v-for="(thread,i) of recentReply">
					<router-link v-if="thread" :key="i" :to="{name: 'DiscuzThreadView', params: { url: targetHost + thread.href }}" tag="li">{{thread.title}}</router-link>
				</template>
			</ul>
			<ul class="area" data-title="最近主题">
				<template v-for="(thread,i) of recentTopics">
					<router-link v-if="thread" :key="i" :to="{name: 'DiscuzThreadView', params: { url: targetHost + thread.href }}" tag="li">{{thread.title}}</router-link>
				</template>
			</ul>
		</div>
	</div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
import http from "../../util/http";
import selectors from "../../util/html2JsonSelector";
export default {
	name: "discuz-page",
	components: {},
	data() {
		return {
			collections: [],
			creditList: [],
			recentReply: [],
			recentTopics: []
		};
	},
	computed: {
		...mapState(["isLoading", "discuz"]),
		...mapGetters(["targetHost"])
	},
	mounted() {
		this.init();
	},
	beforeMount() {},
	destroyed() {},
	methods: {
		async init() {
			if (this.discuz.isLogin) {
				await this.getMyPageJson();
				this.collections =
					JSON.parse(localStorage.getItem("collections")) || [];
			} else {
				this.$router.replace("/index");
			}
		},
		async getMyPageJson() {
			let {
				targetHost,
				discuz: { userInfo, HOST, signInfo }
			} = this;
			let postData = {
				httpConfig: {
					url: `${targetHost}my.php`,
					method: "get",
					responseType: "arraybuffer"
				},
				encoding: "gbk",
				selector: selectors.my
			};
			this.$store.commit("SET_LOADING_STATUS", true);
			let {
				data: { data }
			} = await http.post(`${HOST}/api/html2Json`, postData);
			this.$store.commit("SET_LOADING_STATUS", false);
			userInfo.username = data.username;
			this.creditList = data.creditList;
			this.recentReply = data.recentReply;
			this.recentTopics = data.recentTopics;
			this.recentTopics &&
				this.recentTopics.forEach(item => {
					if (
						item &&
						item.title ==
							`${data.username}/${new Date().getMonth() +
								1}月份/打卡签到帖`
					) {
						if (
							item.lastPost.includes(
								new Date().Format("yyyy-M-d")
							)
						) {
							signInfo.isSigned = true;
						} else {
							signInfo.tid = item.tid;
						}
					}
				});
		}
	}
};
</script>
<style lang="scss" scoped>
.user-info {
	// display: flex;
	padding: 20px;
	background: #fff;
	font-size: 32px;
	li {
		padding-right: 20px;
		margin-right: 20px;
		&:last-child {
			border-right: 0;
		}
	}
}
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
		padding: 0 20px;
		font-size: 30px;
		line-height: 1.8;
		&:nth-child(even) {
			background: #ddd;
		}
	}
}
</style>
