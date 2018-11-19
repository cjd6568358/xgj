<template>
    <div class="records-import-modal">
        <header>请选择备份文件</header>
        <div class="import-body">
            <input ref="file" type="file">
        </div>
        <footer>
            <button @click="confirm">确定</button>
        </footer>
    </div>
</template>

<script>
import { getHash } from "../../util/index";
import DbHelper from "../../util/dbHelper";
export default {
    methods: {
        confirm() {
            let file = this.$refs.file.files[0];
            if (!file) {
                this.$Toast.info("请先选择备份文件!");
                return;
            }
            let fileReader = new FileReader();
            fileReader.onloadend = e => {
                let records = null;
                try {
                    records = JSON.parse(e.target.result);
                } catch (error) {
                    this.$Toast.info("文件解析失败!");
                }
                let oldHash = records.hash;
                delete records.hash;
                let newHash = getHash(JSON.stringify(records));
                if (oldHash != newHash) {
                    this.$Toast.info(
                        "备份文件hash校验失败:" + newHash + "-" + oldHash
                    );
                    return;
                }
                Object.keys(records).forEach(item => {
                    if (item == "website") {
                        DbHelper.website.bulkPut(records[item]);
                    } else if (item == "sign") {
                        DbHelper.signRecords.bulkPut(records[item]);
                    }
                });
                this.$Toast.info("数据恢复成功!");
            };
            fileReader.readAsText(file);
            this.$emit('closeModal')
        }
    }
};
</script>

<style lang="scss" scoped>
.records-import-modal {
    padding: 0 20px;
    header {
        height: 80px;
        line-height: 80px;
        border-bottom: 1px solid #d3d3d3;
    }
    .import-body {
        padding: 20px 0;
    }
    footer {
        border-top: 1px solid #d3d3d3;
        height: 120px;
        padding: 20px 80px;
        button {
            display: block;
            width: 100%;
            height: 80px;
            border-radius: 10px;
            line-height: 80px;
            background-color: #3389e7;
            color: #fff;
            font-size: 28px;
        }
    }
}
</style>
