<template>
	<div class="discuz-page">
		<div class="overflow-container" @scroll="onScroll">
			<div v-if="!discuz.isLogin" class="login-form">
				<center>
					<h3>discuz论坛手机版</h3>
				</center>
				<div class="input-warp">
					<select name id placeholder="请选择站点" v-model="webSite">
						<option v-for="item of discuz.webSiteList" :key="item" :value="item">{{item}}</option>
					</select>
					<a class="btn" @click="updateWebSiteList">更新列表</a>
				</div>
				<div class="input-warp">
					<input type="text" v-model="userInfo.username" placeholder="请输入用户名">
				</div>
				<div class="input-warp">
					<input type="password" v-model="userInfo.password" placeholder="请输入密码">
				</div>
				<div class="input-warp">
					<input type="text" v-model="userInfo.QA" placeholder="请输入问题ID和答案(以逗号分隔)">
				</div>
				<a class="btn" @click="login">登录</a>
			</div>
			<template v-if="discuz.isLogin">
				<ul class="user-info">
					<router-link :to="{name: 'DiscuzMyView'}" tag="li">{{discuz.userInfo.username}}</router-link>
					<li v-if="discuz.signInfo.isSigned">已签到</li>
					<li v-else @click="sign">日签到</li>
					<li @click="uploadEveryMonthSignInfo">月签到</li>
					<li @click="logout">退出</li>
				</ul>
				<ul class="area" v-for="(area,i) of areaList" :key="i" :data-title="area.name">
					<router-link v-for="(form,ii) of area.value" :key="ii" :to="{name: 'DiscuzForumView', params: { url: targetHost + form.value }}" tag="li">{{form.name}}</router-link>
				</ul>
			</template>
			<a class="btn switch" @click="switchHost">切换HOST源(当前:{{discuz.HOST.includes('herokuapp')?'herokuapp':'3322'}})</a>
		</div>
	</div>
