const btnTaskTwo = document.querySelector('#task_02');
btnTaskTwo.addEventListener('click', () => {
  const total = 100;
  const ordered = 20;
  const result =
    ordered <= total
      ? `Заказ на ${ordered} шт. оформлен, с Вами свяжется менеджер`
      : `На складе недостаточно твоаров!`;
  console.log(result);
});
