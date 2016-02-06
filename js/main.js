console.log("hieeeeee");


var myShakeEvent = new Shake({
    threshold: 15, // optional shake strength threshold
    timeout: 1000 // optional, determines the frequency of event generation
});

myShakeEvent.start();

window.addEventListener('shake', shakeEventDidOccur, false);

//function to call when shake occurs
function shakeEventDidOccur () {


    //put your own code here etc.
    alert('shake!');
}


// jquery debounce or throttle

var body = $('body');

$(window)
    .resize( $.debounce( 250, true, function(e){
        body.addClass( 'resizing' );
    }))
    .resize( $.debounce( 250, false, function(e){
        body.removeClass( 'resizing' );
    }));

$(document)
    .mousemove( $.debounce( 250, true, function(e){
        body.addClass( 'moving' );
    }))
    .mousemove( $.debounce( 250, false, function(e){
        body.removeClass( 'moving' );
    }));
