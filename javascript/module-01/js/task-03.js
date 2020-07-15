const buttonRef = document.querySelector('#task_03');
buttonRef.addEventListener('click', () => {
  const ADMIN_PASSWORD = '111111';
  let message;
  const input = prompt(`Enter password`);
  if (input === null) {
    message = 'Отменено пользователем!';
  } else if (input === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';
  } else {
    message = 'Доступ запрещен, неверный пароль!';
  }
  alert(message);
});
