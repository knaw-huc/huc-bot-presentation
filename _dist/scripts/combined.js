var animationValues = [
  {
    "name": "eyes-wink",
    "id": "botEyes",
    "attribute": "d",
    "code": "M2,179.7c10.6,42.8,130.5,75.7,130.5,75.7c12.4,5.8,22.3,6.4,38.7,4.7c0,0,30.8,8.3,69.8-0.3c14.8,1.4,26.3,1.1,38.6-4.4c38.8-4.8,91.4-28,122.4-77.7"
  },
  {
    "name": "eyes-open",
    "id": "botEyes",
    "attribute": "d",
    "code": "M2,179.7c10.6,42.8,130.5,75.7,130.5,75.7c7.7-29.1,43.1-12.9,38.7,4.7c0,0,30.8,8.3,69.8-0.3c-0.6-22.3,29.8-26.4,38.6-4.4c38.8-4.8,91.4-28,122.4-77.7"
  },
];



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
