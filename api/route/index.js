const express = require("express");
const router = express.Router();
const {sendContactForm}= require("../controllers/nodemailer");
const {request} = require("express");

router.post("app3/contact",(req,res)=>{
    if(!req.body.captchaToken){
        res.status(401).send
    }
    const verifyUrl =  `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.SECRET_KEY}&=response=${req.body.captchaToken}`;
    request(verifyUrl,(err,response,body)=>{
        if(err){
            console.log(err)
        }
        body=JSON.parse(body);
        if(!body.success || body.score<0.4){
            return res.status(401)
        }
        else {
            sendContactForm(req.body)
                .then((mailIsSend)=>{
                    res.send(mailIsSend)
                }).catch((err)=>{
                console.log(err);
                res.send(err);
            })
        }
    })

})
module.exports =router;