<template>
	<div class="discuzThread-page">
		<Menus :url="url" :tid="tid"></Menus>
		<div class="overflow-container">
			<ul class="thread">
				<li class="post" v-for="(post,i) of postList" :key="i">
					<div class="post-info">
						<span>{{post.postFloor}}</span>
						<span>{{post.authorName}}</span>
						<span>{{post.authorLevel}}</span>
						<div class="post-time">{{post.postTime}}</div>
					</div>
					<h2>{{post.postTitle}}</h2>
					<div class="post-content" v-html="post.content"></div>
				</li>
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
			postList: [],
			tid: "",
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
	async mounted() {
		await this.getThreadPageJson(this.url);
		if (this.$route.query.scrollTop) {
			this.$nextTick(() => {
				document.querySelector(
					".overflow-container"
				).scrollTop = this.$route.query.scrollTop;
			});
		}
	},
	beforeMount() {},
	destroyed() {},
	async beforeRouteUpdate(to, from, next) {
		next();
		await this.getThreadPageJson(to.params.url);
		document.querySelector(".overflow-container").scrollTop = 0;
	},
	methods: {
		...mapActions(["getPageData"]),
		async getThreadPageJson(url) {
			let pageData = {};
			if (sessionStorage.getItem(url)) {
				pageData = JSON.parse(sessionStorage.getItem(url));
			} else {
				let selector = selectors.thread;
				pageData = await this.getPageData({ url, selector });
				sessionStorage.setItem(url, JSON.stringify(pageData));
			}

			document.title = pageData.documentTitle;
			if (pageData.pageInfo) {
				this.pageInfo = pageData.pageInfo;
			}
			this.tid = pageData.tid;
			this.postList = pageData.postList;
			this.postList.forEach(item => {
				item.content = item.content
					.replace(/="attachment/g, `="${this.targetHost}attachment`)
					.replace(/="images/g, `="${this.targetHost}images`)
					.replace(/="http:\/\/(.*)\/bbs\//g, `="${this.targetHost}`)
					.replace(
						/="(viewthread|thread.*)" target/g,
						($0, $1, $2, $3) => {
							return `="${
								process.env.BASE_URL
							}discuz/thread/${encodeURIComponent(
								this.targetHost + $1
							)}" target`;
						}
					)
					.replace(/:14pt/g, ":5vw");
			});
		}
	}
};
</script>
<style lang="scss" >
.discuzThread-page {
	.thread {
		padding: 0 20px;
		.post {
			line-height: 1.8;
			margin-bottom: 10px;
			&:not(:first-child) {
				// border-top: 2px solid #ddd;
			}
			.post-info {
				background: #fbfbff;
				span {
					margin-right: 10px;
				}
				.post-time {
					font-size: 14px;
				}
			}
			.post-content {
				background: #fff;
				img {
					max-width: 100% !important;
				}
			}
		}
	}
}
</style>
