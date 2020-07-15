const buttonRef = document.querySelector('#task_01');
const logItems = function (array) {
  let numberElement = 1;
  for (let i = 0; i < array.length; i += 1) {
    console.log(`${numberElement} - ${array[i]}`);
    numberElement += 1;
  }
};

buttonRef.addEventListener('click', () => {
  logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
  logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
});
