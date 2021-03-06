// const buttonRef = document.querySelector('#task_03');

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const listContainerRef = document.querySelector('#gallery');

const createListMarkup = image => {
  return `
  <li class="task-section__item">
    <img src="${image.url}", alt="${image.alt}">
  </li>`;
};

const createGallery = images.map(image => createListMarkup(image)).join('');

listContainerRef.insertAdjacentHTML('beforeend', createGallery);
console.log(listContainerRef);

// buttonRef.addEventListener('click', () => {});
