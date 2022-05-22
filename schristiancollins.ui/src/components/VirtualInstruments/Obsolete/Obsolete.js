import React, { useEffect, useState } from 'react';
import { getObsolete } from '../../../helpers/data/musicData';

const Obsolete = () => {
    const [pageData, setPageData] = useState([]);

    useEffect(() => {
        getObsolete()
            .then((res) => {
                setPageData(res);
            })
            .catch((error) => console.error(error));
    },[])
    return (
        <>
        {pageData.page_header ? (
            <div className="SheetMusicOther fade-in header-container">
                {pageData.page_header ? (<h1>{pageData.page_header}</h1>) : ('')}
                {pageData.page_content ? (<div className="newText text-left" dangerouslySetInnerHTML={{__html: pageData.page_content}}></div>) : ('')}
            </div>)
        : ('')}
        </>
    )
}

export default Obsolete;