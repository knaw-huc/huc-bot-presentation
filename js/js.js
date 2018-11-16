var timer = setInterval(timeEngine, 1000);
var count = 0;

function timeEngine() {
  count+=1;
  var minutes = Math.floor(count / 60);

  var seconds = count - minutes * 60;
  document.getElementById("id2").innerHTML = minutes+'.'+seconds;
  // var needle = count;

  // for (var i = 0; i < content.length; i++){
  //   if (content[i].timecode == needle){
  //     speak(content[i].textToSpeech)
  //   }
  // }
}

var countArr = 0;
var countDots = 0;

function handleSpeech() {
  var text2read = content[countArr].textToSpeech;
  countDots = text2read.split(".").length-1;
  countDots = countDots+text2read.split(",").length-1;
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
  countDots=countDots-1;
  if (countDots==1) {
    countArr++;
    setTimeout(handleSpeech, 1500);
  }
}
