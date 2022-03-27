import React, { useEffect, useState } from "react";
import {
  useParams,
} from "react-router-dom";

import './Article.scss';
import articles from "data/articles";

function Article() {

  let { id } = useParams();

  const [scrollTop, setScrollTop] = useState(0);
  const [article, setArticle] = useState(null);
  
  useEffect(() => {
    const onScroll = e => {
      setScrollTop(e.target.documentElement.scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  useEffect(() => {
    if(articles[id]) {
      const copy = articles[id];
      setArticle({...copy});
      console.log(copy)
    }
    
  }, [id])

  return (
    <div className='article page'>
      <div className='scroll'>
        <div style={{ width: Math.floor(getScrollPercent()) + "%" }}></div>
      </div>
      {(article) && <div className="container">

        <article.Text />
      </div>}
 


    </div>
  );
}

function getScrollPercent() {
  var h = document.documentElement, 
      b = document.body,
      st = 'scrollTop',
      sh = 'scrollHeight';
  return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
}

export default Article;