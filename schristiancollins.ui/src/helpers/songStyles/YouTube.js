import React from 'react';
import Divider from '@material-ui/core/Divider';

const YouTube = (song) => {
    return (
      <>
        <h4><i>{song.songTitle} <span className="date">({song.collectionDate})</span></i></h4>
            <div className="youtubeContainer">
            <iframe
            title={song.songTitle}
            src={song.embedUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
            </div>
          <p dangerouslySetInnerHTML={{__html: song.collectionDescription}}></p>
        <Divider className="mb-3" />
      </>
    )
  }

  export default YouTube;
