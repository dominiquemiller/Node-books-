'use strict';

let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

let app = express();
let port = process.env.PORT || 4444;

mongoose.connect('localhost:27017', function(err){
  if(err) {
    console.log(err);
  }else {
    console.log("Connected to MongoDB");
  }
});

app.use(bodyParser.json());

let router = require('./router.js');
router(app);

app.listen(port, err => {
  console.log('Server started on Port: ' + port)
})
