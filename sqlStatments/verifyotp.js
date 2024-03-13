const db = require("../connection/connection");

const verifyotp = (req, res, next) => {
    try {

        const sql = `SELECT * FROM otp WHERE Email = ?`;

        // const sql = `ALTER TABLE hostInstituteFaculty MODIFY COLUMN DateofBirth VARCHAR(15)`;


        db.query(sql, req.body.email, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                req.result = result;
                next();
            }
        });
    } catch (err) {
        console.log(err);
    }
}

module.exports = { verifyotp };