</template>
<script>
import { mapState, mapGetters, mapActions } from "vuex";
import http from "../../util/http";
import querystring from "querystring";
import { getCookie } from "../../util";
import selectors from "../../util/html2JsonSelector";
import { HOST1 } from "../../config";
export default {
	name: "discuz-page",
	components: {},
	data() {
		return {
			areaList: [],
			userInfo: {
				username: "",
				password: "",
				QA: ""
			}
		};
	},
	computed: {
		...mapState(["isLoading", "discuz"]),
		...mapGetters(["targetHost"]),
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
	activated() {
		this.init();
		// eslint-disable-next-line
		console.log("isLogin:", this.discuz.isLogin, this.discuz.HOST);
		document.querySelector(".overflow-container").scrollTop =
			sessionStorage.getItem("homePage") || 0;
	},
	beforeMount() {},
	destroyed() {},
	methods: {
		...mapActions(["switchHost", "logout"]),
		async init() {
			if (this.discuz.isLogin) {
				if (!this.discuz.signInfo.isSigned) {
					this.checkSigned();
				}
				this.getIndexPageJson();
			} else {
				if (!this.discuz.webSiteList.length) {
					this.updateWebSiteList();
				}
			}
		},
		async login() {
			let {
				targetHost,
				discuz: { HOST },
				userInfo: { username, password, QA }
			} = this;
			if (username && password) {
				let QAarr = QA.split(",");
				let questionid = (QAarr.length > 1 && QAarr[0]) || null;
				let answer = (QAarr.length > 1 && QAarr[1]) || null;
				let formData = {
					formhash: "30b7da0e",
					cookietime: "315360000",
					loginfield: "username",
					questionid,
					answer,
					username,
					password,
					userlogin: "true"
				};
				if (!questionid || !answer) {
					delete formData.questionid;
					delete formData.answer;
				}
				let postData = {
					httpConfig: {
						url: `${targetHost}logging.php?action=login&loginsubmit=true`,
						method: "post",
						responseType: "arraybuffer",
						data: querystring.stringify(formData)
					},
					encoding: "gbk"
				};
				this.$store.commit("SET_LOADING_STATUS", true);
				let { headers } = await http.post(
					`${HOST}/api/advancedProxy`,
					postData
				);
				this.$store.commit("SET_LOADING_STATUS", false);
				if (headers.corscookies) {
					headers.corscookies.split("|$$|").forEach(cookie => {
						document.cookie = cookie;
					});
				}
				this.$store.commit("UPDATE_DISCUZ", {
					isLogin: !!getCookie("cdb3_auth")
				});
				this.checkSigned();
				this.getIndexPageJson();
			}
		},
		async checkSigned() {
			let {
				targetHost,
				discuz: { HOST, signInfo }
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
			signInfo.formhash = data.formhash;
			data.recentTopics &&
				data.recentTopics.forEach(item => {
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
					} else if (
						item &&
						item.title ==
							`${data.username}/${new Date().getMonth() ||
								12}月份/打卡签到帖`
					) {
						signInfo.prevMonthSignThreadLastPostUrl =
							item.lastPostUrl;
					}
				});

			!signInfo.prevMonthSignThreadLastPostUrl &&
				data.recentReply &&
				data.recentReply.forEach(item => {
					if (
						item &&
						item.title ==
							`${data.username}/${new Date().getMonth() ||
								12}月份/打卡签到帖`
					) {
						signInfo.prevMonthSignThreadLastPostUrl = item.href;
					}
				});
		},
		async sign() {
			if (this.isLoading) {
				return;
			}
			this.$store.commit("SET_LOADING_STATUS", true);
			let {
				targetHost,
				discuz: {
					userInfo: { username },
					HOST,
					signInfo
				}
			} = this;
			let postData = {
				httpConfig: {
					method: "post",
					responseType: "arraybuffer"
				},
				encoding: "gbk"
			};
			if (!signInfo.tid) {
				// 主题帖签到
				Object.assign(postData.httpConfig, {
					url: `${targetHost}post.php?action=newthread&fid=420&extra=page%3D1&topicsubmit=yes`,
					data: querystring.stringify({
						formhash: signInfo.formhash,
						frombbs: 1,
						typeid: 797,
						selecttypeid: 797,
						readperm: 101,
						subject: `${username}/${new Date().getMonth() +
							1}月份/打卡签到帖`,
						message: `ID: ${username}\r\n日期: ${new Date().Format(
							"yyyy.M.dd"
						)}\r\n心情: ......`
					})
				});
			} else {
				// 回复帖签到
				Object.assign(postData.httpConfig, {
					url: `${targetHost}post.php?action=reply&fid=420&tid=${
						signInfo.tid
					}&extra=&replysubmit=yes`,
					data: querystring.stringify({
						formhash: signInfo.formhash,
						subject: "",
						message: `ID: ${username}\r\n日期: ${new Date().Format(
							"yyyy.M.dd"
						)}\r\n心情: ......`
					})
				});
			}
			await http.post(`${HOST}/api/advancedProxy`, postData);
			this.$store.commit("SET_LOADING_STATUS", false);
			signInfo.isSigned = true;
		},
		async uploadEveryMonthSignInfo() {
			if (
				confirm("确认上报上月签到数据吗？") &&
				confirm("再次确认") &&
				confirm("三次确认")
			) {
				let {
					targetHost,
					discuz: {
						userInfo: { username },
						HOST,
						signInfo
					}
				} = this;
				// eslint-disable-next-line
				console.log(signInfo);
				if (!signInfo.prevMonthSignThreadLastPostUrl) {
					return;
				}

				let postData1 = {
					httpConfig: {
						url: `${targetHost +
							signInfo.prevMonthSignThreadLastPostUrl}`,
						method: "post",
						responseType: "arraybuffer"
					},
					encoding: "gbk",
					selector: selectors.thread
				};
				let {
					data: { data }
				} = await http.post(`${HOST}/api/html2Json`, postData1);
				let lastPostInfo = data.postList.slice(-1)[0];
				let prevMonthSignInfo = {
					pid: lastPostInfo.pid,
					tid: data.tid,
					count: parseInt(lastPostInfo.postFloor),
					absPostUrl: lastPostInfo.absPostUrl
				};
				// eslint-disable-next-line
				console.log(prevMonthSignInfo);
				//
				let postData = {
					httpConfig: {
						method: "post",
						responseType: "arraybuffer"
					},
					encoding: "gbk"
				};
				Object.assign(postData.httpConfig, {
					url: `${targetHost}post.php?action=reply&fid=420&tid=6953091&extra=page%3D1&replysubmit=yes`,
					data: querystring.stringify({
						formhash: signInfo.formhash,
						subject: "",
						message: `ID: ${username}\r\n签到次数: ${
							prevMonthSignInfo.count
						}\r\n签到链接: [bbs]${encodeURIComponent(
							prevMonthSignInfo.absPostUrl
						)}[/bbs]`,
						fid: 420,
						wysiwyg: 0
					})
				});
				await http.post(`${HOST}/api/advancedProxy`, postData);
				alert("上报成功!");
			}
		},
		async getIndexPageJson() {
			let url = `${this.targetHost}index.php`;
			let pageData = {};
			if (sessionStorage.getItem(url)) {
				pageData = JSON.parse(sessionStorage.getItem(url));
			} else {
				let postData = {
					httpConfig: {
						url,
						method: "get",
						responseType: "arraybuffer"
					},
					encoding: "gbk",
					selector: selectors.index
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

			this.areaList = pageData.areaList;
			let userInfo = Object.assign({}, this.discuz.userInfo);
			userInfo.creditList = pageData.creditList;
			userInfo.username = pageData.username;
			this.$store.commit("UPDATE_DISCUZ", { userInfo });
			if (!pageData.username) {
				this.logout();
			}
		},
		async updateWebSiteList() {
			let url = `http://www.oznewspaper.com/`;
			let postData = {
				httpConfig: {
					url,
					method: "get",
					responseType: "arraybuffer"
				},
				encoding: "gbk",
				selector: selectors.webSiteList
			};
			this.$store.commit("SET_LOADING_STATUS", true);
			let {
				data: { data }
			} = await http.post(`${HOST1}/api/html2Json`, postData);
			this.$store.commit("SET_LOADING_STATUS", false);
			let webSiteList = [];
			data.webSiteList.forEach(webSite => {
				webSiteList.push(webSite.replace("\n", "").replace(/ .*/g, ""));
			});
			localStorage.setItem("webSiteList", JSON.stringify(webSiteList));
			this.$store.commit("UPDATE_DISCUZ", { webSiteList });
		},
		onScroll(e) {
			if (this.timer) {
				clearTimeout(this.timer);
			}
			this.timer = setTimeout(() => {
				sessionStorage.setItem("homePage", e.target.scrollTop);
			}, 100);
		}
	}
};
</script>
<style lang="scss" scoped>
a.btn {
	border-radius: 8px;
	margin-top: 20px;
	height: 100px;
	text-align: center;
	line-height: 100px;
	font-size: 36px;
	display: inline-block;
	color: #fff;
	border: 2px solid #3c76ff;
	background: #3c76ff;
	width: 100%;
	&.switch {
		width: 80%;
		margin: 20px 10%;
	}
}
.login-form {
	padding: 40px;
	.input-warp {
		margin-top: 20px;
		height: 100px;
		display: flex;
		input,
		select {
			border: 1px solid #ddd;
			padding-left: 40px;
			flex: 1;
			font-size: 32px;
			border-radius: 8px;
		}
		::-webkit-input-placeholder {
			color: #ddd;
		}
		a.btn {
			margin-left: 10px;
			margin-top: 0;
			width: 200px;
		}
	}
}
.user-info {
	display: flex;
	padding: 20px;
	background: #fff;
	font-size: 32px;
	li {
		padding-right: 20px;
		margin-right: 20px;
		border-right: 2px solid #ddd;
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
		padding: 10px 20px;
		font-size: 30px;
		line-height: 1.5;
		&:nth-child(even) {
			background: #ddd;
		}
	}
}
</style>
