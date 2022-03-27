import guerre from "./guerre.jpg";

const articles = [
    {
        title: "Le fléau des ransomwares",
        theme: 0,
        date: new Date(),
        author: "Sami Hanine",
        img: guerre,
        Text: () => (
            <article>
                <h1>Guerre en Ukraine, quand les cyber-attaques deviennent des armes de guerre </h1>
                <img src={guerre} />
                <b>Alors que le conflit militaire s'intensifie entre l'Ukraine et la Russie, les craintes de cyberattaques entre les deux pays se font également sentir. La sécurité des citoyens ukrainiens ne relève plus seulement du physique, mais également du numérique.  Une guerre numérique dans une guerre géopolitique, c’est ce que les experts aiment appeler une cyberguerre. Pour d’appréhender un tel conflit, il faut d’abord chercher à comprendre ce qu’est concrètement une cyberguerre et qui en sont les acteurs majeurs.</b>
                <h2>La cyberguerre, c’est quoi ?</h2>
                <p>
                La cyberguerre correspond à « l'utilisation d'attaques numériques contre un État ennemi, causant des dommages comparables à ceux d'une guerre réelle et perturbant les systèmes informatiques vitaux. ». Ce nouveau format de guerre associe la force militaire conventionnelle à des opérations non conventionnelles, souvent numériques, comme la propagande politique en ligne et les cyberattaques contre les infrastructures. 
                </p>
                <p>
                "Je ne pense pas qu'il y ait le moindre doute sur le fait que s'il y a une invasion ou un autre type d'incursion en Ukraine, cela commencera par une cyberguerre", a déclaré Angus King, le sénateur indépendant du Maine, au Times en décembre. En d’autres termes, les cyberattaques ne sont pas seulement des armes supplémentaires dans un conflit, il s’agit en réalité de la menace la plus directe et imminente dans les guerres 2.0.
                </p>
                <h2>L’invasion Russe virtuel</h2>
                <p>
                La Russie a en effet déjà effectué plus de 150 cyberattaques visant l’Ukraine depuis le début de son invasion. Ces attaques ont pour objectifs de détruire un maximum de données se trouvant sur le réseau ukrainien, rendant inutilisable en bon nombre d’appareils connectés. 
                </p>
                <p>
                Mais ce n’est que le début, les experts estiment que des attaques bien plus violentes pourrait faire leur apparition au cours des prochains mois. On pense notamment aux « ransomwares » qui visent à geler entièrement des données en échange d’une somme d’argent. Ou encore au « total black-out », un type d’attaque qui s’en prend directement aux réseaux électriques pour plonger une ville dans le noir.
                </p>
                <h2>Un soutien inattendu pour l’Ukraine</h2>
                <p>L’Ukraine n’est pas uniquement en position de victime dans cette cyberguerre, bien au contraire. En effet, le célèbre groupe de hacker « les Anonymous » lui apporte sous soutien dans ce combat aux enjeux cruciaux. Ces derniers ont officiellement déclaré la cyberguerre à la Russie via twitter. Ils auraient déjà mis hors ligne le site Internet de la chaîne de télévision Russia Today, accusée auparavant de censure et de désinformation par les autorités internationales.</p>
            </article>
        )
    },
    {
        title: "Les bons réflexes en étant sur internet",
        tag: [0],
        date: new Date(),
        author: "Sami Hanine",
        Text: () => (
            <article>
                <h1>Guerre en Ukraine, quand les cyber-attaques deviennent des armes de guerre </h1>
                <p>ok</p>
            </article>
        )
    }
]


export default articles;