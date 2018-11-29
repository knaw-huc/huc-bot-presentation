

document.body.onkeyup = function(e){
  if(e.keyCode == 32){
      anni_eyes_wink();
  }

  if(e.keyCode == 13){

  }

  if(e.keyCode == 191){

  }
}



var winking;
winking = setInterval(eyesWink, 3000, 'eyes-wink');

function eyesWink() {
  execAnimation('eyes-wink');
  var wink;
  wink = setTimeout(execAnimation, 100, 'eyes-open');
}











function execAnimation(animationName) {
  for (var i = 0; i < animationValues.length; i++){
    if (animationValues[i].name == animationName){

      document.getElementById(animationValues[i].id).setAttribute(animationValues[i].attribute, animationValues[i].code);
    }
  }
}

//execAnimation('eyes-wink');
