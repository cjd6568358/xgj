<template>
    <div class="password-list-page">
        <div class="overflow-container">
            <div class="title">
                <span class="icon-back" @click="$router.go(-1)"></span>
                网站列表
                <router-link class="icon-plus" tag="span" :to="{ name: 'PasswordView', params: { type: 'add' } }">
                </router-link>
            </div>
            <ul>
                <router-link tag="li" :key="i" v-for="(item,i) of webSiteList" :to="{ name: 'PasswordView', params: { type: 'edit', id: item.id } }">
                    {{item.title}}
                </router-link>
            </ul>
        </div>
    </div>
</template>
<script>
import websiteModel from "../../util/websiteModel";
export default {
    data() {
        return {
            webSiteList: []
        };
    },
    async mounted() {
        this.webSiteList = await websiteModel.getAll();
    }
};
</script>
<style lang="scss" scoped>
.password-list-page {
    .title {
        text-align: center;
        height: 80px;
        line-height: 80px;
        font-size: 26px;
        padding: 0 20px;
        border-bottom: 1px solid #d3d3d3;
        position: relative;
        .icon-plus {
            display: inline-block;
            position: absolute;
            width: 48px;
            height: 48px;
            top: 50%;
            right: 20px;
            transform: translateY(-50%);
            background: url(./images/plus-square.svg) 100% / 100% no-repeat;
        }
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
    ul {
        background-color: #fff;
        li {
            padding: 0 20px;
            height: 80px;
            line-height: 80px;
            border-bottom: 1px solid #d3d3d3;
        }
    }
}
</style>
