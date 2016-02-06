console.log("hieeeeee");

var shaking = $("#shaking");
shaking.innerHTML = "this is not shaking";

var myShakeEvent = new Shake({
    threshold: 15, // optional shake strength threshold
    timeout: 1000 // optional, determines the frequency of event generation
});

myShakeEvent.start();

window.addEventListener('myShakeEvent', function(){

var shaking = $("#shaking");
  shaking.innerHTML = "this is shaking";

var element = document.getElementById("box");
var r = getRandomInt(0, 255);
var g = getRandomInt(0, 255);
var b = getRandomInt(0, 255);
  element.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";

}, false);

//function to call when shake occurs
// function shakeEventDidOccur () {

    //put your own code here etc.
    // alert('shake!');


function stopShake(){
    shakeEvent.stop();
}

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
