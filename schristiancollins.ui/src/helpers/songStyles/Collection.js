import React from 'react';
import Divider from '@material-ui/core/Divider';

const Collection = (collection) => {
    const songs = collection.songs.map((song) => {
            if (song.file_type === 'mp3') {
                return (
                    <>
                    <p key={song.song_title}>
                        <audio controls="controls" preload="none">
                        <source src={song.ogg_url} type="audio/ogg" />
                        <source src={song.mp3_url} type="audio/mp3" />
                        Your browser does not support embedded audio.
                        </audio>
                        <br />
                        <span className="download"><a href={song.download_url} download={"S. Christian Collins - " + song.song_title + ".mp3"}>download</a>
                            {song.sheet_music_url ? (' | ') : ('')}
                            {song.sheet_music_url ? (<a href={song.sheet_music_url} target="_blank" rel="noreferrer noopener">sheet music</a>) : ('')} | {song.song_title}
                            {song.additional_details ? (' | ') : ('')}
                            {song.additional_details ? (<span>{song.additional_details}</span>) : ('')}
                        </span></p>
                    </>
                )
            } else if (song.file_type === 'soundcloud') {
                return (
                <><iframe
                    title={song.song_title}
                    width="100%"
                    height="166"
                    scrolling="no"
                    frameBorder="no"
                    allow="autoplay"
                    key={song.song_title}
                    src={song.embed_url}></iframe><div className="soundCloud d-flex row wrap">
                        <a href="https://soundcloud.com/s-christian-collins" title="S. Christian Collins" target="_blank" rel="noreferrer noopener" className="soundCloud-userName">S. Christian Collins</a>
                        <a href={song.direct_url} title={"modemixer - " + song.song_title} target="_blank" rel="noreferrer noopener" className="soundCloud-userName">modemixer - {song.song_title}</a>
                    </div><p>
                        <span className="download"><a href="http://modemixer.bandcamp.com/" target="_blank" rel="noreferrer noopener">download</a>
                            {song.sheet_music_url ? (' | ') : ('')}
                            {song.sheet_music_url ? (<a href={song.sheet_music_url} target="_blank" rel="noreferrer noopener">sheet music</a>) : ('')}
                            {song.additional_details ? (' | ') : ('')}
                            {song.additional_details ? (<span>{song.additional_details}</span>) : ('')}
                        </span></p></>
                )
            } else if (song.file_type === 'youtube') {
                return (
                    <>
                        <div className="youtubeContainer" key={song.song_title}>
                        <iframe
                        title={song.song_title}
                        src={song.embed_url}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
                        <span className="download"><a href={song.download_url} download={"S. Christian Collins - " + song.song_title + ".mp3"}>download</a>
                            {song.sheet_music_url ? (' | ') : ('')}
                            {song.sheet_music_url ? (<a href={song.sheet_music_url} target="_blank" rel="noreferrer noopener">sheet music</a>) : ('')} | {song.song_title}
                            {song.additional_details ? (' | ') : ('')}
                            {song.additional_details ? (<span>{song.additional_details}</span>) : ('')}
                        </span>
                        </div>
                    </>
                )
            }
            return('');
        });
  
    return (
      <>
        <h4 key={collection.collection_title}><i>{collection.collection_title} <span className="date">({collection.collection_date})</span></i></h4>
            {songs}
        <p dangerouslySetInnerHTML={{__html: collection.collection_description}}></p>
        <Divider className="mb-3" />
      </>
    )
  }

  export default Collection;
