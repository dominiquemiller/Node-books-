'use strict';

let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let BookSchema = new Schema({

  title: {type: String, required: true},
  author: {type: String, required: true}

});

module.exports = mongoose.model('Book', BookSchema);
