const buttonRef = document.querySelector('#task_04');

const refs = {
  value: document.querySelector('#value'),
  buttonDec: document.querySelector('button[data-action="decrement"]'),
  buttonInc: document.querySelector('button[data-action="increment"]'),
};

let counterValue = 0;

refs.buttonDec.addEventListener('click', decrement);
refs.buttonInc.addEventListener('click', increment);

function decrement() {
  counterValue -= 1;
  refs.value.textContent = counterValue;
  // --refs.value.textContent;
}

function increment() {
  counterValue += 1;
  refs.value.textContent = counterValue;
  // ++refs.value.textContent;
}

// buttonRef.addEventListener('click', () => {});
