import React from 'react';
import Divider from '@material-ui/core/Divider';

const MP3 = (song) => {
    return (
    <>
        <h4 key={song.songId}><i>{song.songTitle} <span className="date">({song.collectionDate})</span></i></h4>
          <p><audio controls="controls" preload="none">
          <source src={song.oggUrl} type="audio/ogg" />
          <source src={song.mp3Url} type="audio/mp3" />
          Your browser does not support embedded audio.
          </audio>
          <br />
          <span className="download"><a href={song.downloadUrl} download={"S. Christian Collins - " + song.songTitle + ".mp3"}>download</a> | {song.songTitle}</span></p>
          <p dangerouslySetInnerHTML={{__html: song.collectionDescription}}></p>
        <Divider className="mb-3" />
      </>
      )
  }

  export default MP3;
