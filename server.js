// =============
// REQUIREMENTS
// =============
var express = require('express'),
		shake = require('shake.js'),
		midi = require('midi.js'),
		io = require('socket.io')(http);

var port = process.env.PORT || 3000;
var app = express();

// =============
// MIDDLEWARE
// =============

app.use(express.static('public'));

http.listen(port);

