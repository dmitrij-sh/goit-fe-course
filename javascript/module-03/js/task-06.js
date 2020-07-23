const buttonRef = document.querySelector('#task_06');
const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const calculateTotalPrice = function (allProdcuts, productName) {
  for (const product of allProdcuts) {
    if (product.name === productName) {
      return product.price * product.quantity;
    }
  }
};

buttonRef.addEventListener('click', () => {
  console.log(calculateTotalPrice(products, 'Радар'));

  console.log(calculateTotalPrice(products, 'Дроид'));
});
