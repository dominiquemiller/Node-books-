'use strict';

let Book = require('../models/Book.js')

let BookController = function() {};

BookController.prototype.index = function(req, res){
  Book.find(req.query, function(err, books){
    if(err) {
      res.status(500).json({error: "Something went wrong"});
    } else {
      res.json(books);
    }
  });
};

BookController.prototype.create = function(req, res){
  let book = new Book(req.body);
  book.save(function(err, book){
    if(err){
      res.status(500).json(err);
    }
    res.status(201).json(book);
  });
};

BookController.prototype.show = function(req, res){
  Book.findById(req.params.id, function(err, book){
    if(err){
      res.status(500).json(err);
    }
    else if(!book){
      res.status(404).json({error:"Book not found"});
    }
    else {
      res.json(book);
    }
  });
};

module.exports = BookController;
