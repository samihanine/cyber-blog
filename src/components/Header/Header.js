import React, { useContext } from 'react';
import './Header.scss';
import { NavLink, useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

function Header({ setSearch, search, setTag }) {
  const navigate = useNavigate();

  return (
    <>
    <nav className="header">
      
      <NavLink to="/">
        <img width={50} height={50} alt="logo billet" src="https://img.icons8.com/external-soft-fill-juicy-fish/500000/ffffff/external-secure-internet-security-soft-fill-soft-fill-juicy-fish-3.png"/>
        <p>CyberBlog</p>
      </NavLink>
      <ul>
        <li><NavLink to="/">Accueil</NavLink></li>
        <li onClick={() => { setTag(-1); setSearch(""); }}><NavLink to="/blog">Blog</NavLink></li>
      </ul>

      <div>
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField  value={search} onChange={(e) => { 
            setSearch(e.target.value);
            navigate("/blog");
          }} id="input-with-sx" variant="standard" placeholder='Rechercher un article' />
        </Box>
      </div>
      
    </nav>
    </>
  );
}

export default Header;