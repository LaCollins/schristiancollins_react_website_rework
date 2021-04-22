import React, { useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Divider from '@material-ui/core/Divider';
import './RecordingsOriginal.css';
import foolmeonce from '../../assets/music/S_Christian_Collins--Fool_Me_Once.mp3';
import starrangers from '../../assets/music/S_Christian_Collins--Star_Rangers-title.mp3';
import starrangersdefeat from '../../assets/music/S_Christian_Collins--Star_Rangers-defeat.mp3';
import starrangersvictory from '../../assets/music/S_Christian_Collins--Star_Rangers-victory.mp3';
import thumbelinaflowerfairy from '../../assets/music/S_Christian_Collins--Thumbelina--Act_VI--Dance_of_the_Flower_Fairies-Grand_Dance_and_Transformation.mp3';
import thumbelinasnowflakes from '../../assets/music/S_Christian_Collins--Thumbelina--Act_V--Frigid_Dance_of_the_Snowflakes.mp3';
import thumbelinalocusts from '../../assets/music/S_Christian_Collins--Thumbelina--Act_IV--Dance_of_the_Locusts.mp3';
import thumbelinaleaves from '../../assets/music/S_Christian_Collins--Thumbelina--Act_IV--Dance_of_the_Autumn_Leaves.mp3';
import thumbelinadance from '../../assets/music/S_Christian_Collins--Thumbelina--Act_II--Thumbelinas_Dance.mp3';
import thumbelinatadpoles from '../../assets/music/S_Christian_Collins--Thumbelina--Act_III--The_Tadpoles_and_the_Goldfish.mp3';
import skyrunner from '../../assets/music/S_Christian_Collins--Sky_Runner.mp3';
import prelude from '../../assets/music/S_Christian_Collins--Op16-No1--Prelude.mp3';
import crystalrain from '../../assets/music/S_Christian_Collins--Op16-No2--Crystal_Rain.mp3';
import whenhespeaks from '../../assets/music/S_Christian_Collins--When_He_Speaks.mp3';
import ponies from '../../assets/music/S_Christian_Collins--The_Ponies_are_Loose.mp3';
import thegift from '../../assets/music/S_Christian_Collins--The_Gift.mp3';
import MP3 from '../../helpers/songStyles/MP3';
import SoundCloud from '../../helpers/songStyles/SoundCloud';
import YouTube from '../../helpers/songStyles/YouTube';

import {
  getSoundCloudByGenre,
  getMp3sByGenre,
  getYouTubeByGenre,
  getMusicByGenre
} from '../../helpers/data/musicData';

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

    useEffect(() => {
      setElectricPop(getMusicByGenre('electronic_pop'));
    }, []);

    electric_pop.sort((a, b) => b.collectionDate - a.collectionDate);

    console.error(electric_pop);

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
                <h4><i>Star Rangers (iPhone) <span className="date">(2009)</span></i></h4>
                <p><audio controls="controls" preload="none">
                <source src="https://www.dropbox.com/s/txi8o1cxzvdzc2z/S_Christian_Collins--Star_Rangers-title.ogg?dl=1" type="audio/ogg" />
                <source src="https://www.dropbox.com/s/b0vkroez55klbl9/S_Christian_Collins--Star_Rangers-title.mp3?dl=1" type="audio/mp3" />
                Your browser does not support embedded audio.
                </audio>
                <br />
                <span className="download"><a href={starrangers} download="S. Christian Collins - Star Rangers-title.mp3">download</a> | Title Theme</span></p>
                <p><audio controls="controls" preload="none">
                <source src="https://www.dropbox.com/s/8jf2esla8jj3hjn/S_Christian_Collins--Star_Rangers-defeat.ogg?dl=1" type="audio/ogg" />
                <source src="https://www.dropbox.com/s/lm56j6axjnvhfce/S_Christian_Collins--Star_Rangers-defeat.mp3?dl=1" type="audio/mp3" />
                Your browser does not support embedded audio.
                </audio>
                <br />
                <span className="download"><a href={starrangersdefeat} download="S. Christian Collins - Star Rangers-defeat.mp3">download</a> | Song of Defeat</span></p>
                <p><audio controls="controls" preload="none">
                <source src="https://www.dropbox.com/s/azovhixg55fe5qp/S_Christian_Collins--Star_Rangers-victory.ogg?dl=1" type="audio/ogg" />
                <source src="https://www.dropbox.com/s/2oxgrk2hhv3wf8h/S_Christian_Collins--Star_Rangers-victory.mp3?dl=1" type="audio/mp3" />
                Your browser does not support embedded audio.
                </audio>
                <br />
                <span className="download"><a href={starrangersvictory} download="S. Christian Collins - Star Rangers-victory.mp3">download</a> | Victory Song</span></p>
                <p><a href="http://www.analogretro.com/StarRangers/" target="_blank" rel="noreferrer">Star Rangers</a> is a space shoot'em-up game for the iPhone, and my first break into video game scoring. Unfortunately, I was not well-prepared to do an orchestral score, as the quality of my orchestral sounds was not very good at the time. This is the first music project I created entirely using Linux and open source software, primarily Rosegarden and Qsynth.</p>
            </div>
            </AccordionDetails>
          </Accordion>
          <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                <h2>Instrumental</h2>
            </AccordionSummary>
            <AccordionDetails>
              <div className="newText text-left">
                <h4><i>Embers <span className="date">(2015)</span></i></h4>
                  <div className="youtubeContainer">
                  <iframe
                    title="Embers"
                    src="https://www.youtube.com/embed/3LADJbl7Dao"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
                  </div>
                <p>Here is the premiere of <i>Embers</i>, cowritten by Charlene Adzima and myself for violin and harpsichord. Performed live on the <a href="http://www.fusmadison.org/musicale" target="_blank" rel="noreferrer">Friday Musicale</a>, 2/13/2015 at the First Unitarian Society of Madison, WI.</p>
            <Divider className="mb-3" />
                <h4><i>Fair Flower <span className="date">(2014)</span></i></h4>
                  <div className="youtubeContainer">
                  <iframe
                    title="Fair Flower"
                    src="https://www.youtube.com/embed/huG2Eg6-4rw?theme=light"
                    frameBorder="0"
                    allowFullScreen></iframe>
                  </div>
                <p>Performed live on 4-11-2014 at the faculty recital at <a href="http://rhapsodyarts.org/" target="_blank" rel="noreferrer">Rhapsody Arts Center</a> in Verona, WI by Charlene Adzima (violin) and myself (piano). <i>Fair Flower</i> was created from a joint improvisation by Charlene and me. This piece is actually composed for violin and harpsichord, but this performance on piano + violin is probably our best performance of this piece.</p>
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
                <h4><i>Sky Runner <span className="date">(2014)</span></i></h4>
                  <div className="youtubeContainer">
                    <iframe
                    title="Sky Runner"
                    src="https://www.youtube.com/embed/eNyBGmPPyTc?theme=light"
                    frameBorder="0"
                    allowFullScreen>
                    </iframe>
                  </div>
                <br />
                <p>
                <span className="download"><a href={skyrunner} download="S. Christian Collins - Sky Runner.mp3">download</a> | sheet music coming soon...</span></p>
                <p><i>Sky Runner</i> is a synthpop-style piano piece that I wrote as a graduation gift for my student Ian. This piece draws inspiration from demoscene and chiptune styles as well as Martin Galway's unique rhythmic bass line style.</p>
              <Divider className="mb-3" />
                <h4><i>Prelude <span className="date">(2008, revised 2013)</span></i></h4>
                  <div className="youtubeContainer">
                    <iframe
                      title="prelude"
                      src="https://www.youtube.com/embed/4VP5HjTd29A?theme=light"
                      frameBorder="0"
                      allowFullScreen>
                    </iframe>
                  </div>
                  <br />
                  <p>
                <span className="download"><a href={prelude} download="S. Christian Collins - Five Pieces in Popular Styles, Op. 16 - 1. Prelude.mp3">download</a> | <a href="https://www.musicaneo.com/sheetmusic/sm-209153_prelude_op_16_no_1.html#209153" target="_blank" rel="noreferrer">sheet music</a></span></p>
                <p>Inspired by the famous Bach C major Prelude (BWV 846), my composition uses a similar, syncopated pattern, but I treat it in more of a pop style. I also don't use the same pattern throughout the entire song (c'mon, Bach!&rpar;</p>
              <Divider className="mb-3" />
                <h4><i>Crystal Rain <span className="date">(2009)</span></i></h4>
                  <div className="youtubeContainer">
                    <iframe
                      title="Crystal Rain"
                      src="https://www.youtube.com/embed/6RyocfiubiY?theme=light"
                      frameBorder="0"
                      allowFullScreen>
                    </iframe>
                  </div>
                <br />
                <p>
                <span className="download"><a href={crystalrain} download="S. Christian Collins - Five Pieces in Popular Styles, Op. 16 - 2. Crystal Rain.mp3">download</a> | <a href="https://www.musicaneo.com/sheetmusic/sm-210245_crystal_rain_op_16_no_2.html#210245" target="_blank" rel="noreferrer">sheet music</a></span></p>
                <p>This piece is the result of the most tortured composition process imaginable. Hopefully it doesn't show. I started writing it around 2000 and have been picking at it ever since. I made the final tweaks to the piece in July 2014, and I can finally say I'm happy with it.
                </p>
              <Divider className="mb-3" />
                <h4><i>Nocturne <span className="date">(2012)</span></i></h4>
                <iframe 
                  title="Nocturne"
                  width="100%"
                  height="166"
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/108995805&color=%2300bfff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
                  <div className="soundCloud d-flex row wrap">
                    <a href="https://soundcloud.com/s-christian-collins" title="S. Christian Collins" target="_blank" rel="noreferrer" className="soundCloud-userName">S. Christian Collins</a> · 
                    <a href="https://soundcloud.com/s-christian-collins/nocturne-namm-2013-version" title="Nocturne (NAMM 2013 Version)" target="_blank" rel="noreferrer" className="soundCloud-userName">Nocturne (NAMM 2013 Version)</a></div>
                <p>A piano piece I wrote for my sister for Christmas 2012. As part of my NAMM demo for Acoustica, I added some strings backing as well. The strings don't always fit as well as I'd like, but this piece was conceived solely as a solo piano work so it probably works best as such. In the original piano version, the thunder effect is created by rumbling the lowest strings on the piano. At some point I'll try to get a recording of this on a real grand so I can perform all of the hand-on-string effects that are supposed to be in there. The second half of this song is based on a short improv I did in 1997 called "Dream", which was available on this site previously.</p>
              <Divider className="mb-3" />
                <h4><i>Neo-Baroque Suite <span className="date">(2015)</span></i></h4>
                  <div className="youtubeContainer">
                    <iframe
                      title="Neo-Baroque Suite"
                      src="https://www.youtube.com/embed/K9ipZp60aWQ?theme=light"
                      frameBorder="0"
                      allowFullScreen></iframe>
                  </div>
                <p>The premiere performance of <i>Neo-Baroque Suite</i> for harpsichord. This is a work in progress, as I've only written two movements so far. Performed live on the <a href="http://www.fusmadison.org/musicale" target="_blank" rel="noreferrer">Friday Musicale</a>, 2/13/2015 at the First Unitarian Society of Madison, WI.</p>
              <Divider className="mb-3" />
                <h4><i>When He Speaks <span className="date">(1999)</span></i></h4>
                <p><audio controls="controls" preload="none">
                  <source src="https://www.dropbox.com/s/ojbd658cm3lczm1/S_Christian_Collins--When_He_Speaks.ogg?dl=1" type="audio/ogg" />
                  <source src="https://www.dropbox.com/s/9ob91rsmf6m6100/S_Christian_Collins--When_He_Speaks.mp3?dl=1" type="audio/mp3" />
                  Your browser does not support embedded audio.
                </audio>
                <br /><span className="download"><a href={whenhespeaks} download="S. Christian Collins - When He Speaks.mp3">download</a> | sheet music coming soon | recorded using <a href="http://www.acoustica.com/pianissimo/" target="_blank" rel="noreferrer">Pianissimo</a></span></p>

                <p>I wrote this song as inspiration for my sister when she was going
                through a difficult decision in her life. The melody, with it's
                echoes at different octaves, represents walking with God as He guides
                a person through life's twists and turns.</p>
              <Divider className="mb-3" />
              <h4><i>The Ponies Are Loose <span className="date">(1988)</span></i></h4>
              <p><audio controls="controls" preload="none">
              <source src="https://www.dropbox.com/s/vbxbjjw9ywrvmm0/S_Christian_Collins--The_Ponies_are_Loose.ogg?dl=1" type="audio/ogg" />
              <source src="https://www.dropbox.com/s/wuddc0cmew8umzj/S_Christian_Collins--The_Ponies_are_Loose.mp3?dl=1" type="audio/mp3" />
              Your browser does not support embedded audio.
              </audio>
              <br />
              <span className="download"><a href={ponies} download="S. Christian Collins - The Ponies are Loose.mp3">download</a> | sheet music coming soon</span></p>

              <p>I wrote this rag at age nine, a time when I was obsessed with
              Scott Joplin. I submitted it to the WMTA composition contest but
              was degraded by the judge because the piece was “not in ragtime
              form.” If it's not ragtime form, then neither are <i>The Maple Leaf Rag</i>, <i>The Entertainer</i> and many other Joplin favorites.</p>
            <Divider className="mb-3" />
              <h4><i>The Gift <span className="date">(2000)</span></i></h4>
              <p><audio controls="controls" preload="none">
              <source src="https://www.dropbox.com/s/nll2lw65gt825cr/S_Christian_Collins--The_Gift.ogg?dl=1" type="audio/ogg" />
              <source src="https://www.dropbox.com/s/1xlwnxq5jx9248i/S_Christian_Collins--The_Gift.mp3?dl=1" type="audio/mp3" />
              Your browser does not support embedded audio.
              </audio>
              <br />
              <span className="download"><a href={thegift} download="S. Christian Collins - The Gift.mp3">download</a> | sheet music coming soon | recorded using <a href="http://www.acoustica.com/pianissimo/" target="_blank" rel="noreferrer">Pianissimo</a></span></p>

              <p>When I wrote this song, I didn't really think much of it. My
              composition professor really liked it, though, so I'm putting it on
              this page for that reason alone.</p>
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
