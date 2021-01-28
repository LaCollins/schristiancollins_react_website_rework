import axios from 'axios';
import apiKeys from '../apiKeys.json';

const { baseUrl } = apiKeys.baseUrl;

const getNews = () => new Promise((resolve, reject) => {
    axios.get(`${baseUrl}/api/schristiancollins/news`)
        .then((result) => {
            const news = result.data;

            resolve(news);
        })
        .catch((error) => reject(error));
});

export default getNews;
