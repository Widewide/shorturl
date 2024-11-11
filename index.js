const express=require("express");
const urlRoute=require('./routes/url');
const URL=require()
const {connectToMongoose}=require("./connect");
const app=express();
const PORT=8001;
connectToMongoose("mongodb://localhost:27017/short-url")
.then(()=>console.log("mongodb connected"));
app.use(express.json()); // Add parentheses here
app.use("/url",urlRoute);
app.get('/:shortId',async (req,res)=>{
    const shortId=req.params.shortId;
    const entry=await URL.findOneAndUpdate(
        {
            shortId
        },{
            $push:{visitHistory:Date.now()}
        }
    );
    res.redirect(entry.redirectURL);
})
app.listen(PORT,()=>console.log("server has been started"));
