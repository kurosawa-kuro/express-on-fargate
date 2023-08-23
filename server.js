// server.js

const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Welcome from a Node.js app2");
});

app.listen(8080, () => {
    console.log("Server is up on 8080");
});