import axios from 'axios'
const wpUrl = 'https://schriscollins.website/wp-json/wp/v2'

const getTalents = () =>
  new Promise((resolve, reject) => {
    axios
      .get(`${wpUrl}/pages/39`)
      .then((res) => {
        const pageObj = res.data.acf;
        resolve(pageObj);
      })
      .catch((err) => reject(err))
  })

export default getTalents;
