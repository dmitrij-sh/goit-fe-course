import gallerys from './gallery-items.js';

const refs = {
  galleryContainer: document.querySelector('.js-gallery'),
  openModalLightbox: document.querySelector('.js-lightbox'),
  closeModalBtn: document.querySelector('button[data-action="close-lightbox"]'),
  lightboxImg: document.querySelector('.lightbox__image'),
  backdrop: document.querySelector('.lightbox__overlay'),
};

function createGalleryMarkup(gallerys) {
  return gallerys
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
      <img class="gallery__image" loading="lazy" src="${preview}"
      data-source="${original}" alt="${description}" width="340" height="240"/>
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

  if (evt.target.nodeName !== 'IMG') {
    return;
  }

  // if (!evt.target.classList.contains('gallery__image')) {
  //   return;
  // }

  onOpenModalClick();
  changeAttributeLightboxImage(evt.target.dataset.source);
}

function onOpenModalClick(evt) {
  window.addEventListener('keydown', onCloseModalEscPress);
  refs.openModalLightbox.classList.add('is-open');
}

function changeAttributeLightboxImage(src) {
  refs.lightboxImg.src = src;
}

function onCloseModalBtnClick(evt) {
  window.removeEventListener('keydown', onCloseModalEscPress);
  refs.openModalLightbox.classList.remove('is-open');
  refs.lightboxImg.src = '';
}

function onCloseModalEscPress(evt) {
  const ESC_KEY_CODE = 'Escape';

  if (evt.code === ESC_KEY_CODE) {
    onCloseModalBtnClick();
  }
}

function onBackdropClick(evt) {
  if (evt.currentTarget === evt.target) {
    onCloseModalBtnClick();
  }
}

refs.galleryContainer.addEventListener('click', onGalleryContainerClick);
refs.closeModalBtn.addEventListener('click', onCloseModalBtnClick);
refs.backdrop.addEventListener('click', onBackdropClick);
