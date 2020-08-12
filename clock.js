// nodes
const hrs = document.getElementById('hrs');
const mins = document.getElementById('mins');
const secs = document.getElementById('secs');
const m = document.getElementById('m');

const clockInstance = setInterval(() => {
  const format = new Date();

  const hours = format.getHours() % 12
  const minutes = format.getMinutes()
  const seconds = format.getSeconds();
  const daytime = hours > 12 ? 'PM' : 'AM'

  hrs.textContent = hours < 10 ? `0${hours}` : hours;
  mins.textContent = minutes < 10 ? `0${minutes}` : minutes;
  secs.textContent = seconds < 10 ? `0${seconds}` : seconds;
  m.textContent = daytime;
}, 1000)
