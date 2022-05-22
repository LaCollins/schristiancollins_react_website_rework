import React, { useState, useEffect} from "react";
import newsData from "../../helpers/data/newsData";
import moment from 'moment';

// stylesheet
import './WhatsNew.css';

function WhatsNew() {
  const [news, setNews] = useState([]);

  useEffect(() => {
      newsData()
      .then((response) => setNews(response))
      .catch((err) => console.error(err));
  }, [])

  return(
    <>
    {news.length ? (
      <div className="WhatsNew fade-in header-container">
        <h1>What's New</h1>
          {news.map((item) => (
          <div className="text-left newText" key={item.news_date}>
            <h2>{moment(item.news_date).format('MMMM Do YYYY')}</h2>
            <div dangerouslySetInnerHTML={{__html: item.content}}></div>
          </div>
          ))}
      </div>
    ) : ('')}
    </>
  );
}

export default WhatsNew;
