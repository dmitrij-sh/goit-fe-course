const btnTaskFour = document.querySelector('#task_04');
btnTaskFour.addEventListener('click', () => {
  const credits = 23580;
  const pricePerDroid = 3000;
  let message;

  let input = prompt(`Сколько дроидов Вы желаете приобрести?`);
  if (input === null) {
    message = 'Отменено пользователем!';
  } else {
    input = Math.trunc(+input);
  }
  if (input > 0) {
    const totalPrice = input * pricePerDroid;
    const result = credits - totalPrice;
    message =
      totalPrice <= credits
        ? `Вы купили ${input} дроидов, на счету осталось ${result} кредитов.`
        : `Недостаточно средств на счету!`;
  } else {
    message = `Введите корректные данные`;
  }
  console.log(message);
});
