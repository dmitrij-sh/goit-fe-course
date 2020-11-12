import { imgApiService, fetchImages } from './script';

const options = {
  rootMargin: '150px', // При пересечении target на данное растояние будет выполняться код
  // threshold: 0.1, // при пересечении target на 10% будет выполняться код
};

function onEntry(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting && imgApiService.query !== '') {
      fetchImages();
    }
  });
}

const Observer = new IntersectionObserver(onEntry, options);

export { Observer };
