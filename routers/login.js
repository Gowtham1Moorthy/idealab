const { verifyAlradyHaveAccount } = require("../sqlStatments/selecthostfaculty")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

const login = (email, password) =>{
    const result = verifyAlradyHaveAccount(email);
    if(result.length() > 0){
        const verify = bcrypt.compare(password, result.password);

        if(verify){

            const paylode = {
                email
            }

            const key = 'idealab'

            const options = {
                expiresIn: "7d",
            }

            const token = jwt.sign(paylode, key, options);

            
        }
    }
}