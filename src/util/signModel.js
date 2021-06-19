import DbHelper from './dbHelper'
import { calculatGUID, getHash } from './index'

class Sign {
    id
    timestamp
    year
    month
    day
    hour
    minute
    second
    constructor(Option) {
        this.timestamp = Option.timestamp
        let date = new Date(this.timestamp)
        this.year = date.getFullYear()
        this.month = date.getMonth() + 1
        this.day = date.getDate()
        this.hour = date.getHours()
        this.minute = date.getMinutes()
        this.second = date.getSeconds()
    }

    save() {
        this.id = calculatGUID() + "_" + getHash(Date.now().toString());
        DbHelper.sign.add(this)
    }

    static async getRecordsByTimestamp(timestamp = 0) {
        return await DbHelper.sign.where('timestamp').above(timestamp).sortBy('timestamp');
    }
    static async getRecordsByYMD(YMD) {
        return await DbHelper.sign.where({ year: YMD.year, month: YMD.month,day:YMD.day }).sortBy('timestamp');
    }
    static async getRecordsByYM(YMD) {
        return await DbHelper.sign.where({ year: YMD.year, month: YMD.month }).sortBy('timestamp');
    }
}

export default Sign