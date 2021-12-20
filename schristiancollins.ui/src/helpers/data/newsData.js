import axios from 'axios'
const wpUrl = 'http://localhost:8888/wp-json/wp/v2'

const getNews = () =>
  new Promise((resolve, reject) => {
    axios
      .get(`${wpUrl}/pages/22`)
      .then((res) => {
        const pageObj = res.data.acf.news;
        resolve(pageObj)
      })
      .catch((err) => reject(err))
  })

export default getNews;
