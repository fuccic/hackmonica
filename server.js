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

var idArray = [];

io.on('connection', function(socket) {

	connected_users += 1;

	var userid = socket.id;
	
	idArray.push(userid);
	
	console.log(idArray);

	io.emit('user connection', connected_users);


	socket.on('disconnect', function() {
		console.log('user is logging out' + userid)
		connected_users -= 1;
		console.log(idArray);
		for (var i = 0; i < idArray.length; i++) {
			if (idArray[i] === userid){
				idArray.splice(i, 1);
			}
		};
		console.log(idArray);
		io.emit('user connection', connected_users);
	});

});
