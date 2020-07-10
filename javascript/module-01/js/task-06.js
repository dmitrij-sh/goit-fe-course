const btnTaskSix = document.querySelector('#task_06');

btnTaskSix.addEventListener('click', () => {
  let total = 0;
  let input;

  do {
    input = prompt('Веедите любое число');

    if (input !== null) {
      input = Number(input);
    }

    if (Number.isNaN(+input)) {
      alert('Было введено не число, попробуйте еще раз');
      continue;
    }
    total += input;
  } while (input !== null);
  {
    alert(`Общая сумма чисел равна ${total}`);
  }
});
