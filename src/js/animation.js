

document.body.onkeyup = function(e){
  //spatie
  if(e.keyCode == 32){
    //execAnimation('c1big');
    //execAnimation('c2big');
    execAnimation('mouth-up-closed');
    execAnimation('mouth-un-closed');
    execAnimation('eyes-open');

    // execAnimation('cust', 'backCircle01', 'r', 1500 );
    // execAnimation('cust', 'backCircle02', 'r', 200 );
    // execAnimation('cust', 'backCircle03', 'r', 300 );
    // execAnimation('cust', 'backCircle04', 'r', 600 );

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

  if(e.keyCode == 51){
    execAnimation('mouth-un-smile');
    execAnimation('mouth-up-smile');
    execAnimation('eyes-smile');
  }

  if(e.keyCode == 16){
    execAnimation('cust', 'backCircle01', 'r', 400 );
    execAnimation('cust', 'backCircle02', 'r', 250 );
    execAnimation('cust', 'backCircle03', 'r', 300 );
    execAnimation('cust', 'backCircle04', 'r', 150 );
    execAnimation('cust', 'backCircle05', 'r', 100 );
    execAnimation('cust', 'backCircle06', 'r', 150 );
    execAnimation('cust', 'backCircle07', 'r', 150 );
    clearInterval(botDynamics);
  }
}



var winking, botDynamics;
winking = setInterval(eyesWink, 6400);
botDynamics = setInterval(dynamics, 1500);

function eyesWink() {
  execAnimation('eyes-wink');
  var wink;
  wink = setTimeout(execAnimation, 100, 'eyes-open');
}

function dynamics() {
  var elems=['backCircle03','backCircle04','backCircle05','backCircle06','backCircle07'];
  var randElems = elems[Math.floor(Math.random() * elems.length)];
  execAnimation('cust', randElems, 'r', getRandomNum(200, 500) );
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
