const buttonRef = document.querySelector('#task_07');

const refs = {
  input: document.querySelector('#font-size-control'),
  spanText: document.querySelector('#text'),
};

refs.input.addEventListener('input', onInputScrolText);

function onInputScrolText() {
  refs.spanText.style.fontSize = `${refs.input.value}px`;
}

// buttonRef.addEventListener('click', () => {});
