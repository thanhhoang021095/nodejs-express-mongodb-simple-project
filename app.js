require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
const mainRoute = require('./routes/index');
const userRoute = require('./routes/user');

// routes
app.use(bodyParser.json());
app.use('/', mainRoute);
app.use('/user', userRoute);

// Connect to DB
mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connect to DB!");
  }
);

app.listen(port);
