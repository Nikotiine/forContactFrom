"use strict";
const express = require("express");
const app = express();
const https = require('https');
const http =require('http');
const routes = require("./api/route/index")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/",routes);


https.createServer(app).listen(() => {
    console.log('Connect on https');
});
http.createServer(app).listen(() => {
    console.log('Connect on http');
});



//const {sendContactForm} = require("./api/controllers/nodemailer");
/*app.post("/app3/contact",(req,res)=>{
    sendContactForm(req.body)
        .then((reponse)=>{
            res.send(reponse)
        }).catch((err)=>{
        console.log(err);
        res.send(err);
    })
});*/