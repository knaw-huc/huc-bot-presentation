// SET Init vals
// var stepsStart = 7;
// var stepsAdd = 8;
// var rings = 30;
// var spaceBetween = 30;

var itemsPosition= '';
var coors = new Array(1);
var centerX = 0;
var centerY = 0;


function genCircleCoors() {
var counter = 0;
steps = stepsStart;
  //  for every ring
  for (var j = 0; j < rings; j++) {
    ringRadius = (j+1)*spaceBetween;

    coors[counter]=new Array(2);
    coors[counter][0] = 0;
    coors[counter][1] = 0-ringRadius;
    counter++;
    for (var i = 1; i < steps; i++) {

      coors[counter]=new Array(2);
      coors[counter][0] = (centerX + ringRadius * Math.cos(Math.PI * i / steps*2-Math.PI/2));
      coors[counter][1] = (centerY + ringRadius * Math.sin(Math.PI * i / steps*2-Math.PI/2));
      counter++;
    }
    steps = steps+stepsAdd;
    //perRingAmountArray.push(counter);
   }
}

genCircleCoors();
//console.log(coors);
