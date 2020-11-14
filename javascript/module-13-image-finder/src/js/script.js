// import debounce from 'lodash.debounce';
import { error, success } from './pnotify';
import API from './apiService';
import LoadMoreBtn from './loadMoreBtn';
import onOpenModal from './openModal';
import imageCardTpl from '../templates/imageCard.hbs';
import animateScrollTo from 'animated-scroll-to';
import { refs } from './refs';
import { Observer } from './intersectionObserver';
export { fetchImages, imgApiService };

const imgApiService = new API();
const loadMoreBtn = new LoadMoreBtn({
  selector: '[data-action="load-more"]',
  hidden: true,
});

Observer.observe(refs.target);

refs.form.addEventListener('submit', onSearchImage);
loadMoreBtn.refs.button.addEventListener('click', fetchImages);
refs.containerCard.addEventListener('click', onOpenModal);
window.addEventListener('scroll', onScrollToBack);

function onSearchImage(e) {
  e.preventDefault();

  imgApiService.query = e.currentTarget.elements.query.value;

  if (imgApiService.query === '') {
    return error({ title: 'Please enter a more specific query!', delay: 1000 });
  }

  loadMoreBtn.show();
  imgApiService.resetPage();
  clearRenderCard();
  fetchImages();
  refs.form.reset();
}

async function fetchImages() {
  loadMoreBtn.disable();

  const hits = await imgApiService.fetchImages();

  if (hits.length === 0) {
    loadMoreBtn.hide();
    return error({ title: 'Nothing was found', delay: 1000 });
  }

  renderImagesCard(hits);
  loadMoreBtn.enable();
  // scrollToElement();
  success({
    text: 'Success',
    delay: 1000,
  });
  refs.lazyImages.forEach(LazyLoadImages);
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

  // window.scrollTo({
  //   top: getTop,
  //   left: 0,
  //   behavior: 'smooth',
  // });
}

function onScrollToBack() {
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

function LazyLoadImages(target) {
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute('data-lazy');
        img.setAttribute('src', src);
        img.classList.add('is-lazy');
        observer.disconnect;
      }
    });
  });
  io.observe(target);
}
