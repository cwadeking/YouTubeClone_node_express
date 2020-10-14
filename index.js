const express = require('express');
var cors = require('cors');
const connectDB = require ('./config/db');
const videos = require('./routes/videoCollections');

const app = express();

connectDB();


app.use(express.json());
app.use(cors());
app.use('/api/videoCollections', videos);


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});

//create get, post, put, getById, and delete requests to MongoDb