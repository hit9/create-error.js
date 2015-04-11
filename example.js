var createError = require('./index.js'),
  MyError = createError('MyError');

throw new MyError('this is an error');
