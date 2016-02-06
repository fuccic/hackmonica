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

// ==========
// SOCKET
// ==========

var connected_users = 0;

io.on('connection', function(socket) {

	connected_users += 1;

	io.emit('user connection', connected_users);


	socket.on('disconnect', function() {
		connected_users -= 1;
		io.emit('user connection', connected_users);
	});

});
