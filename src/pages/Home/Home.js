import React from 'react';
import './Home.scss';
import articles from 'data/articles';
import Card from 'components/Card/Card';
import { NavLink, useNavigate } from 'react-router-dom';

function Home({ setTag }) {
    const navigate = useNavigate()

    const handleClick = (id) => {
        setTag(id);
        navigate("/blog");
    }
  return (
    <div className='home page'>
        <article className="banner">
            <h1>Tout savoir sur la cyber-sécurité</h1>
        </article>

        <article className="grey">
            <section>
                <h2>Les thèmes</h2>

                <div className="wrapper">
                    <div className="card" onClick={() => handleClick(0)}>
                        <img alt="attaque" width="50" height="50" src="https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/64/ffffff/external-sword-desert-icongeek26-linear-colour-icongeek26.png"/>
                        <p>Les attaques</p>
                    </div>
    
                    <div className="card" onClick={() => handleClick(1)}>
                        <img alt="loupe sur un dossier" width="50" height="50" src="https://img.icons8.com/stickers/100/ffffff/security-checked.png"/>
                        <p>Mieux se protéger</p>
                    </div>
    
                    <div className="card" onClick={() => handleClick(2)}>
                        <img alt="ressources humaines" width="50" height="50" src="https://img.icons8.com/dusk/64/ffffff/permanent-job.png"/>
                        <p>Le marché de l’emploi</p>
                    </div>
    
                    <div className="card" onClick={() => handleClick(3)}>
                        <img alt="entreprise groupe de personnes" width="50" height="50" src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/ffffff/external-hacker-cryptocurrency-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png"/>
                        <p>Les hackers</p>
                    </div>

                    <a className="card" onClick={() => handleClick(4)}>
                        <img alt="entreprise groupe de personnes" width="50" height="50" src="https://img.icons8.com/officel/1600/ffffff/learning.png"/>
                        <p>Se former</p>
                    </a>
                </div>

            </section>
        </article>


        <article className="white">
            <section>
                <h2>Les derniers articles</h2>
                <div className='articles'>
                    {articles.map((item, index) => <NavLink to={"/article/" + index + "/" + convertToSlug(item.title)}>
                        <Card article={item} />
                    </NavLink>)}
                </div>
            </section>
        </article>
    </div>
  );
}

function convertToSlug(text) {
    return text.toLowerCase()
               .replace(/[^\w ]+/g, '')
               .replace(/ +/g, '-');
}

export default Home;