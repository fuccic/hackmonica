console.log("hieeeeee");
window.onload = function() {

var shaking = $("#shaking");
console.log(shaking);

shaking.html("this is not shaking");

var element = $("#box");

var myShakeEvent = new Shake({
    threshold: 15, // optional shake strength threshold
    timeout: 1000 // optional, determines the frequency of event generation
});

myShakeEvent.start();

function stopShake(){
    shakeEvent.stop();
    shaking.html("this is not shaking");
}

window.addEventListener('shake', function(){

  shaking.html("this is shaking");

  // var r = getRandomInt(0, 255);
  // var g = getRandomInt(0, 255);
  // var b = getRandomInt(0, 255);
  // element.style.backgroundColor = ("rgb(" + r + "," + g + "," + b + ")");

  stopShake();

}, false);



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
