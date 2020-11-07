import { error, success } from './pnotify';
import API from './apiService';
import LoadMoreBtn from './loadMoreBtn';
import onOpenModal from './openModal';
import imageCardTpl from '../templates/imageCard.hbs';

const imgApiService = new API();
const loadMoreBtn = new LoadMoreBtn({
  selector: '[data-action="load-more"]',
  hidden: true,
});

const refs = {
  containerCard: document.querySelector('.gallery'),
  form: document.querySelector('.search-form'),
};

refs.form.addEventListener('submit', onSearchImage);
loadMoreBtn.refs.button.addEventListener('click', fetchImages);
refs.containerCard.addEventListener('click', onOpenModal);

function onSearchImage(e) {
  e.preventDefault();

  imgApiService.query = e.currentTarget.elements.query.value;

  if (imgApiService.query === '') {
    return error({ title: 'Please enter a more specific query!', delay: 2000 });
  }

  loadMoreBtn.show();
  imgApiService.resetPage();
  clearRenderCard();
  fetchImages();
  refs.form.reset();
}

function fetchImages() {
  loadMoreBtn.disable();
  imgApiService.fetchImages().then(response => {
    renderImagesCard(response);
    success({
      text: 'Success',
      delay: 2000,
    });
    loadMoreBtn.enable();
  });
}

function renderImagesCard(img) {
  refs.containerCard.insertAdjacentHTML('beforeend', imageCardTpl(img));
}

function clearRenderCard() {
  refs.containerCard.innerHTML = '';
}

function scrollElement() {
  scrollTo({ top: 1000, behavior: 'smooth' });
}
