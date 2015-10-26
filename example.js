var net = require('net');
var createError = require('./index.js');

var BaseError = createError('BaseError');
var ConnectionError = createError('ConnectionError', BaseError);
// thrown when connection is refused
var ConnectionRefusedError = createError('ConnectionRefusedError', BaseError);

var socket = net.Socket();
socket.on('error', function(err) {
  if (err) {
    if (err.code === 'ECONNREFUSED')
    throw new ConnectionRefusedError(err);
  }
  throw new ConnectionError(err);
});
socket.connect({port: 8009});
