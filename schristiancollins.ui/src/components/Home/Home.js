import React, { useEffect, useState } from 'react';
import aboutMe from '../../helpers/data/aboutMe';

//stylesheet
import './Home.css';

  
const Home = () => {
  const [aboutMeContent, setAboutMeContent] = useState([])

  useEffect(() => {
    aboutMe.getAboutMePage()
    .then((res) => {
      setAboutMeContent(res);
    })
    .catch((error) => console.error(error))
  }, []);

  return (
    <>
      {aboutMeContent.header ? (
      <div className="Home mb-2 fade-in newText">
          <div>
              {aboutMeContent.header ? (<h1 className="mt-2">{aboutMeContent.header}</h1>) : ('')}
              <div className="aboutMe row d-flex col-m-6 newText">
                  <div className="imgContainer">
                      {aboutMeContent.image ? (<img alt={aboutMeContent.image.alt} className="photo" src={aboutMeContent.image.url}/>) : ('')}
                  </div>
                  <div className="text-left col mt-2" dangerouslySetInnerHTML={{__html: aboutMeContent.wysiwyg}}>
                  </div>
              </div>
          </div>
        </div>
        ) : ('')}
      </>
  );
};
  

  
  export default Home;