const db = require("../connection/connection");

const selectTemporary = (req, res, next) =>{
    try{

        const sql = `
            SELECT * FROM temporary WHERE Email = ?
        `;

        db.query(sql, req.body.email, (err, result) =>{
            if(err) throw err;
            req.result = result;
            next();
        })

    }catch(err){
        console.log(err);
    }
}

module.exports = { selectTemporary };