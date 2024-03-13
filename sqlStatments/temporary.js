const db = require("../connection/connection");
const { deleteOtp } = require("./deleteotp");

const temporary = (req, res, next) => {
    try {
        // const sql = `
        // CREATE TABLE IF NOT EXISTS temporary (
        //     Email varchar(50) primary key,
        //     Token varchar(150),
        //     password varchar(150)
        // )
        // `;

        const sql = `INSERT INTO temporary (Email, Password) VALUES (?, ?)`;

    // const sql = `ALTER TABLE temporary MODIFY COLUMN Token VARCHAR(500)`;


        db.query(sql, req.value, (err, result) => {

            if (err) {
                console.log(err);
            } else {
                console.log("created");
                deleteOtp(req.body.email);
            }
        });
    }catch(err){
        console.log(err);
    }
}

module.exports = { temporary };