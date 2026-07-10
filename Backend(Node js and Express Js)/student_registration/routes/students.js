const express=require("express");
const path=require("path");

const router=express.Router();

const studentController=require("../controllers/students");

router.get("/",studentController.getRegister);
router.post("/register",studentController.postRegister);

module.exports=router;