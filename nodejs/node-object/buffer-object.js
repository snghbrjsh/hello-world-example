
var str = 'Haider is a masterpiece.';

var buffer = Buffer.from(str, 'binary');
var buffer1 = new Buffer(str, 'binary');


console.log('buffer', buffer.toString('base64'), buffer, buffer.toString());