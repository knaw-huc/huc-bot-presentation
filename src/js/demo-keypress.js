function anni() {//smile
  document.getElementById('mth1').setAttribute("d", "M-19.1,74.6c5.69-.49,24.32-24.94,68.87-17.33,29.63,5.06,49,12.32,49,12.32");

  document.getElementById('mth2').setAttribute("d", "M-9.39,90c34.22,1.15,42.44-5.43,69.92-3,31.73,2.8,48.07,1,48.07,1");

  document.getElementById('eye2').setAttribute("d", "M.72,69.59c27.2,12.32,48.07-13.49,61.58-22,19-11.91,46.3-2.68,46.3-2.68");

  document.getElementById('eye1').setAttribute("d", "M-8.7,28.2c14,8,25.84,11.92,48.38,7.52,57.55-11.26,75.6,31.34,75.6,31.34");

  document.getElementById('lne2').setAttribute("d", "M-5.83,23.93C16.61,12.65,46.64,4.85,67.94,17c22.06,12.53,47.64,0,47.64,0");

  document.getElementById('lne1').setAttribute("d", "M-8.7,28.2C22.78,57.27,59.22,4.32,90,29.49c23.84,19.49,19.28-3.32,19.28-3.32");

}

function anni2() { //other
  document.getElementById('mth1').setAttribute("d", "M-19.1,74c5.68-.49,31.06-.32,63.47,11.89s54.42-16.9,54.42-16.9");

  document.getElementById('mth2').setAttribute("d", "M-9.22,90C30.26,87,28,75.14,62,80.54,91,85.14,108.76,88,108.76,88");

  document.getElementById('eye2').setAttribute("d", "M.89,69.59c23.46-14.92,48.91-25,64.72-11.72C88.55,77.08,108.76,45,108.76,45");

  document.getElementById('eye1').setAttribute("d", "M-8.54,28.2c4.36.85,29,51,74.7,29.67,31.47-14.67,49.28,9.19,49.28,9.19");

  document.getElementById('lne2').setAttribute("d", "M-5.66,23.93c26.82-22,55.12-7.48,74.94,6.93C97.36,51.28,115.75,17,115.75,17");

  document.getElementById('lne1').setAttribute("d", "M-8.54,28.2C24.67,19,25,41.29,63,40.08c34.7-1.11,46.47-13.91,46.47-13.91");

}

function anni3() {//mouth
  document.getElementById('mth1').setAttribute("d", "M-19.1,74c5.68-.49,39.56,8.86,74.14,10.66C88.58,87,98.79,69.59,98.79,69.59");

  document.getElementById('mth2').setAttribute("d", "M-9.22,90c39.48-3,35.87-9.48,70.48-7.51,29.29,1.67,47.5,5.48,47.5,5.48");


}

document.body.onkeyup = function(e){
  if(e.keyCode == 32){
      anni();
  }

  if(e.keyCode == 13){
      anni2();
  }

  if(e.keyCode == 191){
      anni3();
  }
}
