import users from "./users.js"
const buttonRef = document.querySelector('#task_06');
const getUsersWithAge = (users, min, max) =>
users.filter((user) => user.age >= min && user.age <= max);

buttonRef.addEventListener('click', () => {
  console.log(getUsersWithAge(users, 20, 30));
  console.log(getUsersWithAge(users, 30, 40));
});
