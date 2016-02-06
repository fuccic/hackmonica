console.log("YO MAMA");

var socket = io();

socket.on('user connection', function(usr_num, userid) {
	$('#users-connected').text('There are ' + usr_num + userid + ' band members!');
});