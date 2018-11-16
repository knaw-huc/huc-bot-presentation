// var timer = setInterval(timeEngine, 1000);
// var count = 0;
//
// function timeEngine() {
//   count+=1;
//   document.getElementById("id2").innerHTML = count;
//   var needle = count;
//
//   for (var i = 0; i < content.length; i++){
//     if (content[i].timecode == needle){
//       speak(content[i].textToSpeech)
//     }
//   }
// }

var countArr = 0;
var countDots = 0;

function handleSpeech() {
  var text2read = content[countArr].textToSpeech;
  countDots = text2read.split(".").length-1;
  countDots = countDots+text2read.split(",").length-1;
  document.getElementById("id2").innerHTML = 'set dots: '+countDots;
  speak(text2read);
}
handleSpeech();




function toDisplay(txt) {
  document.getElementById("id1").innerHTML = txt;
}

function speak(txt) {
  //responsiveVoice.speak(txt);
  responsiveVoice.speak(txt, "UK English Female", {onstart: StartCallback, onend: EndCallback});
}

function StartCallback() {
  document.getElementById("id3").innerHTML = '<img src="images/talking.gif" alt="">';
}

function EndCallback() {

  document.getElementById("id3").innerHTML = '<img src="images/silent.gif" alt="">';
  document.getElementById("id2").innerHTML = 'dots: '+countDots;
  countDots=countDots-1;
  if (countDots==1) {
    countArr++;
    setTimeout(handleSpeech, 1500);
  }
}
