import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './index.scss';

import Home from 'pages/Home/Home';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Blog from 'pages/Blog/Blog';
import Article from 'pages/Article/Article';

const App = () => {

  return <div className='app'>
      <BrowserRouter>
        
        <Header />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/blog" element={<Blog />}></Route>
            <Route path="/article/:id" element={<Article />}></Route>
            <Route  path="*" element={<Navigate replace to="/" />}></Route>
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
