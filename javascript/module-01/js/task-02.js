const buttonRef = document.querySelector('#task_02');
buttonRef.addEventListener('click', () => {
  const total = 100;
  const ordered = 20;

  if (ordered > total) {
    console.log(`На складе недостаточно твоаров!`);
  } else {
    console.log(`Заказ на ${ordered} шт. оформлен, с Вами свяжется менеджер`);
  }
});
