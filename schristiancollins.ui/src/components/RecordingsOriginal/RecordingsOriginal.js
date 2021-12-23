import React, { useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import './RecordingsOriginal.css';
import MP3 from '../../helpers/songStyles/MP3';
import SoundCloud from '../../helpers/songStyles/SoundCloud';
import YouTube from '../../helpers/songStyles/YouTube';
import Collection from '../../helpers/songStyles/Collection';

import { getRecordingsOriginal } from '../../helpers/data/musicData';

const Accordion = withStyles({
    root: {
      border: '1px solid rgba(0, 0, 0, .125)',
      boxShadow: 'none',
      '&:not(:last-child)': {
        borderBottom: 0,
      },
      '&:before': {
        display: 'none',
      },
      '&$expanded': {
        margin: 'auto',
      },
    },
    expanded: {},
  })(MuiAccordion);

  const AccordionSummary = withStyles({
    root: {
      backgroundColor: 'rgba(59, 46, 46, .85)',
      borderBottom: '1px solid rgba(0, 0, 0, .125)',
      marginBottom: -1,
      minHeight: 56,
      '&$expanded': {
        minHeight: 56,
      },
    },
    content: {
      '&$expanded': {
        margin: '12px 0',
      },
    },
    expanded: {},
  })(MuiAccordionSummary);
  
  const AccordionDetails = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
      backgroundColor: 'rgba(59, 46, 46, .90)',
      color: 'white',
    },
  }))(MuiAccordionDetails);

  
  const RecordingsOriginal = () => {
    const [expanded, setExpanded] = useState('');
    const [electric_pop, setElectricPop] = useState([]);
    const [film_game, setFilmGame] = useState([]);
    const [instrumental, setInstrumental] = useState([]);
    const [orchestraBand, setOrchestraBand] = useState([]);
    const [piano_harpsichord, setPianoHarpsichord] = useState([]);
    const [pageData, setPageData] = useState([]);
  
    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };


    const electroPopSort = electric_pop.map((music) => {
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

    const filmGameSort = film_game.map((music) => {
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

    const instrumentalSort = instrumental.map((music) => {
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

    const orchestraBandSort = orchestraBand.map((music) => {
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

    const pianoHarpsichordSort = piano_harpsichord.map((music) => {
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
      getRecordingsOriginal().then((res) => {
        setPageData(res);
        res.recordings.forEach((group) => {
          if (group.genre === 'electronic-pop') {
            setElectricPop(group.music);
          } else if (group.genre === 'film-game') {
            setFilmGame(group.music);
          } else if (group.genre === 'instrumental') {
            setInstrumental(group.music);
          } else if (group.genre === 'orchestra-band') {
            setOrchestraBand(group.music);
          } else if (group.genre === 'piano-harp') {
            setPianoHarpsichord(group.music);
          }
        })
      });
    }, []);

    return (
      <>
      {pageData.page_header ? (
      <div className="RecordingsOriginal fade-in">
          {pageData.page_header ? (<h1>{pageData.page_header}</h1>) : ('')}
          {pageData.page_content ? (<div className="newText text-left" dangerouslySetInnerHTML={{__html: pageData.page_content}}></div>) : ('')}
          <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
              <h2>Electronic &amp; Pop</h2>
            </AccordionSummary>
            <AccordionDetails>
                <div className="newText text-left">
                  {electroPopSort}
                </div>
            </AccordionDetails>
          </Accordion>
          <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                <h2>Film and Game Scores</h2>
            </AccordionSummary>
            <AccordionDetails>
              <div className="newText text-left">
                {filmGameSort}  
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                <h2>Instrumental</h2>
            </AccordionSummary>
            <AccordionDetails>
              <div className="newText text-left">
                {instrumentalSort}
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                <h2>Orchestra and Band</h2>
            </AccordionSummary>
            <AccordionDetails>
              <div className="newText text-left">
                {orchestraBandSort}
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion square expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
            <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
                <h2>Piano &amp; Harpsichord</h2>
            </AccordionSummary>
            <AccordionDetails>
              <div className="newText text-left">
                {pianoHarpsichordSort}
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      ) : ('')};
        </>
        );
    }

export default RecordingsOriginal;
