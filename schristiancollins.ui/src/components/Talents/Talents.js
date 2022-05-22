import React, {useState, useEffect} from 'react';
import getTalents from '../../helpers/data/talentsData';
import '../WhatsNew/WhatsNew.css';

const Talents = () => {
    const [talents, setTalents] = useState([]);  

    useEffect(() => {
        getTalents()
        .then((response) => setTalents(response))
        .catch((err) => console.error(err));
    }, [])
  
    return (
        <>
        {talents.content ? (
        <div className="Talents fade-in header-container">
            <h1>Talents for Hire</h1>
            <div className="text-left newText" dangerouslySetInnerHTML={{__html: talents.content}}>
            </div>
        </div>
        ) : ('')}
        </>
    )
}

export default Talents;
