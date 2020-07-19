const buttonRef = document.querySelector('#task_03');
const findBestEmployee = function (employees) {
  const arrEmployee = Object.entries(employees);
  let bestEmployee;
  let bestValue = 0;
  for (const [key, value] of arrEmployee) {
    if (value > bestValue) {
      bestEmployee = key;
      bestValue = value;
    }
  }
  return `${bestEmployee}: ${bestValue}`;
};

buttonRef.addEventListener('click', () => {
  console.log(findBestEmployee({ ann: 29, david: 35, helen: 1, lorence: 99 }));

  // console.log(findBestEmployee({ poly: 12, mango: 17, ajax: 4 }));

  // console.log(findBestEmployee({ lux: 147, david: 21, kiwi: 19, chelsy: 38 }));
});
