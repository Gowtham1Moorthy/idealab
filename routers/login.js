const { verifyPassword } = require("../sqlStatments/findallforLogin");
const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/login", verifyPassword, async (req, res) => {
    try {
        if (req.password && req.password.length >= 1) {
            const verify = await bcrypt.compare(req.body.password, req.password);

            if (verify) {
                const { email, table } = req.body;

                const payload = {
                    email,
                    table,
                };

                const key = 'idealab';
                const options = {
                    expiresIn: "7d",
                };
                
                const token = jwt.sign(payload, key, options);

                console.log(token);
                console.log(req.password);

                res.send({ token });
            } else {

                res.status(401).json({ message: "Invalid credentials" });
            }
        } else {

            res.status(400).json({ message: "Invalid request. Password missing or empty." });
        }
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = router;
