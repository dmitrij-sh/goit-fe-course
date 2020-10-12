import galleryItems from './gallery-items';
import num from './import/export';
import {
  fetchAllUsers,
  fetchUsersById,
  updateUsersById,
  x as value, // переименнование
} from './import/services';
import * as services from './import/services';

// console.log(num);
// console.log(fetchAllUsers);
// console.log(value);
// console.log(services);

const refs = {
  galleryList: document.querySelector('.js-gallery'),
  openModal: document.querySelector('.js-lightbox'),
  closeModalBtn: document.querySelector('button[data-action="close-lightbox"]'),
  currentImg: document.querySelector('.lightbox__image'),
  backdrop: document.querySelector('.lightbox__overlay'),
};

let index = 0;

refs.galleryList.addEventListener('click', onListGalleryClick);

function getGalleryItems(item) {
  const createList = item
    .map(({ preview, original, description }, idx) => {
      return `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
      <img class="gallery__image" loading="lazy" src="${preview}"
      data-source="${original}" alt="${description}" width="340" height="240"/>
      </a></li>`;
    })
    .join('');

  return refs.galleryList.insertAdjacentHTML('beforeend', createList);
}

function onListGalleryClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG') {
    return;
  }

  OpenModal();
  setImgToModal(e.target.dataset.source, e.target.alt);

  // if (!e.target.classList.contains('gallery__image')) {
  //   return;
  // }
}

function OpenModal(e) {
  refs.openModal.classList.add('is-open');

  window.addEventListener('keydown', closeModalForEsc);
  window.addEventListener('keydown', onScrollImgPress);
  refs.backdrop.addEventListener('click', onBackdropClick);
  refs.closeModalBtn.addEventListener('click', onCloseModalBtnClick);
}

function setImgToModal(src, alt) {
  refs.currentImg.src = src;
  refs.currentImg.alt = alt;
}

function onCloseModalBtnClick(e) {
  refs.openModal.classList.remove('is-open');
  refs.currentImg.src = '';
  refs.currentImg.alt = '';

  window.removeEventListener('keydown', closeModalForEsc);
  window.removeEventListener('keydown', onScrollImgPress);
  refs.closeModalBtn.removeEventListener('click', onCloseModalBtnClick);
  refs.backdrop.removeEventListener('click', onBackdropClick);
}

function closeModalForEsc(e) {
  const ESC_KEY_CODE = 'Escape';

  if (e.code === ESC_KEY_CODE) {
    onCloseModalBtnClick();
  }
}

function onBackdropClick(e) {
  if (e.currentTarget === e.target) {
    onCloseModalBtnClick();
  }
}

function onScrollImgPress(e) {
  index = galleryItems.findIndex(img => img.original === refs.currentImg.src);

  if (e.code === 'ArrowLeft') {
    if (index === 0) {
      index += galleryItems.length;
    }
    index -= 1;
  }

  if (e.code === 'ArrowRight') {
    if (index === galleryItems.length - 1) {
      index -= galleryItems.length;
    }
    index += 1;
  }

  refs.currentImg.src = galleryItems[index].original;
  refs.currentImg.alt = galleryItems[index].description;
}

getGalleryItems(galleryItems);
