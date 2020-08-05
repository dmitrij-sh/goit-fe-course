const buttonRef = document.querySelector('#task_06');
const getUsersWithAge = (users, min, max) => {
  // твой код
};

buttonRef.addEventListener('click', () => {
  console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

  console.log(getUsersWithAge(users, 30, 40));
  // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]
});
