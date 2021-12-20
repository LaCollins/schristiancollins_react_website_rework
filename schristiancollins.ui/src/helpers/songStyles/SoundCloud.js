import React from 'react';
import Divider from '@material-ui/core/Divider';

const SoundCloud = (song) => {
    return (
      <>
        <h4 key={song.song_title}><i>{song.song_title} <span className="date">({song.song_date})</span></i></h4>
          <iframe
            title={song.song_title}
            width="100%"
            height="166"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src={song.embed_url}></iframe>
            <div className="soundCloud d-flex row wrap">
              <a href="https://soundcloud.com/s-christian-collins" title="S. Christian Collins" target="_blank" rel="noreferrer noopener" className="soundCloud-userName">S. Christian Collins</a>
              <a href={song.direct_url} title={"modemixer - " + song.song_title } target="_blank" rel="noreferrer noopener" className="soundCloud-userName">modemixer - {song.song_title}</a>
            </div>
          <p>
          <span className="download"><a href="http://modemixer.bandcamp.com/" target="_blank" rel="noreferrer noopener">download</a></span></p>
          <p dangerouslySetInnerHTML={{__html: song.song_description}}></p>
        <Divider className="mb-3" />
      </>
    )
  }

  export default SoundCloud;
