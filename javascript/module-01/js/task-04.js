const btnTaskFour = document.querySelector('#task_04');
btnTaskFour.addEventListener('click', () => {
  const credits = 23580;
  const pricePerDroid = 3000;

  let input = prompt(`Сколько дроидов Вы желаете приобрести?`);

  if (input === null) {
    console.log('Отменено пользователем!');
  } else {
    const totalPrice = input * pricePerDroid;

    if (totalPrice <= credits) {
      console.log(
        `Вы купили ${input} дроидов, на счету осталось ${
          credits - totalPrice
        } кредитов.`,
      );
    } else {
      console.log(`Недостаточно средств на счету!`);
    }
  }
});
