console.log("hieeeeee");
window.onload = function() {

var shaking = $("#shaking");
console.log(shaking);

shaking.html("this is not shaking");

var element = $("#box");

var myShakeEvent = new Shake({
    threshold: 15, // optional shake strength threshold
    timeout: 10 // optional, determines the frequency of event generation
});

myShakeEvent.start();


var counter = 0;
window.addEventListener('shake', function(){
  shaking.html("shaking");
  console.log('SHAKE');

  counter +=1;
}, false);

// var intervalCounter = 0;
setInterval(function() {
	if (counter > 1) {
		console.log('we had a shake');
	}
	counter = 0;

}, 500);

shaking.html("not");


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
