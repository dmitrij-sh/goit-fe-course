import { error, success } from './pnotify';
import API from './apiService';
import LoadMoreBtn from './loadMoreBtn';
import onOpenModal from './openModal';
import imageCardTpl from '../templates/imageCard.hbs';
import animateScrollTo from 'animated-scroll-to';

const imgApiService = new API();
const loadMoreBtn = new LoadMoreBtn({
  selector: '[data-action="load-more"]',
  hidden: true,
});

const refs = {
  containerCard: document.querySelector('.gallery'),
  form: document.querySelector('.search-form'),
  all: document.querySelectorAll('li'),
  scrollBackBtn: document.querySelector('.scroll-up'),
};

refs.form.addEventListener('submit', onSearchImage);
loadMoreBtn.refs.button.addEventListener('click', fetchImages);
refs.containerCard.addEventListener('click', onOpenModal);
window.addEventListener('scroll', scrollToBack);

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
    scrollToElement();
    success({
      text: 'Success',
      delay: 2000,
    });

    loadMoreBtn.enable();
  });
}

function renderImagesCard(elements) {
  refs.containerCard.insertAdjacentHTML('beforeend', imageCardTpl(elements));
}

function clearRenderCard() {
  refs.containerCard.innerHTML = '';
}

function scrollToElement() {
  const valueLength = refs.containerCard.children.length - 12;

  animateScrollTo(refs.containerCard.children[`${valueLength}`], {
    speed: 500,
    maxDuration: 3000,
    verticalOffset: -20,
  });
}

function scrollToBack() {
  const getTop = document.documentElement.scrollTop;
  if (getTop > 180) {
    refs.scrollBackBtn.classList.add('is-active');
  } else {
    refs.scrollBackBtn.classList.remove('is-active');
  }
  refs.scrollBackBtn.addEventListener('click', () => {
    animateScrollTo(refs.form, {
      speed: 500,
      maxDuration: 3000,
    });
  });
}
