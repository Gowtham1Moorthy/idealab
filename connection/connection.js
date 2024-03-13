const mysql = require("mysql");

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: "idealab"
});

db.connect((err) =>{
    if(err){
        console.log(err);
    }else{
        console.log("connected");
    }
});

module.exports = db;