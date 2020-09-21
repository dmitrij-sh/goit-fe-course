const buttonRef = document.querySelector('#task_05');

const refs = {
  input: document.querySelector('#name-input'),
  spanName: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(evt) {
  const defaultName = 'незнакомец';
  refs.spanName.textContent =
    evt.currentTarget.value === '' ? defaultName : evt.currentTarget.value;
}
// buttonRef.addEventListener('click', () => {});
