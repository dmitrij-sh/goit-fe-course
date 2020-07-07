const btnTaskFive = document.querySelector('#task_05');
btnTaskFive.addEventListener('click', () => {
  let price;
  const china = 100;
  const chile = 250;
  const australia = 170;
  const india = 80;
  const jamaica = 120;

  const input = prompt(`Введите страну?`);
  if (input === null) {
    alert(`Отменено пользователем!`);
  }
  switch (input.toLowerCase()) {
    case 'китай':
      price = china;
      console.log(`Доставка в ${input} будет стоить ${price} кредитов`);
      break;

    case 'чили':
      price = chile;
      console.log(`Доставка в ${input} будет стоить ${price} кредитов`);
      break;

    case 'австралия':
      price = australia;
      console.log(`Доставка в ${input} будет стоить ${price} кредитов`);
      break;

    case 'индия':
      price = india;
      console.log(`Доставка в ${input} будет стоить ${price} кредитов`);
      break;

    case 'ямайка':
      price = jamaica;
      console.log(`Доставка в ${input} будет стоить ${price} кредитов`);
      break;

    default:
      alert(`В вашей стране доставка не доступна`);
  }
});
