console.log("hieeeeee");
window.onload = function() {

var shaking = $("#shaking");
console.log(shaking);

shaking.html("this is not shaking");

var element = $("#box");

var myShakeEvent = new Shake({
    threshold: 15, // optional shake strength threshold
    timeout: 500 // optional, determines the frequency of event generation
});

myShakeEvent.start();


var counter = 0;
window.addEventListener('shake', function(){
  shaking.html("shaking");
  console.log('SHAKE');

  counter +=1;
}, false);

// var intervalCounter = 0;


shaking.html("not");



// MIDI.loadPlugin({
// 	soundfontUrl: "soundfont/",
// 	instrument: "acoustic_grand_piano",
// 	onprogress: function(state, progress) {
// 		console.log(state, progress);
// 	},
// 	onsuccess: function() {
// 		var delay = 0; // play one note every quarter second
// 		var note = 50; // the MIDI note
// 		var velocity = 127; // how hard the note hits
// 		// play the note
// 		MIDI.setVolume(0, 127);
// 		MIDI.noteOn(0, note, velocity, delay);
// 		MIDI.noteOff(0, note, delay + 0.75);
// 	}
// });






// MIDI.channels = (function () { // 0 - 15 channels
//     var channels = {};
//     for (var n = 0; n < 16; n++) {
//         channels[n] = { 
//             mute: false,
//         };
//     }
//     return channels;
// })();









var startMusicButton = $('#start');
startMusicButton.click(function(){

});
// jquery debounce or throttle

// var body = $('body');
//
// $(window)
//     .resize( $.debounce( 250, true, function(e){
//         body.addClass( 'resizing' );
//     }))
//     .resize( $.debounce( 250, false, function(e){
//         body.removeClass( 'resizing' );
//     }));
//
// $(document)
//     .mousemove( $.debounce( 250, true, function(e){
//         body.addClass( 'moving' );
//     }))
//     .mousemove( $.debounce( 250, false, function(e){
//         body.removeClass( 'moving' );
//     }));

}

var socket = io();
var instrumentArray = ['chorus', 'drums', 'guitar', 'melody', 'tamb'];


var inst;
socket.on('user connection', function(usr_num, userid, idArray) {
	console.log(userid);
	var player = idArray.indexOf(userid);
	console.log(player);

	var randomNum = Math.floor((Math.random() * 5) + 1);

	inst = instrumentArray[usr_num - 1];

	if (usr_num < 6) {
		$('#users-connected').text('There are ' + usr_num + ' band members! ' + instrumentArray[usr_num - 1]);
	}

	else {
		$('#users-connected').text('There are ' + usr_num + ' band members! ' + instrumentArray[randomNum]);
	}
	

	MIDI.loadPlugin({
			soundfontUrl: "soundfonts/",
			instrument: "acoustic_grand_piano",
			onprogress: function(state, progress) {
				console.log(state, progress);
			},
			onsuccess: function() {

				MIDI.setVolume(0, 127);

				var file = 'midi/' + inst + '.mid';
				// var player = MIDI.Player;

				var callback = function() {
					console.log('midi file ready');
					MIDI.Player.start();

				}

				MIDI.Player.loadFile(file, callback);

			}
	});

	setInterval(function() {
		if (counter > 0) {
			console.log('we had a shake');
			for (var n = 0; n < 16; n++) {
			    MIDI.setVolume(n, 127);
			}

			// MIDI.setVolume(0, 127);
			
		} else {
			for (var n = 0; n < 16; n++) {
			    MIDI.setVolume(n, 1);
			}
			// MIDI.setVolume(0, 1);

		}

		counter = 0;

	}, 1000);


	

});