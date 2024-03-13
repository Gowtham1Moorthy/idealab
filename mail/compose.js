const nodemailer = require("nodemailer");

const sender = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "notsecuregowtham@gmail.com",
        pass: "dbpr vjgm vdbw zjkw",
    }
});

// const sender = nodemailer.createTransport({
//     service: process.env.SERVICE,
//     auth: {
//         user: process.env.AUTHUSER,
//         pass: process.env.AUTHPASS,
//     }
// });


const compose = (to, subject, text) => {
    composeInformation = {
        from: "notsecuregowtham@gmail.com",
        to,
        subject,
        text,
    };

    sender.sendMail(composeInformation, (err, info) => {
        if (err) {
            console.log(err)
        } else {
            console.log("sended");
        }
    });
};

module.exports = { compose }