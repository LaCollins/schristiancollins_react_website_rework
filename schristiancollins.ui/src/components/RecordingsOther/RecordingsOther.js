import React, { useEffect, useState } from 'react';
import { getRecordingsOther } from '../../helpers/data/musicData';
import MP3 from '../../helpers/songStyles/MP3';
import SoundCloud from '../../helpers/songStyles/SoundCloud';
import YouTube from '../../helpers/songStyles/YouTube';
import Collection from '../../helpers/songStyles/Collection';

const RecordingsOther = () => {
    const [pageData, setPageData] = useState([]);
    const [musicData, setMusicData] = useState([]);

    const musicSort = musicData.map((music) => {
        if (music.collection_or_single_song === 'collection') {
          return Collection(music.collection.collection);
        } else if (music.collection_or_single_song === 'single_song') {
          if (music.single_song.song.file_type === 'mp3') {
                return MP3(music.single_song.song);
              } else if (music.single_song.song.file_type === 'soundcloud') {
                return SoundCloud(music.single_song.song);
              } else if (music.single_song.song.file_type === 'youtube') {
                return YouTube(music.single_song.song);
              }
          }
        return ('');
      })

    useEffect(() => {
        getRecordingsOther().then((res) => {
            setPageData(res);
            setMusicData(res.music);
        })
    }, []);

    return (
        <>
        {pageData.page_header ? (
        <div className="RecordingsOther fade-in">
          <div className="header-container">
            {pageData.page_header ? (<h1>{pageData.page_header}</h1>) : ('')}
            {pageData.page_content ? (<div className="newText text-left" dangerouslySetInnerHTML={{__html: pageData.page_content}}></div>) : ('')}
            <div className="newText text-left">
                {musicSort}
            </div>
          </div>
        </div>)
        : ('')}
        </>
    )
}

export default RecordingsOther;