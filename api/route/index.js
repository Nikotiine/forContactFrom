const express = require("express");
const router = express.Router();
const {sendContactForm}= require("../controllers/nodemailer");

router.post("/contact",(req,res)=>{
    sendContactForm(req.body)
        .then((reponse)=>{
        res.send(reponse)
    }).catch((err)=>{
        console.log(err);
        res.send(err);
    })
})
module.exports =router;