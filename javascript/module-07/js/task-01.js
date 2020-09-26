// const buttonRef = document.querySelector('#task_01');

const quantityItems = document.querySelectorAll('.item');

console.log(`В списке ${quantityItems.length} категории.`);

const titleSumOfItems = quantityItems.forEach(element =>
  console.log(
    `Категория: ${element.firstElementChild.textContent}, Количество элементов: ${element.lastElementChild.children.length}`,
  ),
);

// SECOND METHOD
// const titleSumOfItems = quantityItems.forEach(element =>
//   console.log(
//     `Категория: ${element.querySelector('h2').textContent},
//      Количество элементов: ${element.querySelectorAll('li').length}`,
//   ),
// );

// buttonRef.addEventListener('click', () => {});
