console.log("YO MAMA");

var socket = io();

socket.on('user connection', function(usr_num) {

	$('#users-connected').text('There are ' + usr_num + ' band members!');

});