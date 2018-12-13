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

var genSvgStart = '<svg width="100%" height="90%">';
var genSvgEnd = '</svg>';
var genSvgbody = '';

var useGroups = false;




// build the grid

for (var c = 0; c < coors.length; c++) {

    genSvgbody = genSvgbody+'<circle cx="50%" cy="50%" r="'+radius+'" class="gridDot" id="gridDot'+c+'" />';
}





// injest grid svg in to html
var genSvg =genSvgbody;
var svgContent = document.getElementById('bot').innerHTML;
document.getElementById('bot').innerHTML = genSvg+svgContent;


//function to change item position
function gridItemPos(idName, itemId, x, y, scale) {
console.log(idName);
console.log(itemId);
  document.getElementById(idName+itemId).style.transform = 'translate('+x+'px,'+y+'px) scale('+scale+','+scale+')';
}

function coordinateItems(idName) {


  for(var i = 0; i < coors.length; i++){
    var x= coors[i][0];
    var y= coors[i][1];

    if(itemsPosition == 'absolute') {
      //asuming the image is 100x100

      x = x-(300/2);
      y = y-(300/2);
    }

    gridItemPos(idName, i, x, y, 1);
  }
}

coordinateItems('gridDot');

function shapeTween(number) {
  coors = shuffleArray(coorsArr[number]);
  randomCoors('near', 0);
  coordinateItems('gridDot');
}

var colors=['#ddf279', '#79f2bc', '#58e6c8', '#79e7f2', '#c4f279'];

function manDots() {
  for (i = 0; i < 100000; i++) {
    (function(i) {
      setTimeout(function () {
        var maxVal = coors.length
        var j = randomInt(0,maxVal)
        //document.getElementById('gridDot'+j).style.fill=colors[Math.floor(Math.random() * colors.length)];
        //document.getElementById('gridDot'+j).style.transform = 'scale(1,1)';
      }, 1 * i);
    })(i);
  };
}

setTimeout (manDots, 1000);

// randon number
function randomInt(min,max) {
  min= min*10;
  max=max*10;
  var rand = (Math.floor(Math.random()*(max-min+1)+min)/10);

    return rand;

}
