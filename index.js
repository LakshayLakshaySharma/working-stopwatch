let milli = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

function stopwatch(){
  milli++;
  if(milli / 60 == 1){
    milli = 1;
    seconds++;

    if(seconds / 60 == 1){
      seconds = 1;
      minutes++;

      if(minutes / 60 == 1){
        minutes = 1;
        hours++;
      }
    }
  }
  document.getElementById("display").innerHTML = hours + ":" + minutes + ":" + seconds + ":" + milli;
};

function rset(){
  window.clearInterval(stopwatch);
  milli = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;

  document.getElementById("display").innerHTML =  "00:00:00:00";
}