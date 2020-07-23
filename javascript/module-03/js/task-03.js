const buttonRef = document.querySelector('#task_03');
const findBestEmployee = function (employees) {
  let bestEmployee;
  let maxValues;

  for (const key in employees) {
    if (!maxValues || employees[key] >= maxValues) {
      maxValues = employees[key];
      bestEmployee = key;
    }
  }
  return bestEmployee;
};

buttonRef.addEventListener('click', () => {
  console.log(findBestEmployee({ ann: 29, david: 35, helen: 18, lorence: 99 }));

  console.log(findBestEmployee({ poly: 12, mango: 17, ajax: 4 }));

  console.log(findBestEmployee({ lux: 147, david: 21, kiwi: 19, chelsy: 38 }));
});
