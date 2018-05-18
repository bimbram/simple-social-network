const express = require('express');
const mongoose = require('mongoose');

const app = express();

// DB Config
const db = require('./config/keys.js').mongoURI;

// Connect to MongoDB
mongoose.connect(db, (err) => {
  if (err) {
    console.log("can't connect to database \n", err);
  }
  console.log("connected to database");
});

app.get('/', (req, res) => {
  res.send('hello');
});

const PORT = process.env.PORT | 3000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
})
