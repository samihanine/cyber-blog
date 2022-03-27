import React, { useContext } from 'react';
import './Header.scss';
import { NavLink } from "react-router-dom";


function Header() {
  return (
    <>
    <nav className="header">
      
      <NavLink to="/">
        <img width={50} height={50} alt="logo billet" src="https://img.icons8.com/external-soft-fill-juicy-fish/500000/ffffff/external-secure-internet-security-soft-fill-soft-fill-juicy-fish-3.png"/>
        <p>Cyblog</p>
      </NavLink>
      <ul>
        <li><NavLink to="/">Accueil</NavLink></li>
        <li><NavLink to="/blog">Les articles</NavLink></li>
      </ul>

      

    </nav>
    </>
  );
}

export default Header;