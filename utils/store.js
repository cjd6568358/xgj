import { getOpenId, getStorageData } from './util'
import { encryptAES } from './api'
wx.cloud.init({
  env: "master-8gnscv0t1d921bec"
})

const masterDB = wx.cloud.database({
  env: 'master-8gnscv0t1d921bec'
})
const _ = masterDB.command;
const backup = masterDB.collection('backup');

const getCloudOpenId = () => {
  return new Promise((resolve, reject) => {
    wx.cloud.callFunction({ name: "getOpenId" }).then((res) => {
      if (res.errMsg === "cloud.callFunction:ok") {
        resolve(res.result.openid)
      } else {
        reject(es.errMsg)
      }
      console.log(res)
    })
  })
}

const setCloudDataSync = async (key, data) => {
  wx.setStorageSync(key, data)
  let backupConfig = wx.getStorageSync('cloud_backup') || {}
  if (key) {
    let openid = await getOpenId()
    let storageData = getStorageData(backupConfig.checkedValues)
    let encryptText = await encryptAES(storageData, backupConfig.key)
    let cloudData = await getCloudDataSync()
    if (cloudData) {
      backup.where({
        _openid: openid
      }).update({
        data: {
          encryptText
        }
      })
    } else {
      backup.add({
        data: {
          encryptText
        }
      })
    }
  }
}

const getCloudDataSync = async () => {
  return new Promise(async (resolve, reject) => {
    let openid = await getOpenId()
    backup.where({
      _openid: openid
    }).get().then(res => {
      resolve(res.data[0])
    }).catch(reason => reject(reason))
  })
}

export {
  getCloudOpenId,
  getCloudDataSync,
  setCloudDataSync
}