const buttonRef = document.querySelector('#task_05');
const getUserWithEmail = (users, email) => {
  // твой код
};

buttonRef.addEventListener('click', () => {
  console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
  console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}
});
