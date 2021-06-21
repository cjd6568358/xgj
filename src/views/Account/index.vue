<template>
  <div class="account-info-page">
    <div class="overflow-container">
      <header>
        <span class="icon-back" @click="$router.go(-1)"></span>
        {{ title }}
      </header>
      <div class="name">
        <div class="title">密码</div>
        <ul>
          <li>
            <input type="text" placeholder="用户名" v-model="info.username" />
            <input type="text" placeholder="密码" v-model="info.password" />
          </li>
        </ul>
      </div>
      <div class="name">
        <div class="title">备注</div>
        <input type="text" v-model="info.remark" />
      </div>
      <footer>
        <ul>
          <li>
            <button @click="cancel">取消</button>
          </li>
          <li>
            <button @click="save">保存</button>
          </li>
        </ul>
      </footer>
    </div>
  </div>
</template>
<script>
import accountModel from "../../util/accountModel";
export default {
  props: ["type", "id"],
  data() {
    return {
      title: this.type == "add" ? "新增" : "编辑",
      info: {
        username: "",
        password: "",
        remark: "",
        type: 0,
      },
    };
  },
  async mounted() {
    if (this.type != "add") {
      this.info = await accountModel.getById(this.id);
    }
  },
  methods: {
    cancel() {
      this.$router.go(-1);
    },
    save() {
      if (this.info.remark) {
        new accountModel(this.info).save();
        this.$router.go(-1);
      } else {
        this.$Toast.info("网站名不能为空!");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.account-info-page {
  header {
    text-align: center;
    height: 80px;
    line-height: 80px;
    font-size: 26px;
    padding: 0 20px;
    background-color: #fff;
    border-bottom: 1px solid #d3d3d3;
    position: relative;
    .icon-back {
      display: inline-block;
      position: absolute;
      width: 48px;
      height: 48px;
      top: 50%;
      left: 20px;
      transform: translateY(-50%);
      background: url(../../assets/arrow-left.svg) 100% / 100% no-repeat;
    }
  }
  input {
    width: 100%;
    height: 80px;
    line-height: 80px;
    padding-left: 20px;
    border-radius: 8px;
    border: 1px solid #d3d3d3;
    // border-bottom: 1px solid #d3d3d3;
  }
  .name {
    text-align: center;
    padding: 0 20px;
    .title {
      text-align: left;
      padding: 0 20px;
      height: 60px;
      line-height: 60px;
    }
    button {
      width: 200px;
      margin: 10px;
    }
    ul {
      // padding: 20px;
      margin-bottom: 20px;
      li {
        border-radius: 8px;
        background-color: #fff;
        padding: 20px;
        box-shadow: 2px 2px 8px 2px #ddd;
        // border-top: 1px solid #d3d3d3;
        // border-bottom: 1px solid #d3d3d3;
        input {
          &:first-child,
          &:last-child {
            // border-top: 0;
            // border-bottom: 0;
          }
          & + input {
            margin-top: 10px;
          }
        }
        & + li {
          margin-top: 30px;
        }
      }
    }
  }
  button {
    width: 100%;
    height: 80px;
    line-height: 80px;
    border-radius: 8px;
    background-color: #fff;
    font-size: 28px;
    border: 1px solid #d3d3d3;
  }
  footer {
    margin: 50px 0;
    ul {
      display: flex;
      padding: 0 20px;
      li {
        flex: 1;
        &:last-child {
          margin-left: 20px;
          button {
            color: #fff;
            background-color: #3389e7;
          }
        }
      }
    }
  }
}
</style>
