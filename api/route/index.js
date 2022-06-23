const express = require("express");
const router = express.Router();
const {sendContactForm}= require("../controllers/nodemailer");
//const {request} = require("express");
const {verifyCaptcha}=require("../controllers/captchaController")

router.post("/app3/contact",verifyCaptcha,(req,res)=>{


            sendContactForm(req.body)
                .then((mailIsSend)=>{
                    res.send(mailIsSend)
                }).catch((err)=>{
                console.log(err);
                res.send(err);
            })

    })


module.exports =router;