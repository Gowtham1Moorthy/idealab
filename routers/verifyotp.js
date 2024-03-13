const { temporary } = require("../sqlStatments/temporary");
const { verifyotp } = require("../sqlStatments/verifyotp");
const router = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


router.post("/verifyOtp", verifyotp, (req, res, next) =>{
    jwt.verify(req.result[0].otp, "idealab", async (err, decoded) =>{
        if(err) throw err;
        if(req.body.otp == decoded.otp){

            const salt = await bcrypt.genSalt(2);
            const password = await bcrypt.hash(req.body.password, salt);
    
            const paylode = {
                email: req.body.email,
                table: "temporary",
            }
            const key = "idealab";
            const options = {
                expiresIn: "7d",
            }
    
            const token = jwt.sign(paylode, key, options);

            req.value = [req.body.email, password]

            res.send({verify: true, token: token});
            console.log("going to next")
            next();
        }else{
            res.send({verify: false});
            console.log("its in else part");
            return;
        }
    });
}, temporary);

module.exports = router;