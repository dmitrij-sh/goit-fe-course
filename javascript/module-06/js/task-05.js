import users from  "./users.js"
const buttonRef = document.querySelector('#task_05');
const getUserWithEmail = (users, email) =>
users.find((user) => user.email === email);

buttonRef.addEventListener('click', () => {
  console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));
  console.log(getUserWithEmail(users, 'elmahead@omatom.com'));
});
