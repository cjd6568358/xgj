<template>
	<div class="discuzForum-page">
		<Menus :url="url"></Menus>
		<div class="overflow-container" @touchmove="onScroll">
			<ul class="area" v-for="(forum,i) of forumList" :key="i" :data-title="forum.name">
				<template v-for="(thread,ii) of forum.value">
					<router-link v-if="thread.type != '投票'" :key="ii" :to="{name: 'DiscuzThreadView', params: { url: targetHost + thread.href }}" tag="li">
						{{thread.title}}
						<template v-if="thread.permission">[阅读权限{{thread.permission}}]</template>
						♥{{thread.thanks}} ({{thread.nums}})
					</router-link>
				</template>
			</ul>
			<Pagination v-if="!isLoading" :currPageNum="pageInfo.currPageNum" :totalPageNum="pageInfo.totalPageNum" :prevUrl="prevUrl" :nextUrl="pageInfo.nextUrl"></Pagination>
		</div>
	</div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
import http from "../../util/http";
import Pagination from "../../components/Pagination";
import Menus from "../../components/Menus";
import selectors from "../../util/html2JsonSelector";
export default {
	props: ["url"],
	components: { Pagination, Menus },
	data() {
		return {
			forumList: [],
			pageInfo: {
				currPageNum: 1,
				totalPageNum: 1,
				nextPageNum: null,
				nextUrl: null
			}
		};
	},
	computed: {
		...mapState(["isLoading", "discuz"]),
		...mapGetters(["targetHost"]),
		prevUrl() {
			let prevUrl = "";
			if (this.pageInfo && this.pageInfo.currPageNum != 1 && this.url) {
				prevUrl = this.url
					.replace(/.*bbs\//g, "")
					.replace(
						/(\d*)\.html/,
						`${this.pageInfo.currPageNum - 1}.html`
					);
			}
			return prevUrl;
		}
	},
	async mounted() {},
	async beforeRouteUpdate(to, from, next) {
		next();
		await this.getForumPageJson(to.params.url);
		document.querySelector(".overflow-container").scrollTop = sessionStorage.getItem(to.params.url) || 0;
	},
	async activated() {
		await this.getForumPageJson(this.url);
		document.querySelector(".overflow-container").scrollTop = sessionStorage.getItem(this.url) || 0;
	},
	beforeMount() {},
	destroyed() {},
	methods: {
		async getForumPageJson(url) {
			let pageData = {};
			if (sessionStorage.getItem(url)) {
				pageData = JSON.parse(sessionStorage.getItem(url));
			} else {
				let postData = {
					httpConfig: {
						url: `${url}`,
						method: "get",
						responseType: "arraybuffer"
					},
					encoding: "gbk",
					selector: selectors.forum
				};
				this.$store.commit("SET_LOADING_STATUS", true);
				let {
					data: { data }
				} = await http.post(
					`${this.discuz.HOST}/api/html2Json`,
					postData
				);
				this.$store.commit("SET_LOADING_STATUS", false);
				pageData = data;
				sessionStorage.setItem(url, JSON.stringify(pageData));
			}

			this.forumList = pageData.forumList;
			this.pageInfo = pageData.pageInfo;
			document.title = pageData.documentTitle;
		},
		onScroll() {
			if (this.timer) {
				clearTimeout(this.timer);
			}
			this.timer = setTimeout(() => {
				sessionStorage.setItem(
					this.url,
					document.querySelector(".overflow-container").scrollTop
				);
			}, 500);
		}
	}
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
