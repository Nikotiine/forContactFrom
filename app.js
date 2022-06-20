"use strict";

const express = require("express");
const app = express();
const cors = require("cors");
const https = require('https');
const {sendContactForm} = require("./api/controllers/nodemailer");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.post("/app3/contact",(req,res)=>{
    sendContactForm(req.body)
        .then((reponse)=>{
            res.send(reponse)
        }).catch((err)=>{
        console.log(err);
        res.send(err);
    })
});


https.createServer(app).listen(() => {
    console.log('ok');
});