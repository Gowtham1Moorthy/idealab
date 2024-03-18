const express = require("express");
// const env = require("dotenv");
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// env.config()


app.use(require("./routers/temporary"));
app.use(require("./routers/verifyotp"));

app.use(require("./routers/hostfaculty"));

//login
app.use(require("./routers/login"));


const port = 5000;
app.listen(port, ()=>{
    console.log("running in port ", port);
});