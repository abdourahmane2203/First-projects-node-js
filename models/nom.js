let mysql      = require('mysql');
let connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'etudiantsdb'
})
connection.connect()


class Nom {
    static  create(nom, cb){
        connection.query('INSERT INTO etudiants SET nom = ?', [nom], function (err, result) {
            if (err) throw err
            cb(result)
        })
    }
}

module.exports = Nom