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
