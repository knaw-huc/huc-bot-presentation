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
