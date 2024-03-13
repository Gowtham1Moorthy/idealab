const db = require("../connection/connection");

const deleteOtp = (value) => {
    try {

        const sql = `DELETE FROM otp WHERE email = ?`;

        db.query(sql, value, (err) => {
            if(err) throw err;
        });
    } catch (err) {
        console.log(err);
    }
}

module.exports = { deleteOtp };