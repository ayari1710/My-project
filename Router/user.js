// require

const express = require("express");
const { signup, signin } = require("../Controllers/user");
const router = express.Router();
const isAuth=require("../middlewar/isAuth");
const { registerValidation, Loginvalidation, validation  } = require("../middlewar/user");
// route user(signin +signup)
// signup
router.post("/signup",registerValidation(),validation, signup);
router.post("/signin",Loginvalidation(),validation,signin);
// current user

router.get("/current",isAuth,(req,res)=>{
    res.send(req.user);
})


// export
module.exports = router;
