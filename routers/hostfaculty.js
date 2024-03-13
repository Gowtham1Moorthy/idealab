const router = require("express").Router();
const { deletetemporary } = require("../sqlStatments/deletetemporary");
const { user } = require("../sqlStatments/hostInstituteFaculty");
const { selectTemporary } = require("../sqlStatments/selectTemporary");

router.post("/update", selectTemporary, (req, res) =>{
    try{

        const hostfaculty = () =>{
            if(req.result.length >= 1){
                values = [
                    req.result[0].Email,
                    req.body.name || '',
                    req.body.designation || '',
                    req.body.department || '',
                    req.body.facultyid || '',
                    req.body.dob || '',
                    req.body.mobile || '',
                    'no token',
                    req.result[0].Password
                ];
                user(values);
            }
        }
        var values = [];

        switch(req.body.who){
            case "hostfaculty":
                hostfaculty()
                break;
            case "hoststudent":
                console.log("hoststudent")
                break;
            default:
                console.log("default");
        }
        
        deletetemporary(req.body.email);
        res.send({update:true});

    }catch(err){
        console.log(err);
    }
});

module.exports = router;