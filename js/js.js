var myVar = setInterval(timeEngine, 1000);
var count = 0;

function timeEngine() {
  count+=1;
  document.getElementById("id2").innerHTML = count;
  var needle = count;

for (var i = 0; i < content.length; i++){
  // look for the entry with a matching `code` value
  if (content[i].timecode == needle){
     // we found it
    // obj[i].name is the matched result
    toDisplay(content[i].textToSpeech)
  }
}

}


function toDisplay(txt) {
  document.getElementById("id1").innerHTML = txt;
}
