const express = require("express");
const app = express();
const fs = require("fs");
const morgan = require("morgan");
const csv = require("csv-parser");
const sslRedirect = require('heroku-ssl-redirect');
const path = require('path');
const PORT = process.env.PORT || 3000;

//-----------------------------------------------------
app.listen(PORT, () => {
    console.log("Server running. All OK.");
});
app.use(sslRedirect.default());
app.use(morgan("common", { immediate: true }));
app.use(express.urlencoded({ extended: false }));
app.use(express.static("static"));


app.get("/data", (req, res) => {
    const obj = JSON.parse(fs.readFileSync('meineDaten/wc.json', 'utf8'));
    res.send(obj)
});


