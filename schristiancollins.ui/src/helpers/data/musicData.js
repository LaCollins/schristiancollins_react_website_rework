import axios from 'axios';

const wpUrl = 'http://localhost:8888/wp-json/wp/v2';


const getRecordingsOriginal = () =>
  new Promise((resolve, reject) => {
    axios
      .get(`${wpUrl}/pages/45`)
      .then((res) => {
        const pageObj = res.data.acf;

        resolve(pageObj)
      })
      .catch((err) => reject(err))
})
  
const getRecordingsOther = () =>
new Promise((resolve, reject) => {
axios
    .get(`${wpUrl}/pages/153`)
    .then((res) => {
    const pageObj = res.data.acf;

    resolve(pageObj)
    })
    .catch((err) => reject(err))
})

const getSheetMusicOther = () =>
new Promise((resolve, reject) => {
axios
    .get(`${wpUrl}/pages/177`)
    .then((res) => {
    const pageObj = res.data.acf;

    resolve(pageObj)
    })
    .catch((err) => reject(err))
})

const getAboutVirtualInstruments = () =>
new Promise((resolve, reject) => {
axios
    .get(`${wpUrl}/pages/181`)
    .then((res) => {
    console.log(res);
    const pageObj = res.data.acf;

    resolve(pageObj)
    })
    .catch((err) => reject(err))
})


export {
    getRecordingsOriginal,
    getRecordingsOther,
    getSheetMusicOther,
    getAboutVirtualInstruments,
};
