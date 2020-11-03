const debounce = require('lodash.debounce');
import error from './pnotify';
import API from './fetchCountries';
import countryCardTpl from '../templates/countryCard.hbs';
import countryListTpl from '../templates/countryList.hbs';

const refs = {
  containerCard: document.querySelector('.country'),
  input: document.querySelector('.form-input'),
};

refs.input.addEventListener('input', debounce(onSearchCountry, 500));

function onSearchCountry({ target: { value } }) {
  if (!value) {
    clearRenderCard();
    return;
  }

  API.fetchCountries(value).then(checkQuantityCountries).catch(fetchError);
}

function checkQuantityCountries(country) {
  if (country.length > 10) {
    error(
      {
        title: 'Too many matches found. Please enter a more specific query!',
        delay: 2000,
      },
      200,
    );
    return;
  }

  if (country.length > 1 && country.length < 10) {
    renderList(country);
  }

  if (country.length === 1) {
    renderCard(country);
  }
}

function renderCard(country) {
  refs.containerCard.innerHTML = countryCardTpl(country);
}

function renderList(country) {
  refs.containerCard.innerHTML = countryListTpl(country);
}

function clearRenderCard() {
  refs.containerCard.innerHTML = '';
}

function fetchError(error) {
  console.log(error);
}
