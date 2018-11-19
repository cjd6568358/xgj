import DbHelper from './dbHelper'
import { calculatGUID, getHash } from './index'

class Website {
    id
    title
    keys
    remark
    status
    constructor(Option) {
        Object.assign(this, Option)
    }

    save() {
        if (!this.id) {
            this.id = calculatGUID() + "_" + getHash(Date.now().toString());
            DbHelper.website.add(this)
        } else {
            DbHelper.website.put(this)
        }
    }

    static async getAll() {
        let dataSource = await DbHelper.website.toArray()
        return dataSource
    }

    static async getById(id) {
        return await DbHelper.website.where({ id }).first()
    }
}

export default Website