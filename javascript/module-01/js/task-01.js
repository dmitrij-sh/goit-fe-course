const btnTaskOne = document.querySelector('#task_01');
btnTaskOne.addEventListener('click', () => {
  const name = 'Генератор защитного поля';
  let price = 1000;
  console.log(`Выбран "${name}", цена за штуку ${price} кредитов.`);
  price = 2000;
  console.log(`Выбран "${name}", цена за штуку ${price} кредитов.`);
});
