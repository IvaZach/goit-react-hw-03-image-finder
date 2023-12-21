import axios from 'axios';

 async function pixabayCard (nextWord ,page) {
  const KEY = '40433547-a16bb9ed48620ac03347923c1';
  const URL = 'https://pixabay.com/api/';
  const word = nextWord
  console.log('nextWord - page',nextWord)
  console.log('page',page)
  console.log('word', word)
  const params = `?q=${word}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;

  const response = await axios.get(`${URL}${params}`);
  console.log('api response.data',response.data);
  return response.data
};

const api = {
    pixabayCard,
}
export default api;