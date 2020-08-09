import users from "./users.js"
const buttonRef = document.querySelector('#task_07');
const calculateTotalBalance = users => users.reduce((tatalBalance, user) => tatalBalance + user.balance, 0);

buttonRef.addEventListener('click', () => {
  console.log(calculateTotalBalance(users));
});
