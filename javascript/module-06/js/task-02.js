import users from "./users.js"
const buttonRef = document.querySelector('#task_02');
const getUsersWithEyeColor = (users, color) => users.filter((user) => user.eyeColor === color);

buttonRef.addEventListener('click', () => {
  console.log(getUsersWithEyeColor(users, 'blue'));
});
