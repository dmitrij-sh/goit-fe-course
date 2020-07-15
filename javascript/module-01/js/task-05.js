const buttonRef = document.querySelector('#task_05');
buttonRef.addEventListener('click', () => {
  const chinaDeliveryCost = 100;
  const chileDeliveryCost = 250;
  const australiaDeliveryCost = 170;
  const indiaDeliveryCost = 80;
  const jamaicaDeliveryCost = 120;

  const input = prompt(`Введите страну?`);
  if (input === null) {
    alert(`Отменено пользователем!`);
  } else {
    switch (input.toLowerCase()) {
      case 'китай':
        console.log(
          `Доставка в ${input} будет стоить ${chinaDeliveryCost} кредитов`,
        );
        break;

      case 'чили':
        console.log(
          `Доставка в ${input} будет стоить ${chileDeliveryCost} кредитов`,
        );
        break;

      case 'австралия':
        console.log(
          `Доставка в ${input} будет стоить ${australiaDeliveryCost} кредитов`,
        );
        break;

      case 'индия':
        console.log(
          `Доставка в ${input} будет стоить ${indiaDeliveryCost} кредитов`,
        );
        break;

      case 'ямайка':
        console.log(
          `Доставка в ${input} будет стоить ${jamaicaDeliveryCost} кредитов`,
        );
        break;

      default:
        alert(`В вашей стране доставка не доступна`);
    }
  }
});
