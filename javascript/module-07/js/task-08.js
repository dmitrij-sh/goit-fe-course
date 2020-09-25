const buttonRef = document.querySelector('#task_08');

const refs = {
  inputNumber: document.querySelector('input[type="number"]'),
  btnRendor: document.querySelector('button[data-action="render"]'),
  btnDestroy: document.querySelector('button[data-action="destroy"]'),
  divContainer: document.querySelector('#boxes'),
};

refs.btnRendor.addEventListener('click', onCreateRendorClick);
refs.btnDestroy.addEventListener('click', onDestroyBoxesClick);

function createBoxes(amount) {
  const newBox = [];
  for (let i = 0; i < amount; i += 1) {
    const boxSize = `${30 + i * 10}`;
    newBox[i] = document.createElement('div');
    newBox[i].style.backgroundColor = getRandomColor();
    newBox[i].style.width = `${boxSize}px`;
    newBox[i].style.height = `${boxSize}px`;
  }
  refs.inputNumber.value = '';
  return newBox;
}

function getRandomColor(min = 0, max = 256) {
  const r = Math.floor(Math.random() * (max - min + 1)) + min;
  const g = Math.floor(Math.random() * (max - min + 1)) + min;
  const b = Math.floor(Math.random() * (max - min + 1)) + min;
  const rgb = `rgb(${r}, ${g}, ${b})`;
  return rgb;
}

function onCreateRendorClick() {
  refs.divContainer.append(...createBoxes(refs.inputNumber.value));
}

function onDestroyBoxesClick() {
  refs.divContainer.innerHTML = '';
}

// buttonRef.addEventListener('click', () => {});
