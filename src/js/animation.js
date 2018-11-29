

document.body.onkeyup = function(e){
  //spatie
  if(e.keyCode == 32){
    //execAnimation('c1big');
    //execAnimation('c2big');
    execAnimation('mouth-up-closed');
    execAnimation('mouth-un-closed');
    execAnimation('eyes-open');

    execAnimation('cust', 'backCircle01', 'r', 500 );
    execAnimation('cust', 'backCircle02', 'r', 400 );
    execAnimation('cust', 'backCircle03', 'r', 300 );
    execAnimation('cust', 'backCircle04', 'r', 600 );

  }
  // enter
  if(e.keyCode == 13){
    execAnimation('mouth-up-closed');
    execAnimation('mouth-un-closed');

  }
  if(e.keyCode == 48){
    execAnimation('mouth-up-swoosh');
    execAnimation('mouth-un-swoosh');
    execAnimation('eyes-shoosh');
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



var winking, botDynamics;
winking = setInterval(eyesWink, 6400);
botDynamics = setInterval(dynamics, 1000);

function eyesWink() {
  execAnimation('eyes-wink');
  var wink;
  wink = setTimeout(execAnimation, 100, 'eyes-open');
}

function dynamics() {
  var elems=['backCircle01','backCircle02','backCircle03','backCircle04'];
  var randElems = elems[Math.floor(Math.random() * elems.length)];
  execAnimation('cust', randElems, 'r', getRandomNum(200, 700) );
}









// get data
function execAnimation(animationName, id, attr, code) {

  if (animationName == 'cust') {
    document.getElementById(id).setAttribute(attr, code);
  }
  else {
    for (var i = 0; i < animationValues.length; i++){
      if (animationValues[i].name == animationName){
        document.getElementById(animationValues[i].id).setAttribute(animationValues[i].attribute, animationValues[i].code);
      }
    }

  }

}

function getRandomNum(min, max) {
    return Math.random() * (max - min) + min;
}
