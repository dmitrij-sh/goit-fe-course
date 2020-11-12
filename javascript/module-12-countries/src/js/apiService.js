import axios from 'axios';
const BASE_URL = 'https://restcountries.eu/rest/v2/name/';

async function fetchCountries(countryName) {
  try {
    const { data } = await axios.get(`${BASE_URL}${countryName}`);

    return data;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
}

export default { fetchCountries };
