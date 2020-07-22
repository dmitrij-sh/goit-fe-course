const buttonRef = document.querySelector('#task_05');
const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];
const getAllPropValues = function (arr, prop) {
  const result = [];
  for (const product of arr) {
    if (prop in product) {
      result.push(product[prop]);
    }
  }
  return result;
};

buttonRef.addEventListener('click', () => {
  console.log(getAllPropValues(products, 'name'));

  console.log(getAllPropValues(products, 'quantity'));

  console.log(getAllPropValues(products, 'category'));
});
