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
          <span className="download"><a href={song.download_url} download={"S. Christian Collins - " + song.song_title + ".mp3"}>download</a> | {song.song_title}</span></p>
          <p dangerouslySetInnerHTML={{__html: song.song_description}}></p>
        <Divider className="mb-3" />
      </>
      )
  }

  export default MP3;
