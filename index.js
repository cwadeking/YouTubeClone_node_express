var cors = require("cors");
const express = require('express');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(5000, function () {
    console.log("Server started. Listening on port 5000");
});

//create get, post, put, getById, and delete requests to MongoDb