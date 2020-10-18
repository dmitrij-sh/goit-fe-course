import menuCardTpl from '../templates/food.hbs';
import menu from '../menu.json';

const refs = {
  menuList: document.querySelector('.js-menu'),
};

const createList = menuCardTpl(menu);

refs.menuList.insertAdjacentHTML('beforeend', createList);
