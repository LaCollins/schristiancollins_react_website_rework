import { Typography } from "@material-ui/core";
import React from "react";

//stylesheet
import './Home.css';

//image
import profilePic from './images/scc-photo2.jpg';

  
  const Home = () => {
    return (
      <div className="Home mb-2">
        <div>
            <h1 className="mt-2">About Me</h1>
            <div className="aboutMe row d-flex col-m-6">
                <div className="imgContainer">
                    <img alt="S. Christian Collins" className="photo" src={profilePic}/>
                </div>
                <div className="text-left col mt-2">
                    <p>I am a pianist and composer currently residing in Madison, Wisconsin. I have been playing piano since I was four and composing since about six. My dad sparked my fascination with computers when I was young, and music and technology have pretty much governed my interests ever since.</p>
                    <p>This site exists as a way for me to share the music I have created over the years, including original compositions as well as arrangements and transcriptions of existing music. You will also find various instruments that I have created in the SoundFont and SFZ sampler formats.</p>
                    <h2>Short Professional Bio</h2>
                    <p>Possessing degrees from both UW-Stevens Point (BM in piano performance) and the University of Minnesota (master's in piano performance), I have composed music for many different instruments from piano to full symphony orchestra, including a full-length ballet. I currently teach piano
                    and composition out of my home studio and design virtual instruments for 
                    <a href="http://www.musescore.org" target="_blank" rel="noopener noreferrer"> MuseScore</a> and <a href="http://www.acoustica.com" target="_blank" rel="noopener noreferrer">Acoustica</a> (including <a href="http://www.acoustica.com/mixcraft/" target="_blank">Mixcraft</a> and <a href="http://www.acoustica.com/pianissimo/" target="_blank">
                    Pianissimo</a>). I also have experience composing music for video games and short films.</p>
                </div>
            </div>
        </div>
      </div>
    );
  };
  

  
  export default Home;