const express=require("express");
const {handlerGenrateNewShortURL}=require("../controllers/url");
const router=express.Router();
router.post("/",handlerGenrateNewShortURL);
router.get("/",(req,res)=>{
    console.log("hi");
    res.send("server has been called");
})
module.exports=router;











