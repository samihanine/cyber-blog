import React, { useEffect, useState } from "react";
import {
  useParams,
} from "react-router-dom";

import './Article.scss';
import articles from "data/articles";
import { Rating, Typography } from '@mui/material';

function Article() {

  let { id } = useParams();

  const [scrollTop, setScrollTop] = useState(0);
  const [article, setArticle] = useState(null);
  const [value, setValue] = useState(3);

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='article page'>
      <div className='scroll'>
        <div style={{ width: Math.floor(getScrollPercent()) + "%" }}></div>
      </div>
      {(article) && <div className="container">

        <article>
          <article.Text />

          <div className="infos">
            <div className="author">
              
              <img src="https://img.icons8.com/external-flaticons-flat-flat-icons/10000/ffffff/external-author-copyright-law-flaticons-flat-flat-icons.png" />
              <div>
                <div><b>Auteur:</b> <p>{article.author}</p></div>
                <div><b>Date de publication:</b> <p>{formatDate(article.date)}</p></div>
              </div>
            </div>
            <div>
              <Typography component="legend">Notes des utilisateurs</Typography>
              <span>
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
                <b>{value}</b>
              </span>
            </div>


          </div>

        </article>

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

function formatDate(d) {
  d = d || new Date();
  let curr_date = d.getDate();
  let curr_month = d.getMonth();
  let curr_year = d.getFullYear();

  curr_month++;
  if (curr_month<10) curr_month = "0" + curr_month;
  if (curr_date<10) curr_date = "0" + curr_date;
  
  return curr_date + "/" + curr_month + "/" + curr_year;
}

export default Article;