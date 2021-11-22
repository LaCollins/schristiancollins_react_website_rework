import axios from 'axios';
import apiKeys from '../apiKeys.json';

const { baseUrl } = apiKeys.baseUrl;

const getMp3sByGenre = (genre) => new Promise((resolve, reject) => {
    axios.get(`${baseUrl}/api/schristiancollins/music_collection/mp3/genre/${genre}`)
        .then((result) => {
            const mp3s = result.data;

            resolve(mp3s);
        })
        .catch((error) => reject(error));
});

const getSoundCloudByGenre = (genre) => new Promise((resolve, reject) => {
    axios.get(`${baseUrl}/api/schristiancollins/music_collection/soundcloud/genre/${genre}`)
        .then((result) => {
            const soundcloud = result.data;

            resolve(soundcloud);
        })
        .catch((error) => reject(error));
});

const getYouTubeByGenre = (genre) => new Promise((resolve, reject) => {
    axios.get(`${baseUrl}/api/schristiancollins/music_collection/youtube/genre/${genre}`)
        .then((result) => {
            const youtube = result.data;
            resolve(youtube);
        })
        .catch((error) => reject(error));
});

const setCollection = (musicArray) => {
    const collectionArray = [];
    
    for (let i = 0; i < musicArray.length; i++ ) {
        let collectionArrayObj = {
            collectionTitle : musicArray[i].collectionTitle,
            collectionId : musicArray[i].collectionId
        }

        if (!collectionArray.some(el => el.collectionId === collectionArrayObj.collectionId)) {
            collectionArray.push(collectionArrayObj);
        } 
        console.log(collectionArray, 'collection array');
    }
}   

const getMusicByGenre = (genre) => {
    const allMusic = [];
    getMp3sByGenre(genre)
        .then((response) => {
            response.forEach(song => {
                allMusic.push(song);
            });
        })
    getSoundCloudByGenre(genre)
    .then((response) => {
        response.forEach(song => {
            allMusic.push(song);
        });
    })
    getYouTubeByGenre(genre)
    .then((response) => {
        response.forEach(song => {
            allMusic.push(song);
        });
    })

    return allMusic;
}

export {
    getSoundCloudByGenre,
    getMp3sByGenre,
    getYouTubeByGenre,
    getMusicByGenre,
    setCollection
};
