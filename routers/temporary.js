const { selectTemporary } = require("../sqlStatments/selectTemporary");
const { sendOtp } = require("../sendOtp");

const router = require("express").Router();

router.post("/temporary", selectTemporary,  async (req, res, next) => {
    try {
        const generated = false;
        if(req.result.length <= 0){
            next();
            generated = true;
        }else{
            console.log("it is not expty");
            return;
        }

        res.send({generated});

    } catch (error) {
        console.error("Error:", error);
    }
}, sendOtp);


module.exports = router;