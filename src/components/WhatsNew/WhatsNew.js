import React from "react";
import data from '../../db/whatsNew.json';

// stylesheet
import './WhatsNew.css';

function WhatsNew() {

  return(
    <div className="WhatsNew">
      <h1>What's New</h1>
        {data.reverse().map((item) => (
        <div className="text-left newText">
          <h2>{item.date}</h2>
          <p dangerouslySetInnerHTML={{__html: item.information}}></p>
        </div>
        ))}
    </div>
  );
}

export default WhatsNew;
