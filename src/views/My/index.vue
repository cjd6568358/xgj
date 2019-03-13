<template>
	<div class="my-page">
		<div class="overflow-container">
			<div class="user">
				<img src="//q2.qlogo.cn/g?b=qq&k=5iapa3nHicXobHy5D7nmibgOQ&s=100" alt>
				<div class="info">
					<p class="name">测试</p>
					<div class="phone">13512341234</div>
				</div>
			</div>
			<ul>
				<li @click="deleteSignRecords">清除考勤记录</li>
				<li @click="deleteDB">删除数据库</li>
				<li @click="clearCacheClick">清除缓存</li>
				<li @click="recordsExportClick">备份</li>
				<li @click="recordsImportClick">导入</li>
				<li @click="debugClick">{{debug ? '关闭':'打开'}}调试</li>
				<li @click="switchTemmeConvert">{{temmeConvert}}进行HTML转换</li>
				<li>
					<span>切换论坛源</span>
					<select name id placeholder="请选择站点" v-model="webSite">
						<option v-for="item of discuz.webSiteList" :key="item" :value="item">{{item}}</option>
					</select>
				</li>
			</ul>
		</div>
		<TabBar></TabBar>
	</div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import TabBar from "../../components/TabBar/index.vue";
import RecordsImport from "../../components/RecordsImport/index.vue";
import RecordsExport from "../../components/RecordsExport/index.vue";
import DbHelper from "../../util/dbHelper";
export default {
	components: { TabBar },
	data() {
		return {};
	},
	computed: {
		...mapState(["debug", "temmeConvert", "discuz"]),
		webSite: {
			get() {
				return this.discuz.webSite;
			},
			set(newValue) {
				this.$store.commit("UPDATE_DISCUZ", {
					webSite: newValue
				});
			}
		}
	},
	mounted() {},
	methods: {
		...mapActions(["switchTemmeConvert"]),
		recordsImportClick() {
			this.$openModal({
				position: "bottom",
				maskClosable: true,
				content: <RecordsImport />
			});
		},
		recordsExportClick() {
			this.$openModal({
				position: "bottom",
				maskClosable: true,
				content: <RecordsExport />
			});
		},
		deleteDB() {
			if (
				window.confirm("确认操作1") &&
				window.confirm("确认操作2") &&
				window.confirm("确认操作3")
			) {
				DbHelper.delete();
				this.$Toast.info("清除数据库完成!");
			}
		},
		deleteSignRecords() {
			if (
				window.confirm("确认操作1") &&
				window.confirm("确认操作2") &&
				window.confirm("确认操作3")
			) {
				DbHelper.signRecords.clear();
				this.$Toast.info("清除考勤记录完成!");
			}
		},
		async clearCacheClick() {
			if (confirm("确认清除缓存?")) {
				let caches = await window.caches.keys();
				caches.forEach(cacheKey => {
					window.caches.delete(cacheKey);
				});
				let registration = await navigator.serviceWorker.getRegistration();
				registration.unregister();
				this.$Toast.info("清除成功");
			}
		},
		debugClick() {
			localStorage.setItem("debug", !this.debug);
			location.reload();
		}
	}
};
</script>

<style lang="scss" scoped>
.my-page {
	.overflow-container {
		.user {
			margin: 20px 0;
			padding: 30px 20px;
			background-color: #fff;
			display: flex;
			align-items: center;
			img {
				width: 100px;
				height: 100px;
				border-radius: 50%;
				margin-right: 30px;
				border: 1px solid #d3d3d3;
			}
			.info {
				flex: 1;
				.name {
					font-size: 30px;
				}
			}
		}
		.title {
			height: 60px;
			line-height: 60px;
			padding: 0 20px;
			font-size: 26px;
			border-bottom: 1px solid #d3d3d3;
		}
		ul {
			background-color: #fff;
			padding: 0 20px;
			font-weight: 500;
			li {
				height: 80px;
				line-height: 80px;
				border-bottom: 1px solid #d3d3d3;
				display: flex;
				&:last-child {
					border-bottom: 0;
				}
				span {
					flex: 1;
				}
			}
		}
	}
}
</style>
