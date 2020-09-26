// const buttonRef = document.querySelector('#task_07');

const refs = {
  input: document.querySelector('#font-size-control'),
  spanText: document.querySelector('#text'),
};

const onInputScrolText = () => {
  refs.spanText.style.fontSize = `${refs.input.value}px`;
};

refs.input.addEventListener('input', onInputScrolText);

// buttonRef.addEventListener('click', () => {});
