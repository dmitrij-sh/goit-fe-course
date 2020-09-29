import gallery from './gallery-items.js';

const refs = {
  galleryContainer: document.querySelector('.js-gallery'),
};
// const createListMarkupGallery = galleryItem => {
//   `
//   <li class="gallery__item">
//   <a
//     class="gallery__link"
//     href="${galleryItem.original}"
//   >
//     <img
//       class="gallery__image"
//       src="${galleryItem.preview}"
//       data-source="${galleryItem.original}"
//       alt="${galleryItem.description}"
//     />
//   </a>
// </li>`;

//   const createGallery = galleryItems
//     .map(galleryItem => createListMarkupGallery(galleryItem))
//     .join('');

//   return createGallery;
// };
// refs.galleryContainer.insertAdjacentHTML('beforeend', createGallery);
// console.log();

const createGallery = galleryItems => {
  const createMarkup = galleryItems.map(
    galleryItem =>
      `<li class="gallery__item">
      <a class="gallery__link" href="${galleryItem.original}">
      <img class="gallery__image" src="${galleryItem.preview}"
      data-source="${galleryItem.original}" alt="${galleryItem.description}"/>
      </a></li>`,
  );

  refs.galleryContainer.innerHTML = createMarkup.join('');
};

createGallery(gallery);
