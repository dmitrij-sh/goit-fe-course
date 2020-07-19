const buttonRef = document.querySelector('#task_01');
const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

buttonRef.addEventListener('click', () => {
  for (const key of Object.keys(user)) {
    console.log(`${key}: ${user[key]}`);
  }
});
