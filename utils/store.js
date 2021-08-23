import { getOpenId, getStorageData } from './index'
import { encryptAES } from './api'
wx.cloud.init({
  env: "master-8gnscv0t1d921bec"
})

const masterDB = wx.cloud.database({
  env: 'master-8gnscv0t1d921bec'
})
const _ = masterDB.command;

const cloudDataCollection = masterDB.collection('backup');
const cloudConfigCollection = masterDB.collection('config');

let _cloudConfig = null;


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

const getCloudConfig = async () => {
  return new Promise(async (resolve, reject) => {
    if (_cloudConfig) {
      resolve(_cloudConfig)
    } else {
      let openid = await getOpenId()
      cloudConfigCollection.where({
        _openid: openid
      }).get().then(res => {
        if (res.data[0]) {
          _cloudConfig = res.data[0]
        } else {
          _cloudConfig = {
            enable: 0,
            checkedValues: ["1", "2", "3"],
            key: ""
          }
          cloudConfigCollection.add({
            data: _cloudConfig
          })
        }
        resolve(_cloudConfig)
      }).catch(reason => reject(reason))
    }
  })
}

const setCloudConfig = async (cloudConfig) => {
  return new Promise(async (resolve, reject) => {
    if (cloudConfig) {
      let openid = await getOpenId()
      delete cloudConfig._openid
      delete cloudConfig._id
      cloudConfigCollection.where({
        _openid: openid
      }).update({
        data: cloudConfig
      })
      _cloudConfig = cloudConfig
      resolve()
    } else {
      reject()
    }
  })
}

const setCloudDataSync = async (key, data) => {
  wx.setStorageSync(key, data)
  let cloudConfig = await getCloudConfig()
  if (cloudConfig.enable) {
    let openid = await getOpenId()
    let storageData = getStorageData(cloudConfig.checkedValues)
    let encryptText = await encryptAES(storageData, cloudConfig.key)
    let cloudData = await getCloudDataSync()
    if (cloudData) {
      cloudDataCollection.where({
        _openid: openid
      }).update({
        data: {
          encryptText
        }
      })
    } else {
      cloudDataCollection.add({
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
    cloudDataCollection.where({
      _openid: openid
    }).get().then(res => {
      resolve(res.data[0])
    }).catch(reason => reject(reason))
  })
}

export {
  getCloudOpenId,
  getCloudDataSync,
  setCloudDataSync,
  getCloudConfig,
  setCloudConfig
}