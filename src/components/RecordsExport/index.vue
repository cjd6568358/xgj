<template>
	<div class="records-export-modal">
		<svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
			<defs>
				<symbol id="icon-multiselect-default" viewBox="0 0 32 32">
					<title>multiselect-default</title>
					<path d="M16 25.973c-5.493 0-10.027-4.48-10.027-10.027s4.48-10.027 10.027-10.027 10.027 4.48 10.027 10.027-4.533 10.027-10.027 10.027zM16 4c-6.613 0-12 5.387-12 12s5.387 12 12 12c6.613 0 12-5.387 12-12s-5.387-12-12-12z"></path>
					<path d="M19.36 13.387l-4.747 5.173-1.92-2.187c-0.373-0.427-1.013-0.427-1.387-0.107-0.427 0.373-0.427 1.013-0.053 1.387l2.667 2.987c0.213 0.213 0.48 0.32 0.747 0.32v0c0.267 0 0.533-0.107 0.747-0.32l5.493-6.027c0.373-0.427 0.32-1.067-0.053-1.387s-1.12-0.267-1.493 0.16v0z"></path>
				</symbol>
				<symbol id="icon-multiselect-selected" viewBox="0 0 32 32">
					<title>multiselect-selected</title>
					<path d="M20.8 14.72l-5.493 6.027c-0.213 0.213-0.48 0.32-0.747 0.32v0c-0.267 0-0.533-0.107-0.747-0.32l-2.667-2.987c-0.373-0.427-0.32-1.067 0.053-1.387 0.427-0.373 1.067-0.32 1.387 0.053l1.92 2.187 4.747-5.173c0.373-0.427 1.013-0.427 1.387-0.053 0.48 0.32 0.533 0.96 0.16 1.333zM16 4c-6.613 0-12 5.387-12 12s5.387 12 12 12c6.613 0 12-5.387 12-12s-5.387-12-12-12z"></path>
				</symbol>
			</defs>
		</svg>
		<header>请选择需要备份的项目</header>
		<div class="export-body">
			<ul>
				<li v-for="(item,i) of backUpList" :key="i" :class="{selected:item.selected}" @click="item.selected = !item.selected">
					<svg>
						<use v-if="item.selected" xlink:href="#icon-multiselect-selected"></use>
						<use v-else xlink:href="#icon-multiselect-default"></use>
					</svg>
					{{item.name}}
				</li>
			</ul>
		</div>
		<footer>
			<button @click="confirm(1)">本地备份</button>
			<button @click="confirm(2)">线上备份</button>
		</footer>
	</div>
</template>

<script>
import { getHash, string2File, encryptAES } from "../../util/index";
import DbHelper from "../../util/dbHelper";
export default {
	data() {
		return {
			backUpList: [
				{
					name: "网站数据",
					value: "website",
					selected: false
				},
				{
					name: "签到数据",
					value: "sign",
					selected: false
				}
			]
		};
	},
	methods: {
		async confirm(type) {
			let key = window.prompt("请输入秘钥");
			if (!key) {
				this.$Toast.info("操作失败!");
				return;
			}
			let backup = {};
			let fileName = `xgj_${new Date().Format("yyyyMMddhhmmss")}.bak`;
			if (this.backUpList[0].selected) {
				backup.website = await DbHelper.website.toArray();
			}
			if (this.backUpList[1].selected) {
				backup.sign = await DbHelper.signRecords.toArray();
			}
			backup.hash = getHash(JSON.stringify(backup));
			let params = {
				fileName: fileName,
				data: JSON.stringify(backup),
				key
			};
			if (type === 1) {
				let encryptedString = await encryptAES(params.data, params.key);
				let blob = new Blob([encryptedString], {
					type: "plain/text"
				});
				let a = document.createElement("a");
				// a.download = fileName;
				a.setAttribute("download", fileName);
				a.target = "_blank";
				// 1、使用createObjectURL 文件大小无限制 低版本浏览器无法识别文件名,
				a.href = URL.createObjectURL(blob);
				// 2、使用DataURL 文件大小限制为2M 可以识别文件名 低版本浏览器无法下载
				// a.href = await this.readBlobAsDataURL(blob)
				// 3、使用base64 无法识别文件名
				// a.href = `data:plain/text,${encodeURIComponent(JSON.stringify(backup))}`
				document.body.appendChild(a);
				a.click();
				URL.revokeObjectURL(a.href);
				this.$Toast.info("数据备份成功!");
			} else {
				string2File(params);
			}
			this.$emit("closeModal");
		},
		readBlobAsDataURL(blob) {
			return new Promise(resolve => {
				var a = new FileReader();
				a.onload = function(e) {
					resolve(e.target.result);
				};
				a.readAsDataURL(blob);
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.records-export-modal {
	padding: 0 20px;
	header {
		height: 80px;
		line-height: 80px;
		border-bottom: 1px solid #d3d3d3;
	}
	.export-body {
		padding: 30px 0;
		ul {
			display: flex;
			li {
				flex: 1;
				display: flex;
				align-items: center;
				justify-content: center;
				svg {
					width: 60px;
					height: 60px;
					margin-right: 10px;
					fill: #5a4ec0;
				}
			}
		}
	}
	footer {
		border-top: 1px solid #d3d3d3;
		height: 120px;
		padding: 20px 80px;
		display: flex;
		button {
			flex: 1;
			display: block;
			width: 100%;
			height: 80px;
			border-radius: 10px;
			line-height: 80px;
			background-color: #3389e7;
			color: #fff;
			font-size: 28px;
			&:not(:first-child) {
				margin-left: 20px;
			}
		}
	}
}
</style>
