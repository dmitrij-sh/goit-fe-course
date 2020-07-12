const btnTaskSix = document.querySelector('#task_06');

btnTaskSix.addEventListener('click', () => {
  let total = 0;
  let input;

  do {
    input = prompt('Веедите любое число');

    if (input !== null) {
      if (Number.isNaN(+input)) {
        alert('Было введено не число, попробуйте еще раз');
        continue;
      }
      input = Number(input);
      total += input;
    }
  } while (input !== null);

  alert(`Общая сумма чисел равна ${total}`);
});
