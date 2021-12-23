import React from 'react';
import Divider from '@material-ui/core/Divider';

const YouTube = (song) => {
    return (
      <>
        <h4 key={song.song_title}><i>{song.song_title} <span className="date">({song.song_date})</span></i></h4>
            <div className="youtubeContainer">
            <iframe
            title={song.song_title}
            src={song.embed_url}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
            </div>
            <br />
          <p dangerouslySetInnerHTML={{__html: song.song_description}}></p>
          <p>
            <span className="download">
              {song.download_url ? (<a href={song.download_url} target="_blank" rel="noreferrer noopener">download</a>) : ('')}
              {song.sheet_music_url ? (' | ') : ('')}
              {song.sheet_music_url ? (<a href={song.sheet_music_url} target="_blank" rel="noreferrer noopener">sheet music</a>) : ('')}
              {song.additional_details ? (' | ') : ('')}
              {song.additional_details ? (<span>{song.additional_details}</span>) : ('')}
            </span>
          </p>
        <Divider className="mb-3" />
      </>
    )
  }

  export default YouTube;
