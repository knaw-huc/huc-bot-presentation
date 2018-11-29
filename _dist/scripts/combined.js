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
  {
    "name": "eyes-shoosh",
    "id": "botEyes",
    "attribute": "d",
    "code": "M2,180c-13.9,25.7-52.6,21-52.6,21c7.7-29.1,43.1-12.9,38.7,4.7c0,0,87.1-69,239.8,54.3C371,362.4,438,98.8,446.8,120.8C485.6,116,392,198.6,402,178"
  },
  {
    "name": "c1big",
    "id": "backCircle01",
    "attribute": "r",
    "code": 500
  },
  {
    "name": "c2big",
    "id": "backCircle02",
    "attribute": "r",
    "code": 400
  },
  {
    "name": "mouth-up-swoosh",
    "id": "botUpperLip",
    "attribute": "d",
    "code": 'M-0.3,221.9c-2.6,14.3,26.1,17.6,33.6,17.7c51.4,0.5,89.2,72,145.4,93.3c65.6,24.9,119.6,23.8,166.3-17c31.3-27.3,41.7-47.1,54.5-96'
  },
  {
    "name": "mouth-un-swoosh",
    "id": "botUnderLip",
    "attribute": "d",
    "code": 'M-0.3,221.9c-2.6,14.3,26.1,17.6,33.6,17.7c51.4,0.5,89.2,72,145.4,93.3c65.6,24.9,119.6,23.8,166.3-17c31.3-27.3,41.7-47.1,54.5-96'
  },
  {
    "name": "mouth-up-closed",
    "id": "botUpperLip",
    "attribute": "d",
    "code": 'M0.1,221.5C10.4,266.8,65.6,329.8,164,342.9c12,1.6,24.7,2.5,38,2.5c13.5,0,26.5-1.1,38.9-3.1c86.9-14.1,146.2-73.8,159-122.6'
  },
  {
    "name": "mouth-un-closed",
    "id": "botUnderLip",
    "attribute": "d",
    "code": 'M0.1,221.5C10.4,266.8,65.6,329.8,164,342.9c12,1.6,24.7,2.5,38,2.5c13.5,0,26.5-1.1,38.9-3.1c86.9-14.1,146.2-73.8,159-122.6'
  },
  {
    "name": "mouth-up-talk01",
    "id": "botUpperLip",
    "attribute": "d",
    "code": 'M0.1,221.5C10.4,266.8,65.6,329.8,164,342.9c12,1.6,24.7-7.1,38-7.1c13.5,0,26.5,8.5,38.9,6.5c86.9-14.1,146.2-73.8,159-122.6'
  },
  {
    "name": "mouth-un-talk01",
    "id": "botUnderLip",
    "attribute": "d",
    "code": 'M0.1,221.4C10.4,266.7,65.6,329.6,164,342.8c12,1.6,24.7,9.4,38,9.4c13.5,0,26.5-8,38.9-10c86.9-14.1,146.2-73.8,159-122.6'
  },
  {
    "name": "mouth-up-talk02",
    "id": "botUpperLip",
    "attribute": "d",
    "code": 'M-0.9,221.5c10.3,45.3,51.2,108.2,149.6,121.4c12,1.6,40-14.5,53.3-14.5c13.5,0,38.3,15.9,50.7,13.9c86.9-14.1,133.4-73.8,146.2-122.6'
  },
  {
    "name": "mouth-un-talk02",
    "id": "botUnderLip",
    "attribute": "d",
    "code": 'M-0.9,221.4c10.3,45.3,51.2,108.2,149.6,121.4c12,1.6,23.2,21.8,53.3,21.8c26.5,0,38.3-20.5,50.7-22.5c86.9-14.1,133.4-73.8,146.2-122.6'
  }
];



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
