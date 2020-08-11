import users from './users.js';
// -----ЗАДАНИЕ 1-----//
const buttonRef = document.querySelector('#task_01');
const getUserNames = users => users.map(user => user.name);

buttonRef.addEventListener('click', () => {
  console.log(getUserNames(users));
});

// -----ЗАДАНИЕ 2-----//
const buttonRef1 = document.querySelector('#task_02');
const getUsersWithEyeColor = (users, color) =>
  users.filter(user => user.eyeColor === color);

buttonRef1.addEventListener('click', () => {
  console.log(getUsersWithEyeColor(users, 'blue'));
});

// -----ЗАДАНИЕ 3-----//
const buttonRef2 = document.querySelector('#task_03');
const getUsersWithGender = (users, gender) =>
  users.filter(user => user.gender === gender).map(user => user.name);

buttonRef2.addEventListener('click', () => {
  console.log(getUsersWithGender(users, 'male'));
});

// -----ЗАДАНИЕ 4-----//
const buttonRef3 = document.querySelector('#task_04');
const getInactiveUsers = users => users.filter(user => !user.isActive);

buttonRef3.addEventListener('click', () => {
  console.log(getInactiveUsers(users));
});

// -----ЗАДАНИЕ 5-----//
const buttonRef4 = document.querySelector('#task_05');
const getUserWithEmail = (users, email) =>
  users.find(user => user.email === email);

buttonRef4.addEventListener('click', () => {
  console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));
  console.log(getUserWithEmail(users, 'elmahead@omatom.com'));
});

// -----ЗАДАНИЕ 6-----//
const buttonRef5 = document.querySelector('#task_06');
const getUsersWithAge = (users, min, max) =>
  users.filter(user => user.age >= min && user.age <= max);

buttonRef5.addEventListener('click', () => {
  console.log(getUsersWithAge(users, 20, 30));
  console.log(getUsersWithAge(users, 30, 40));
});

// -----ЗАДАНИЕ 7-----//
const buttonRef6 = document.querySelector('#task_07');
const calculateTotalBalance = users =>
  users.reduce((tatalBalance, user) => tatalBalance + user.balance, 0);

buttonRef6.addEventListener('click', () => {
  console.log(calculateTotalBalance(users));
});

// -----ЗАДАНИЕ 8-----//
const buttonRef7 = document.querySelector('#task_08');
const getUsersWithFriend = (users, friendName) =>
  users
    .filter(user => user.friends.includes(friendName))
    .map(user => user.name);

buttonRef7.addEventListener('click', () => {
  console.log(getUsersWithFriend(users, 'Briana Decker'));
  console.log(getUsersWithFriend(users, 'Goldie Gentry'));
});

// -----ЗАДАНИЕ 9-----//
const buttonRef8 = document.querySelector('#task_09');
const getNamesSortedByFriendsCount = users =>
  [...users]
    .sort((prev, next) => prev.friends.length - next.friends.length)
    .map(users => users.name);

buttonRef8.addEventListener('click', () => {
  console.log(getNamesSortedByFriendsCount(users));
});

// -----ЗАДАНИЕ 10-----//
const buttonRef9 = document.querySelector('#task_10');
// const getSortedUniqueSkills = users =>
//   users.reduce((allSkills, user) => {
//     allSkills.push(...user.skills);
//     return allSkills
//       .filter((skill, i) => allSkills.indexOf(skill) === i)
//       .sort();
//   }, []);

const getSortedUniqueSkills = users =>
users.reduce((allSkills, user) => [...allSkills, ...user.skills], [])
.filter((skill, i, arr) => arr.indexOf(skill) === i)
.sort();

// const getSortedUniqueSkills = function (users) {
//   const dd = users
//     .reduce(function (allSkills, user) {
//       const bb = [...allSkills, ...user.skills];
//       // console.log('acc --', allSkills, 'realArr---', user.skills);
//       return bb
//     }, [])
//     .filter(function (skill, i, arr) {
//       const zz = arr.indexOf(skill) === i;
//       console.log('acc --', skill, 'iteration---', i, 'arr----', arr);
//       return zz;
//     })
//     .sort();
//   return dd;
// };
buttonRef9.addEventListener('click', () => {
  console.log(getSortedUniqueSkills(users));
});
