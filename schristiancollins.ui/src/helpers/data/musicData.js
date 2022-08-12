import axios from 'axios';

const wpUrl = 'https://schriscollins.website/wp-json/wp/v2';


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
        const pageObj = res.data.acf;

        resolve(pageObj)
        })
        .catch((err) => reject(err))
})

const getGeneralUser = () =>
  new Promise((resolve, reject) => {
    axios
        .get(`${wpUrl}/pages/185`)
        .then((res) => {
        const pageObj = res.data.acf;

        resolve(pageObj)
        })
        .catch((err) => reject(err))
})

const getGuitarBass = () =>
  new Promise((resolve, reject) => {
    axios
        .get(`${wpUrl}/pages/188`)
        .then((res) => {
        const pageObj = res.data.acf;

        resolve(pageObj)
        })
        .catch((err) => reject(err))
})

const getOrchestral = () =>
  new Promise((resolve, reject) => {
    axios
        .get(`${wpUrl}/pages/191`)
        .then((res) => {
        const pageObj = res.data.acf;

        resolve(pageObj)
        })
        .catch((err) => reject(err))
})

const getPercussion = () =>
  new Promise((resolve, reject) => {
    axios
        .get(`${wpUrl}/pages/194`)
        .then((res) => {
        const pageObj = res.data.acf;

        resolve(pageObj)
        })
        .catch((err) => reject(err))
})

const getVirtue = () =>
  new Promise((resolve, reject) => {
    axios
        .get(`${wpUrl}/pages/197`)
        .then((res) => {
        const pageObj = res.data.acf;

        resolve(pageObj)
        })
        .catch((err) => reject(err))
})

const getMisc = () =>
  new Promise((resolve, reject) => {
    axios
        .get(`${wpUrl}/pages/200`)
        .then((res) => {
        const pageObj = res.data.acf;

        resolve(pageObj)
        })
        .catch((err) => reject(err))
})

const getObsolete = () =>
  new Promise((resolve, reject) => {
    axios
        .get(`${wpUrl}/pages/203`)
        .then((res) => {
        const pageObj = res.data.acf;

        resolve(pageObj)
        })
        .catch((err) => reject(err))
})

const getSynfonia = () =>
  new Promise((resolve, reject) => {
    axios
        .get(`${wpUrl}/pages/290`)
        .then((res) => {
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
    getGeneralUser,
    getGuitarBass,
    getOrchestral,
    getPercussion,
    getVirtue,
    getMisc,
    getObsolete,
    getSynfonia,
};
