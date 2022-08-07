const SQLite = require('expo-sqlite')

var db = null

export default class Database {
    constructor(database_name = 'database,db', initDB = (_) => { }) {
        db = SQLite.openDatabase(database_name)
        db.exec([{ sql: 'PRAGMA foreign_keys = ON;', args: [] }], false, () => { });
        initDB(this)
    }
    executeQuery(query, success = () => { }, error = (_) => { }) {
        if (db && db != null) {
            db.transaction(tx => { tx.executeSql(query, [], success, error) })
        } else {
            console.log("Sem conexão com o banco")
        }
    }
}