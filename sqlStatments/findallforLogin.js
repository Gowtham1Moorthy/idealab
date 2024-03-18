const db = require("../connection/connection");

const verifyPassword = async (req, res, next) => {
    const tables = [
        "hostInstituteFaculty",
        "hostStudent",
        "temporary",
        "industry",
        "otherFaculty",
        "otherStudent",
        "hostAlumni",
        "schoolStudent",
        "schoolTeacher",
        "startup",
    ];

    try {
        for (const tableName of tables) {
            const sql = `SELECT Password FROM ${tableName} WHERE Email = ?`;
            const result = await new Promise((resolve, reject) => {
                db.query(sql, req.body.email, (err, result) => {
                    if (err) reject(err);
                    resolve(result);
                });
            });

            if (result.length > 0) {
                req.table = tableName;
                req.password = result[0].Password;
                console.log(req.password);
                break;
            }
        }

        next();
    } catch (error) {
        console.error("Error while verifying password:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = { verifyPassword };