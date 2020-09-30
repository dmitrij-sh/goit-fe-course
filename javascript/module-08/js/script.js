import gallerys from './gallery-items.js';

const refs = {
  galleryContainer: document.querySelector('.js-gallery'),
  openModalLightbox: document.querySelector('.js-lightbox'),
  closeModalBtn: document.querySelector('button[data-action="close-lightbox"]'),
  lightboxImg: document.querySelector('.lightbox__image'),
};

function createGalleryMarkup(gallerys) {
  return gallerys
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}"
      data-source="${original}" alt="${description}"/>
      </a></li>`;
    })
    .join('');
}

refs.galleryContainer.insertAdjacentHTML(
  'beforeend',
  createGalleryMarkup(gallerys),
);

function onGalleryContainerClick(evt) {
  evt.preventDefault();

  onOpenModalClick();
  changeAttributeLightboxImage(evt.target.dataset.source);
}

function onOpenModalClick(evt) {
  refs.openModalLightbox.classList.add('is-open');
}

function changeAttributeLightboxImage(src) {
  refs.lightboxImg.src = src;
}

function onCloseModalBtnClick(evt) {
  refs.openModalLightbox.classList.remove('is-open');
  refs.lightboxImg.src = '';
}

refs.galleryContainer.addEventListener('click', onGalleryContainerClick);
refs.closeModalBtn.addEventListener('click', onCloseModalBtnClick);
