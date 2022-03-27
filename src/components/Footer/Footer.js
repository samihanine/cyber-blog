import React from 'react';
import './Footer.scss';
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer>
		  <div id="copyright">© Tous droits réservés à CyberBlog, 2022</div>

        <div>
            <p>Plan du site</p>
            <nav>
                <ul>
                    <li><NavLink className="index" to="/">Accueil</NavLink></li>
                    <li><NavLink to="/blog">Blog</NavLink></li>
                    <li><NavLink to="/">Nous contacter</NavLink></li>
                </ul>
            </nav>
        </div>

        <div className="mention">
            <NavLink to="/">Mentions légales</NavLink>
        </div>
	</footer>
  );
}

export default Footer;