<template>
	<ul :class="isOpened && 'opened'">
		<svg style="position: absolute; width: 0; height: 0;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
			<defs>
				<symbol id="icon-close" viewBox="0 0 32 32">
					<title>close</title>
					<path d="M17.387 16l8.907-8.907c0.373-0.373 0.373-1.013 0-1.44-0.373-0.373-1.013-0.373-1.387 0l-8.907 8.907-8.907-8.853c-0.373-0.373-1.013-0.373-1.44 0-0.373 0.373-0.373 1.013 0 1.387l8.907 8.907-8.907 8.907c-0.373 0.373-0.373 1.013 0 1.44 0.373 0.373 1.013 0.373 1.387 0l8.907-8.907 8.907 8.907c0.373 0.373 1.013 0.373 1.387 0 0 0 0 0 0 0 0.373-0.373 0.373-1.013 0-1.44l-8.853-8.907z"></path>
				</symbol>
			</defs>
		</svg>
		<a class="btn-menu" @click="toggleclass">
			<svg>
				<use xlink:href="#icon-close"></use>
			</svg>
		</a>
		<li>
			<span @click="saveProgress">收藏</span>
		</li>
		<li v-if="hasProgress">
			<span @click="delProgress">删除</span>
		</li>
		<li v-if="tid && fid">
			<span @click="onReply">回复</span>
		</li>
		<li>
			<span @click="onReload">刷新</span>
		</li>
	</ul>
</template>
<script>
import Reply from "./components/Reply/index.vue";
export default {
	props: ["url", "tid", "fid"],
	components: {},
	data() {
		return {
			collections: [],
			isOpened: false
		};
	},
	mounted() {
		this.collections =
			JSON.parse(localStorage.getItem("collections")) || [];
	},
	computed: {
		hasProgress() {
			return this.collections.filter(item => {
				return item.tid == this.tid;
			})[0];
		}
	},
	methods: {
		toggleclass() {
			this.isOpened = !this.isOpened;
		},
		saveProgress() {
			let i = this.collections.findIndex(item => {
				return item.tid == this.tid;
			});
			let scrollObj = {
				href: this.url,
				tid: this.tid,
				title: document.title,
				scrollTop: document.querySelector(".overflow-container")
					.scrollTop
			};
			if (i >= 0) {
				this.collections.splice(i, 1, scrollObj);
			} else {
				this.collections.push(scrollObj);
			}

			localStorage.setItem(
				"collections",
				JSON.stringify(this.collections)
			);
		},
		delProgress() {
			let i = this.collections.findIndex(item => {
				return item.tid == this.tid;
			});
			this.collections.splice(i, 1);
			localStorage.setItem(
				"collections",
				JSON.stringify(this.collections)
			);
		},
		onReply() {
			this.$openModal({
				position: "bottom",
				maskClosable: true,
				content: <Reply url={this.url} fid={this.fid} tid={this.tid} />
			});
			this.toggleclass();
		},
		onReload() {
			sessionStorage.removeItem(this.url);
			location.reload(true);
		}
	}
};
</script>
<style lang="scss" scoped>
ul {
	position: absolute;
	bottom: 100px;
	right: 100px;
	z-index: 99;
	&.opened {
		.btn-menu {
			svg {
				transform: rotate(0deg);
			}
		}
		li {
			span {
				display: block;
				transition: all 0.1s;
			}
			&:nth-of-type(1) {
				transform: rotate(0deg);
				span {
					transform: rotate(0deg);
				}
			}
			&:nth-of-type(2) {
				transform: rotate(30deg);
				span {
					transform: rotate(-30deg);
				}
			}
			&:nth-of-type(3) {
				transform: rotate(60deg);
				span {
					transform: rotate(-60deg);
				}
			}
			&:nth-of-type(4) {
				transform: rotate(90deg);
				span {
					transform: rotate(-90deg);
				}
			}
		}
	}
	.btn-menu {
		width: 60px;
		height: 60px;
		position: absolute;
		right: -30px;
		bottom: -30px;
		svg {
			width: 60px;
			height: 60px;
			transform: rotate(-45deg);
			transition: transform 0.2s;
		}
	}
	li {
		width: 200px;
		height: 1px;
		position: absolute;
		right: 0;
		bottom: 0;
		transform-origin: right bottom;
		transition: all 0.3s 0.1s;
		span {
			display: none;
			position: absolute;
			top: -40px;
			left: -40px;
			width: 80px;
			height: 80px;
			border-radius: 50%;
			z-index: 1;
			background: rgba(255, 255, 255, 0.85);
			line-height: 80px;
			text-align: center;
			border: 2px solid #ddd;
			transition: all 0.1s 0.3s;
		}
	}
}
</style>
