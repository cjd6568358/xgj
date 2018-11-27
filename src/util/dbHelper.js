import Dexie from 'dexie'

class DbHelper {
    dbName = 'xgj'
    version = 1
    db = null
    constructor() {
        this.initDB(this.dbName)
    }
    openDB(dbName) {
        return new Promise((resolve, reject) => {
            let request = window.indexedDB.open(dbName);
            request.onerror = (e) => {
                // eslint-disable-next-line
                console.log("Open IndexedDB Error!" + e.target.errorCode);
                reject('Open IndexedDB Error!' + e);
            };
            request.onsuccess = (e) => {
                resolve(e.target.result)
            };
            request.onupgradeneeded = (e) => {
                // eslint-disable-next-line
                console.log(e);
                this.db = e.target.result
                reject('DB version changed to ' + e);
            };
        })
    }

    createDB(dbName) {
        var openRequest = window.indexedDB.open(dbName);
        openRequest.onerror = function(e) {
            // eslint-disable-next-line
            console.log("Database error: " + e.target.errorCode);
        };
        // eslint-disable-next-line
        openRequest.onsuccess = function(event) {
            // eslint-disable-next-line
            console.log("Database created");
            // eslint-disable-next-line
            localDatabase.db = openRequest.result;
        };
        // eslint-disable-next-line
        openRequest.onupgradeneeded = function(evt) {};
    }

    deleteDB(dbName) {
        return new Promise((resolve, reject) => {
            var deleteDbRequest = window.indexedDB.deleteDatabase(dbName);
            deleteDbRequest.onsuccess = function(event) {
                // eslint-disable-next-line
                console.log("database deleted successfully" + event);
                resolve()
            };
            deleteDbRequest.onerror = function(e) {
                // eslint-disable-next-line
                console.log("Database error: " + e.target.errorCode);
                reject(e)
            };
        })
    }

    initDB(dbName) {
        this.db = new Dexie(dbName);
        this.db.version(this.version).stores({
            signRecords: "id,timestamp,[year+month],day,hour,minute,second",
            website: 'id,title,remark,keys,status'
        });
        this.db.open().catch(function(e) {
            // eslint-disable-next-line
            console.error("Open failed: " + e);
        });
    }
}
let dbHelper = new DbHelper().db;
export default dbHelper