import React, { useEffect, useState } from 'react';
import { getAboutVirtualInstruments } from '../../../helpers/data/musicData';

const AboutVirtualInstruments = () => {
    const [pageData, setPageData] = useState([]);

    useEffect(() => {
        getAboutVirtualInstruments()
            .then((res) => {
                setPageData(res);
            })
            .catch((error) => console.error(error));
    },[])
    return (
        <>
        {pageData.page_header ? (
            <div className="SheetMusicOther fade-in">
                {pageData.page_header ? (<h1>{pageData.page_header}</h1>) : ('')}
                {pageData.page_content ? (<div className="newText text-left" dangerouslySetInnerHTML={{__html: pageData.page_content}}></div>) : ('')}
            </div>)
        : ('')}
        </>
    )
}

export default AboutVirtualInstruments;