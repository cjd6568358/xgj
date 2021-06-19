import DbHelper from './dbHelper'
import { calculatGUID, getHash } from './index'

class Account {
    guid
    username
    password
    remark
    type
    constructor(Option) {
        Object.assign(this, Option)
    }

    save() {
        if (!this.guid) {
            this.guid = calculatGUID() + "_" + getHash(Date.now().toString());
            DbHelper.account.add(this)
        } else {
            DbHelper.account.put(this)
        }
    }

    static async getAll() {
        let dataSource = await DbHelper.account.toArray()
        return dataSource
    }

    static async getById(guid) {
        return await DbHelper.account.where({ guid }).first()
    }
}

export default Account