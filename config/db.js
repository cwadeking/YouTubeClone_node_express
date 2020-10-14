const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

//to connect to our db using mongoose
//this will return a promise
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });

    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    //exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
