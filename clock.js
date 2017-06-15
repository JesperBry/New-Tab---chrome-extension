
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
  var currDay = today.getDate();
  var spaceing = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';

  document.getElementById('date').innerHTML =  currDay.toString().bold() + spaceing + currWeekDay.toString().bold();
  document.getElementById('line').innerHTML = "|";

  var t = setTimeout(function(){ startTime() }, 500);
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
    document.getElementById('dailyText').innerHTML = "Good morning, --Name--.";
  }
  if (j >= 12 && j <= 18) {
    document.getElementById('dailyText').innerHTML = "Good afternoon, --Name--.";
  }
  if (j > 18 && j <= 23) {
    document.getElementById('dailyText').innerHTML = "Good evening, --Name--.";
  }
  if (j >= 0 && j < 6) {
    document.getElementById('dailyText').innerHTML = "Good night, --Name--.";
  }
}
