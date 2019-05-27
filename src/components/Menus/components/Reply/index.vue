<template>
	<div class="reply-modal">
		<input type="text" v-model="subject" placeholder="选填,请输入标题">
		<textarea name v-model="message" id cols="30" rows="10" placeholder="必填,请输入最少20个字内容"></textarea>
		<ul>
			<li class="btn submit" @click="submit">提交</li>
			<li class="btn cancel" @click="closeModal">取消</li>
		</ul>
	</div>
</template>
<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
	props: ["url", "fid", "tid"],
	data() {
		return {
			subject: "",
			message: ""
		};
	},
	destroyed() {},
	methods: {
		...mapActions(["submitReply"]),
		async submit(e) {
			let { subject, message, fid, tid } = this;
			await this.submitReply({
				subject,
				message,
				fid,
				tid
			});
			this.closeModal(e);
			setTimeout(() => {
				sessionStorage.removeItem(this.url);
				location.reload(true);
			}, 100);
		},
		closeModal(e) {
			this.$emit("closeModal", e);
		}
	}
};
</script>
<style lang="scss" scoped>
.reply-modal {
	padding: 20px;
	input {
		margin-bottom: 10px;
		width: 100%;
		height: 80px;
		line-height: 80px;
		padding-left: 20px;
		border-radius: 8px;
		border: 1px solid #ddd;
	}

	textarea {
		margin-bottom: 10px;
		width: 100%;
		height: 300px;
		padding: 20px;
		border-radius: 8px;
		border: 1px solid #ddd;
	}

	ul {
		display: flex;
		li {
			margin: 0 20px;
			flex: 1;
			height: 80px;
			line-height: 80px;
			border-radius: 8px;
			text-align: center;
			font-size: 28px;
			border: 1px solid #ddd;
			&.submit {
				color: #fff;
				background-color: #2196f3;
				border: 1px solid #2196f3;
			}
		}
	}
}
</style>
