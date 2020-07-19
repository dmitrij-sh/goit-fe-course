const buttonRef = document.querySelector('#task_04');
const countTotalSalary = function (employees) {
  let total = 0;
  for (let value of Object.values(employees)) {
    total += value;
  }
  return total;
};

buttonRef.addEventListener('click', () => {
  console.log(countTotalSalary({}));

  console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));

  console.log(countTotalSalary({ kiwi: 200, lux: 50, chelsy: 150 }));
});
