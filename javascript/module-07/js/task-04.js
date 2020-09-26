// const buttonRef = document.querySelector('#task_04');

const refs = {
  value: document.querySelector('#value'),
  buttonDec: document.querySelector('button[data-action="decrement"]'),
  buttonInc: document.querySelector('button[data-action="increment"]'),
};

let counterValue = 0;

const onDecrementClick = () => {
  counterValue -= 1;
  refs.value.textContent = counterValue;
  // --refs.value.textContent;
};

const onIncrementClick = () => {
  counterValue += 1;
  refs.value.textContent = counterValue;
  // ++refs.value.textContent;
};

refs.buttonDec.addEventListener('click', onDecrementClick);
refs.buttonInc.addEventListener('click', onIncrementClick);

// buttonRef.addEventListener('click', () => {});
