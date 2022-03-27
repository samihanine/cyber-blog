import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './index.scss';

import Home from 'pages/Home/Home';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Blog from 'pages/Blog/Blog';
import Article from 'pages/Article/Article';

const App = () => {
  const [search, setSearch] = useState("");
  const [tag, setTag] = useState(-1);

  return <div className='app'>
      <BrowserRouter>
        
        <Header setTag={setTag} search={search} setSearch={setSearch} />
          <Routes>
            <Route exact path="/" element={<Home setTag={setTag} />}></Route>
            <Route exact path="/blog" element={<Blog setSearch={setSearch} search={search} tag={tag} setTag={setTag} />}></Route>
            <Route path="/article/:id/:slug" element={<Article />}></Route>
            <Route path="*" element={<Navigate replace to="/" />}></Route>
          </Routes>
        <Footer />
      </BrowserRouter>
  </div>
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
