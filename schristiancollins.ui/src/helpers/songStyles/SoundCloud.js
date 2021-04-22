import React from 'react';
import Divider from '@material-ui/core/Divider';

const SoundCloud = (song) => {
    return (
      <>
        <h4 key={song.songId}><i>{song.songTitle} <span className="date">({song.collectionDate})</span></i></h4>
          <iframe
            title={song.songTitle}
            width="100%"
            height="166"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src={song.embedUrl}></iframe>
            <div className="soundCloud d-flex row wrap">
              <a href="https://soundcloud.com/s-christian-collins" title="S. Christian Collins" target="_blank" rel="noreferrer" className="soundCloud-userName">S. Christian Collins</a> · 
              <a href={song.directUrl} title={"modemixer - " + song.songTitle } target="_blank" rel="noreferrer" className="soundCloud-userName">modemixer - {song.songTitle}</a>
            </div>
          <br />
          <p>
          <span className="download"><a href="http://modemixer.bandcamp.com/" target="_blank" rel="noreferrer">download</a></span></p>
          <p dangerouslySetInnerHTML={{__html: song.collectionDescription}}></p>
        <Divider className="mb-3" />
      </>
    )
  }

  export default SoundCloud;
