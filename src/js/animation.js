

document.body.onkeyup = function(e){
  //spatie
  if(e.keyCode == 32){
    execAnimation('c1big');
    execAnimation('c2big');
    execAnimation('mouth-up-closed');
    execAnimation('mouth-un-closed');
    execAnimation('eyes-open');

  }
  // enter
  if(e.keyCode == 13){
    execAnimation('mouth-up-closed');
    execAnimation('mouth-un-closed');

  }

  if(e.keyCode == 49){
    execAnimation('mouth-up-talk01');
    execAnimation('mouth-un-talk01');
  }
  if(e.keyCode == 50){
    execAnimation('mouth-up-talk02');
    execAnimation('mouth-un-talk02');
  }

}



var winking;
winking = setInterval(eyesWink, 6400, 'eyes-wink');

function eyesWink() {
  execAnimation('eyes-wink');
  var wink;
  wink = setTimeout(execAnimation, 100, 'eyes-open');
}










// get data
function execAnimation(animationName) {
  for (var i = 0; i < animationValues.length; i++){
    if (animationValues[i].name == animationName){
      document.getElementById(animationValues[i].id).setAttribute(animationValues[i].attribute, animationValues[i].code);
    }
  }
}

//execAnimation('eyes-wink');
