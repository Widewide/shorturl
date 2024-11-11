const shortid=require("shortid");
const URL=require("../models/url");

async function handlerGenrateNewShortURL(req,res)
{
    console.log("function has been called");
    const shortID=shortid();
    const body=req.body;
    if(!body)
    {
        return res.status(404).json({error:'url is required'});
    }
    await URL.create({
        shortID:shortID,
        redirectURL:body.url,
        visitHistory:[]
    }
    );
    return res.json({id:shortID});
}

module.exports={
    handlerGenrateNewShortURL,
}