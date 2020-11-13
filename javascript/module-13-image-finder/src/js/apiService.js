import axios from 'axios';
const API_KEY = '18967692-74a69e3bc83f25b1723de5569';
const BASE_URL = 'https://pixabay.com/api?';

export default class ImgApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.per_page = 12;
  }

  async fetchImages() {
    const searchParams = new URLSearchParams({
      image_type: 'photo',
      orientation: 'horizontal',
      q: this.searchQuery,
      page: this.page,
      per_page: this.per_page,
      key: API_KEY,
    });

    const url = `${BASE_URL}${searchParams}`;

    this.incrementPage();
    try {
      const { data } = await axios.get(`${BASE_URL}${searchParams}`);

      return data.hits;
    } catch (error) {
      console.log('error', { error });

      return [];
    }

    // this.incrementPage();
    // return (await (await fetch(url)).json()).hits;

    // const response = await (await fetch(url)).json();
    // this.incrementPage();
    // return response.hits;

    // const response = await fetch(url);
    // this.incrementPage();
    // const image = await response.json();
    // return image.hits;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
}
