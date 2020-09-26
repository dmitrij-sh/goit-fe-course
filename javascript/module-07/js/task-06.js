// const buttonRef = document.querySelector('#task_06');

const refs = {
  input: document.querySelector('#validation-input'),
};

const onInputValidation = evt => {
  if (refs.input.value.length !== +refs.input.dataset.length) {
    refs.input.classList.add('invalid');
    return;
  }
  refs.input.classList.remove('invalid');
  refs.input.classList.add('valid');
};

refs.input.addEventListener('blur', onInputValidation);
// buttonRef.addEventListener('click', () => {});
