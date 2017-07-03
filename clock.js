
function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  m = checkTime(m);
  h = checkHours(h);
  document.getElementById('time').innerHTML = h.toString().bold() + " " + m;
  text = getText(h);

  var days = ['SUN', 'MON', 'TUE', 'WED', 'THE', 'FRI', 'SAT'];
  var currWeekDay = days[today.getDay()];
  var d = today.getDate();
  d = currDay(d);
  var spaceing = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';

  document.getElementById('date').innerHTML =  d.toString().bold() + spaceing + currWeekDay.toString().bold();
  document.getElementById('line').innerHTML = "|";

  var t = setTimeout(function(){ startTime() }, 500);
}

function currDay(y) {
  if (y < 10) {
    y = "0" + y;
  }
  return y;
}

function checkHours(j) {
  if (j < 10) {
    j = "0" + j;
  }
  return j;
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function getText(j) {
  if (j >= 6 && j < 12) {
    document.getElementById('dailyText').innerHTML = "Good morning, Jesper.";
  }
  if (j >= 12 && j <= 18) {
    document.getElementById('dailyText').innerHTML = "Good afternoon, Jesper.";
  }
  if (j > 18 && j <= 23) {
    document.getElementById('dailyText').innerHTML = "Good evening, Jesper.";
  }
  if (j >= 0 && j < 6) {
    document.getElementById('dailyText').innerHTML = "Good night, Jesper.";
  }
}
