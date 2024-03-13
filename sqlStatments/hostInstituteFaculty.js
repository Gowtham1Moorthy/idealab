const db = require("../connection/connection");

const user = (value) => {
    try {
        // const sql = `
        // CREATE TABLE IF NOT EXISTS hostInstituteFaculty (
        //     Email varchar(50) primary key,
        //     FacultyName varchar(50),
        //     Designation varchar(50),
        //     Department varchar(50),
        //     FacultyID varchar(15) UNIQUE,
        //     DateofBirth DATE,
        //     MobileNumber varchar(50) UNIQUE,
        //     Token varchar(150),
        //     password varchar(150)
        // )
        // `;

        const sql = `INSERT INTO hostInstituteFaculty (Email, FacultyName, Designation, Department, FacultyID, DateofBirth, MobileNumber, Token, Password) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    // const sql = `ALTER TABLE hostInstituteFaculty MODIFY COLUMN DateofBirth VARCHAR(15)`;


        db.query(sql, value, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log("created");
            }
        });
    }catch(err){
        console.log(err);
    }
}

module.exports = { user };