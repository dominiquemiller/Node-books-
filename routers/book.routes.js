'use strict';

let express = require('express');
let router = express.Router();
let Controller = require('../controllers/books.controller.js');
let BookController = new Controller;

router.get('/', BookController.index);
router.post('/', BookController.create);
router.get('/:id', BookController.show);


module.exports = router;
