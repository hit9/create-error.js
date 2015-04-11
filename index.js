'use strict';

var util = require('util');

exports = module.exports = function(name) {
  var _ = function(message) {
    Error.call(this);
    Error.captureStackTrace(this, this.constructor)
    this.message = message || '';
  }
  util.inherits(_, Error);
  _.prototype.name = name;
  _.prototype.inspect = function() {
    return util.format('[%s]', this.name);
  };
  return _;
};
