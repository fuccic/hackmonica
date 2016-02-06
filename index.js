// =============
// REQUIREMENTS
// =============
var express = require('express'),
	shake = require('shake.js'),
	midi = require('midi'),
	app = express(),
	http = require('http').Server(app),
	io = require('socket.io')(http);

var port = process.env.PORT || 3000;

// =============
// MIDDLEWARE
// =============

app.use(express.static('public'));

http.listen(port);

