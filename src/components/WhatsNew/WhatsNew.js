import React, { useState, useEffect} from "react";
import newsData from "../../helpers/data/newsData";
import moment from 'moment';
// import data from '../../db/whatsNew.json';

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
    <div className="WhatsNew">
      <h1>What's New</h1>
        {news.reverse().map((item) => (
        <div className="text-left newText" key={item.newsId}>
          <h2>{moment(item.news_date).format('MMMM Do YYYY')}</h2>
          <p dangerouslySetInnerHTML={{__html: item.information}}></p>
        </div>
        ))}
    </div>
  );
}

export default WhatsNew;
