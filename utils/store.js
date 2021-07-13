// wx.cloud.init({
//   env: "master-8gnscv0t1d921bec"
// })

const masterDB = wx.cloud.database({
  env: 'master-8gnscv0t1d921bec'
})
const _ = masterDB.command;
const backup = masterDB.collection('backup')