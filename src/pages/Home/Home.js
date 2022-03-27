import React from 'react';
import './Home.scss';

function Home() {
  return (
    <div className='home page'>
        <article class="banner">
            <h1>Tout savoir sur la cyber-sécurité</h1>
        </article>

        <article class="grey">
            <section>
                <h2>Les thèmes</h2>

                <div class="wrapper">
                    <a class="card" href="./service.html#expertise">
                    <img alt="attaque" width="50" height="50" src="https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/64/ffffff/external-sword-desert-icongeek26-linear-colour-icongeek26.png"/>
                        <p>Les attaques</p>
                    </a>
    
                    <a class="card" href="./service.html#audit">
                        <img alt="loupe sur un dossier" width="50" height="50" src="https://img.icons8.com/stickers/100/ffffff/security-checked.png"/>
                        <p>Mieux se protéger</p>
                    </a>
    
                    <a class="card" href="./service.html#gestion">
                        <img alt="ressources humaines" width="50" height="50" src="https://img.icons8.com/dusk/64/ffffff/permanent-job.png"/>
                        <p>Le marché de l’emploi</p>
                    </a>
    
                    <a class="card" href="./service.html#entreprise">
                        <img alt="entreprise groupe de personnes" width="50" height="50" src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/ffffff/external-hacker-cryptocurrency-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png"/>
                        <p>Les hackers</p>
                    </a>

                    <a class="card" href="./service.html#entreprise">
                        <img alt="entreprise groupe de personnes" width="50" height="50" src="https://img.icons8.com/officel/1600/ffffff/learning.png"/>
                        <p><em>Se former</em></p>
                    </a>
                </div>

            </section>
        </article>


        <article class="white">
            <section>
                <h2>Les derniers articles</h2>

            </section>
        </article>
    </div>
  );
}

export default Home;