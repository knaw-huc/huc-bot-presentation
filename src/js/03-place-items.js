
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
