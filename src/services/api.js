import axios from 'axios';
import PropTypes from 'prop-types';

const KEY = '40433547-a16bb9ed48620ac03347923c1';
const URL = 'https://pixabay.com/api/';

export const pixabayCard = async (nextWord, page) => {
  console.log('nextWord - page:', nextWord);
  console.log('page:', page);

  const params = `?q=${nextWord}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;

  const response = await axios.get(`${URL}${params}`);

  console.log('api response.data.hits', response.data.hits);

  return response.data.hits;
};

pixabayCard.propTypes = {
  nextWord: PropTypes.string,
  page: PropTypes.number,
};
