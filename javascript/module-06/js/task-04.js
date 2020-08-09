import users from "./users.js"
const buttonRef = document.querySelector('#task_04');
const getInactiveUsers = users =>
users.filter((user) => !user.isActive);

buttonRef.addEventListener('click', () => {
  console.log(getInactiveUsers(users));
});
