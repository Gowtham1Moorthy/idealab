const db = require("../connection/connection");

const verifyAlradyHaveAccount = (value) =>{
    try{

        const sql = `
            SELECT * FROM hostInstituteFaculty WHERE Email = ?
        `;

        db.query(sql, value, (err, result) =>{
            if(err) throw err;
            console.log(result);
            
            return result;
        })

    }catch(err){
        console.log(err);
    }
}

module.exports = { verifyAlradyHaveAccount };