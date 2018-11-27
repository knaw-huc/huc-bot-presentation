

document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (event.keyCode === getNumCode(1)) {
      document.getElementById('hc-search').style.display = 'none';
    }
    if (event.keyCode === getNumCode(2)) { 
      document.getElementById('hc-search').style.display = 'flex';
    }



};



function getNumCode(nm) {
  var number = nm+48;
  return number;
}
