'use strict';

module.exports = function(app) {
  let bookRouter = require('./routers/book.routes.js');
  app.use('/api/books', bookRouter);
};
