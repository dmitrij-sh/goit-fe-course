import users from "./users.js"
const buttonRef = document.querySelector('#task_01');
const getUserNames = users => users.map((user) => user.name);

buttonRef.addEventListener('click', () => {
  console.log(getUserNames(users));
});
