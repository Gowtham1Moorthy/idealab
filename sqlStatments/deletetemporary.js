const db = require("../connection/connection");

const deletetemporary = (value) => {
    try {

        const sql = `DELETE FROM temporary WHERE email = ?`;

        db.query(sql, value, (err) => {
            if(err) throw err;
        });
    } catch (err) {
        console.log(err);
    }
}

module.exports = { deletetemporary };