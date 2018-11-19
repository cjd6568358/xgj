<template>
    <div class="sign-page">
        <div class="overflow-container">
            <Calendar :mapData="mapData" @cellClick="selectDate" @prevClick="changedMonth" @nextClick="changedMonth"></Calendar>
            <a v-if="today.year == selectedDate.year && today.month == selectedDate.month && today.day == selectedDate.day" class="btn-sign" @click="signIn">打卡签到</a>
            <ul class="records" v-show="selectedDateRecords.length">
                <li v-for="(item,index) of selectedDateRecords" :key="index">
                    {{new Date(item.timestamp).Format("yyyy-MM-dd hh:mm:ss")}}
                </li>
            </ul>
        </div>
        <TabBar></TabBar>
    </div>
</template>
<script>
import Calendar from "../../components/Calendar/index.vue";
import TabBar from "../../components/TabBar/index.vue";
import { getYMD } from "../../util";
import signRecordModel from "../../util/signRecordModel";
export default {
    name: "sign-page",
    components: { TabBar, Calendar },
    data() {
        let today = getYMD();
        return {
            today,
            selectedDate: today,
            currMonthRecords: []
        };
    },
    computed: {
        mapData() {
            return this.currMonthRecords.map(item => {
                return {
                    day: item.day,
                    month: item.month,
                    year: item.year,
                    data: item
                };
            });
        },
        selectedDateRecords() {
            return this.currMonthRecords.filter(item => {
                return (
                    item.year == this.selectedDate.year &&
                    item.month == this.selectedDate.month &&
                    item.day == this.selectedDate.day
                );
            });
        }
    },
    mounted() {
        this.changedMonth(this.today);
    },
    beforeMount() {},
    destroyed() {},
    methods: {
        async changedMonth(ym) {
            this.currMonthRecords = await this.getHighlightedDates(ym);
        },
        async getHighlightedDates(YMD) {
            return await signRecordModel.getRecordsByYM(YMD);
        },
        signIn() {
            new signRecordModel({
                timestamp: Date.now()
            }).save();
            this.changedMonth(this.today);
        },
        selectDate(date) {
            this.selectedDate = date;
        }
    }
};
</script>
<style lang="scss" >
.sign-page {
    .btn-sign {
        display: block;
        margin: 30px auto;
        text-align: center;
        width: 180px;
        height: 180px;
        line-height: 180px;
        border-radius: 50%;
        font-size: 36px;
        font-weight: 700;
        color: #fff;
        background: linear-gradient(140deg, #01d6bd, #06d0e2);
        box-shadow: 3px 3px 5px #ddd;
    }

    ul.records {
        margin-top: 30px;
        width: 100%;
        background-color: #fff;
        font-size: 32px;
        li {
            line-height: 2;
            padding: 0 30px;
            border-bottom: 1px solid #ddd;
            &:last-child {
                border-bottom: 0;
            }
        }
    }
}
</style>
