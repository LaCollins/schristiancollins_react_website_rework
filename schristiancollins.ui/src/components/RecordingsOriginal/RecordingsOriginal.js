import React, { useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import './RecordingsOriginal.css';
// import foolmeonce from '../../assets/music/S_Christian_Collins--Fool_Me_Once.mp3';
// import starrangers from '../../assets/music/S_Christian_Collins--Star_Rangers-title.mp3';
// import starrangersdefeat from '../../assets/music/S_Christian_Collins--Star_Rangers-defeat.mp3';
// import starrangersvictory from '../../assets/music/S_Christian_Collins--Star_Rangers-victory.mp3';
import thumbelinaflowerfairy from '../../assets/music/S_Christian_Collins--Thumbelina--Act_VI--Dance_of_the_Flower_Fairies-Grand_Dance_and_Transformation.mp3';
import thumbelinasnowflakes from '../../assets/music/S_Christian_Collins--Thumbelina--Act_V--Frigid_Dance_of_the_Snowflakes.mp3';
import thumbelinalocusts from '../../assets/music/S_Christian_Collins--Thumbelina--Act_IV--Dance_of_the_Locusts.mp3';
import thumbelinaleaves from '../../assets/music/S_Christian_Collins--Thumbelina--Act_IV--Dance_of_the_Autumn_Leaves.mp3';
import thumbelinadance from '../../assets/music/S_Christian_Collins--Thumbelina--Act_II--Thumbelinas_Dance.mp3';
import thumbelinatadpoles from '../../assets/music/S_Christian_Collins--Thumbelina--Act_III--The_Tadpoles_and_the_Goldfish.mp3';
// import skyrunner from '../../assets/music/S_Christian_Collins--Sky_Runner.mp3';
// import prelude from '../../assets/music/S_Christian_Collins--Op16-No1--Prelude.mp3';
// import crystalrain from '../../assets/music/S_Christian_Collins--Op16-No2--Crystal_Rain.mp3';
// import whenhespeaks from '../../assets/music/S_Christian_Collins--When_He_Speaks.mp3';
// import ponies from '../../assets/music/S_Christian_Collins--The_Ponies_are_Loose.mp3';
// import thegift from '../../assets/music/S_Christian_Collins--The_Gift.mp3';
import MP3 from '../../helpers/songStyles/MP3';
import SoundCloud from '../../helpers/songStyles/SoundCloud';
import YouTube from '../../helpers/songStyles/YouTube';

import { getMusicByGenre, setCollection } from '../../helpers/data/musicData';

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

  
  const OriginalRecordings = () => {
    const [expanded, setExpanded] = React.useState('');
    const [electric_pop, setElectricPop] = React.useState([]);
    const [film_game, setFilmGame] = React.useState([]);
    const [instrumental, setInstrumental] = React.useState([]);
    const [piano_harpsichord, setPianoHarpsichord] = React.useState([]);
  
    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };


    const electroPopSort = electric_pop.map((song) => {
      if (song.mediaType === 'mp3') {
        return MP3(song);
      } else if (song.mediaType === 'soundcloud') {
        return SoundCloud(song);
      } else if (song.mediaType === 'youtube') {
        return YouTube(song);
      }
      return ('');
    })

    const filmGameSort = film_game.map((song) => {
      if (song.mediaType === 'mp3') {
        return MP3(song);
      } else if (song.mediaType === 'soundcloud') {
        return SoundCloud(song);
      } else if (song.mediaType === 'youtube') {
        return YouTube(song);
      }
      return ('');
    })

    const instrumentalSort = instrumental.map((song) => {
      if (song.mediaType === 'mp3') {
        return MP3(song);
      } else if (song.mediaType === 'soundcloud') {
        return SoundCloud(song);
      } else if (song.mediaType === 'youtube') {
        return YouTube(song);
      }
      return ('');
    })

    const pianoHarpsichordSort = piano_harpsichord.map((song) => {
      if (song.mediaType === 'mp3') {
        return MP3(song);
      } else if (song.mediaType === 'soundcloud') {
        return SoundCloud(song);
      } else if (song.mediaType === 'youtube') {
        return YouTube(song);
      }
      return ('');
    })

    useEffect(() => {
      setElectricPop(getMusicByGenre('electronic_pop'));
      setFilmGame(getMusicByGenre('film_game'));
      setInstrumental(getMusicByGenre('instrumental'));
      setPianoHarpsichord(getMusicByGenre('piano_harpsichord'));
    }, []);

    electric_pop.sort((a, b) => b.collectionDate - a.collectionDate);
    film_game.sort((a, b) => b.collectionDate - a.collectionDate);
    instrumental.sort((a, b) => b.collectionDate - a.collectionDate);
    piano_harpsichord.sort((a, b) => b.collectionDate - a.collectionDate);
    setCollection(film_game);

    return (
        <div>
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
                <h4><i>Thumbelina <span className="date">(2006)</span></i></h4>
                <p><audio controls="controls" preload="none">
                <source src="https://www.dropbox.com/s/fj0tkvrt96op1m3/S_Christian_Collins--Thumbelina--Act_VI--Dance_of_the_Flower_Fairies-Grand_Dance_and_Transformation.ogg?dl=1" type="audio/ogg" />
                <source src="https://www.dropbox.com/s/igbl0zd1djjjhnx/S_Christian_Collins--Thumbelina--Act_VI--Dance_of_the_Flower_Fairies-Grand_Dance_and_Transformation.mp3?dl=1" type="audio/mp3" />
                Your browser does not support embedded audio. 
                </audio>
                <br />
                <span className="download"><a href={thumbelinaflowerfairy} download="S. Christian Collins - Thumbelina--Act VI - Dance of the Flower Fairies, Grand Dance and Transformation.mp3">download</a> | Dance of the Flower Fairies, Grand Dance and Transformation</span></p>

                <p><audio controls="controls" preload="none">
                <source src="https://www.dropbox.com/s/yocugapvoxj4xx3/S_Christian_Collins--Thumbelina--Act_V--Frigid_Dance_of_the_Snowflakes.ogg?dl=1" type="audio/ogg" />
                <source src="https://www.dropbox.com/s/ji5f8kavu7u921p/S_Christian_Collins--Thumbelina--Act_V--Frigid_Dance_of_the_Snowflakes.mp3?dl=1" type="audio/mp3" />
                Your browser does not support embedded audio.
                </audio>
                <br />
                <span className="download"><a href={thumbelinasnowflakes} download="S. Christian Collins - Thumbelina--Act V - Frigid Dance of the Snowflakes.mp3">download</a> | Frigid Dance of the Snowflakes</span></p>

                <p><audio controls="controls" preload="none">
                <source src="https://www.dropbox.com/s/pauv4wzv3huqae0/S_Christian_Collins--Thumbelina--Act_IV--Dance_of_the_Locusts.ogg?dl=1" type="audio/ogg" />
                <source src="https://www.dropbox.com/s/9bsbd31kzug7bub/S_Christian_Collins--Thumbelina--Act_IV--Dance_of_the_Locusts.mp3?dl=1" type="audio/mp3" />
                Your browser does not support embedded audio.
                </audio>
                <br /><span className="download"><a href={thumbelinalocusts} download="S. Christian Collins - Thumbelina--Act IV - Dance of the Locusts.mp3">download</a> | Dance of the Locusts</span></p>

                <p><audio controls="controls" preload="none">
                <source src="https://www.dropbox.com/s/u0bln02fxci0owd/S_Christian_Collins--Thumbelina--Act_IV--Dance_of_the_Autumn_Leaves.ogg?dl=1" type="audio/ogg" />
                <source src="https://www.dropbox.com/s/c374eklapnxqb1r/S_Christian_Collins--Thumbelina--Act_IV--Dance_of_the_Autumn_Leaves.mp3?dl=1" type="audio/mp3" />
                Your browser does not support embedded audio.
                </audio>
                <br /><span className="download"><a href={thumbelinaleaves} download="S. Christian Collins - Thumbelina--Act IV--Dance of the Autumn Leaves.mp3">download</a> | Dance of the Autumn Leaves</span></p>

                <p><audio controls="controls" preload="none">
                <source src="https://www.dropbox.com/s/qyl1bw3ln6sxsny/S_Christian_Collins--Thumbelina--Act_II--Thumbelinas_Dance.ogg?dl=1" type="audio/ogg" />
                <source src="https://www.dropbox.com/s/3yay8dxjm8ylg9o/S_Christian_Collins--Thumbelina--Act_II--Thumbelinas_Dance.mp3?dl=1" type="audio/mp3" />
                Your browser does not support embedded audio.
                </audio>
                <br /><span className="download"><a href={thumbelinadance} download="S. Christian Collins - Thumbelina--Act II - Thumbelina's Dance.mp3">download</a> | Thumbelina's Dance</span></p>

                <p><audio controls="controls" preload="none">
                <source src="https://www.dropbox.com/s/9gc5n34n9zv7its/S_Christian_Collins--Thumbelina--Act_III--The_Tadpoles_and_the_Goldfish.ogg?dl=1" type="audio/ogg" />
                <source src="https://www.dropbox.com/s/k4b1fquxx2lrm0a/S_Christian_Collins--Thumbelina--Act_III--The_Tadpoles_and_the_Goldfish.mp3?dl=1" type="audio/mp3" />
                Your browser does not support embedded audio.
                </audio>
                <br /><span className="download"><a href={thumbelinatadpoles} download="S. Christian Collins - Thumbelina--Act III - The Tadpoles and the Goldfish.mp3">download</a> | The Tadpoles and the Goldfish</span></p>

                <p>A ballet commissioned by the <a href="http://www.mwt.net/~marilynschoolofdance/MJDT.html" target="_blank" rel="noreferrer">Monroe-Jackson Dance Theatre of Central Wisconsin</a>. It was performed in the spring of 2007.
                These excerpts are from the dance rehearsal CD I made with <a href="http://www.cakewalk.com" target="_blank" rel="noreferrer">Cakewalk Home Studio 4</a> and various collected orchestral <a href="http://www.soundblaster.com/soundfont/" target="_blank" rel="noreferrer">SoundFont</a> banks.</p>
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
        );
    }

const RecordingsOriginal = () => {
    return (
        <div className="RecordingsOriginal">
            <h1>Recordings of Original Music</h1>
            <div className="newText text-left">
                <p>Here are some selections from my 22+ years of compositional output. I hope you enjoy them. This page will be updated periodically as I get more of my music recorded.</p>
            </div>
            <OriginalRecordings />
        </div>
    )
}

export default RecordingsOriginal;
