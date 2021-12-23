import React from 'react';
import Divider from '@material-ui/core/Divider';

const MP3 = (song) => {
  
    return (
    <>
        <h4 key={song.song_title}><i>{song.song_title} <span className="date">({song.song_date})</span></i></h4>
          <p><audio controls="controls" preload="none">
          <source src={song.ogg_url} type="audio/ogg" />
          <source src={song.mp3_url} type="audio/mp3" />
          Your browser does not support embedded audio.
          </audio>
          <br />
          <span className="download">
            {song.download_url ? (<a href={song.download_url} target="_blank" rel="noreferrer noopener">download</a>) : ('')}
            {song.sheet_music_url ? (' | ') : ('')}
            {song.sheet_music_url ? (<a href={song.sheet_music_url} target="_blank" rel="noreferrer noopener">sheet music</a>) : ('')} | {song.song_title}
            {song.additional_details ? (' | ') : ('')}
            {song.additional_details ? (<span>{song.additional_details}</span>) : ('')}
          </span></p>
          <p dangerouslySetInnerHTML={{__html: song.song_description}}></p>
        <Divider className="mb-3" />
      </>
      )
  }

  export default MP3;
