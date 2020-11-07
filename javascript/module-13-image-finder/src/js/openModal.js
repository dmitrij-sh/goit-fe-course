import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/src/styles/main.scss';

export default function onOpenModal(e) {
  const src = e.target.dataset.source;

  if (e.target.nodeName !== 'IMG') {
    return;
  }

  basicLightbox.create(`<img width="1400" height="900" src="${src}">`).show();
}
