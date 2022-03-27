import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <footer>
		  <div id="copyright">© Tous droits réservés à Cabinet Latif, 2021</div>

        <div>
            <p>Plan du site</p>
            <nav>
                <ul>
                    <li><a class="index" href="index.html">Accueil</a></li>
                    <li><a href="service.html">Nos services</a></li>
                    <li><a href="contact.html">Nous contacter</a></li>
                </ul>
            </nav>
        </div>

        <div class="mention">
            <a href="./mention.html">Mentions légales</a>
        </div>
	</footer>
  );
}

export default Footer;