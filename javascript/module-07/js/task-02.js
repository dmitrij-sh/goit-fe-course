const buttonRef = document.querySelector('#task_02');
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listContainerRef = document.querySelector('#ingredients');

const elements = ingredients.map(ingredient => {
  const createListRef = document.createElement('li');
  createListRef.textContent = ingredient;

  return createListRef;
});

buttonRef.addEventListener('click', () => {
  listContainerRef.append(...elements);
  console.log(listContainerRef);
});
