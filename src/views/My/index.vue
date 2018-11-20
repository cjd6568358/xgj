<template>
    <div class="my-page">
        <div class="overflow-container">
            <ul>
                <li @click="deleteSignRecords">
                    清除考勤记录
                </li>
                <li @click="deleteDB">
                    删除数据库
                </li>
                <li @click="recordsExportClick">
                    备份
                </li>
                <li @click="recordsImportClick">
                    导入
                </li>
                <li @click="clearCacheClick">
                    清除缓存
                </li>
                <li @click="debugClick">
                    {{debug?'关闭':'打开'}}调试
                </li>
            </ul>
        </div>
        <TabBar></TabBar>
    </div>
</template>

<script>
import { mapState } from "vuex";
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
        ...mapState(["debug"])
    },
    mounted() {},
    methods: {
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
