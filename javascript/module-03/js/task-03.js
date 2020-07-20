const buttonRef = document.querySelector('#task_03');
const findBestEmployee = function (employees) {
  let bestEmployee;
  let bestValue = 0;

  for (let key in employees) {
    if (employees[key] > bestValue) {
      bestEmployee = key;
      bestValue = employees[key];
    }
  }

  // for (const key of Object.entries(employees)) {
  //   if (key[1] > bestValue) {
  //     bestEmployee = key[0];
  //     bestValue = key[1];
  //   }
  // }
  return bestEmployee;
};

buttonRef.addEventListener('click', () => {
  console.log(findBestEmployee({ ann: 29, david: 35, helen: 1, lorence: 99 }));

  console.log(findBestEmployee({ poly: 12, mango: 17, ajax: 4 }));

  console.log(findBestEmployee({ lux: 147, david: 21, kiwi: 19, chelsy: 38 }));
});
