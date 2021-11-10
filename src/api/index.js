import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.spoonacular.com/',
  params: {
    //apiKey: '9b8b9ae989e64541b54d358ee923df9b',
  },
});
