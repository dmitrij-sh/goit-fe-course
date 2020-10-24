import colors from './colors';

let intervalId;

const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
};

refs.startBtn.addEventListener('click', onStartClick);
refs.stopBtn.addEventListener('click', onStopClick);

function onStartClick(e) {
  refs.startBtn.disabled = true;
  intervalId = setInterval(randomColorSwitcher, 1000);
}

function onStopClick(e) {
  refs.startBtn.disabled = false;
  clearInterval(intervalId);
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function randomColorSwitcher() {
  refs.body.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length - 1)];
}
