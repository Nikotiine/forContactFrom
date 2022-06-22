/*"use strict";
const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./api/route/index")
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/",routes);

app.listen(3000,() => {
    console.log("serveur ok ");
});*/