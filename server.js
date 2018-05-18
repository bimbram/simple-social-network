const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');


const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');


const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys.js').mongoURI;

// Connect to MongoDB
mongoose.connect(db, (err) => {
  if (err) {
    console.log("can't connect to database \n", err);
  }
  console.log("connected to database");
});

// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);


// User Routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);


const PORT = process.env.PORT | 3000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
})
