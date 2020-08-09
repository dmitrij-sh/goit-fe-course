import users from "./users.js"
const buttonRef = document.querySelector('#task_03');
const getUsersWithGender = (users, gender) =>
users.filter((user) => user.gender === gender)
.map((user) => user.name);

buttonRef.addEventListener('click', () => {
  console.log(getUsersWithGender(users, 'male'));
});
