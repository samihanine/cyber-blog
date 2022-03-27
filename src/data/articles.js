import guerre from "./guerre.jpg";
import stress from "./stress.png";
import white from "./white.jpg";
import proteger from "./proteger.png";
import learn from "./learn.png";

const articles = [
    {
        title: "Guerre en Ukraine, quand les cyber-attaques deviennent des armes de guerre",
        tag: 0,
        date: new Date(),
        author: "Sami Hanine",
        img: guerre,
        Text: () => (
            <div>
                <h1>Guerre en Ukraine, quand les cyber-attaques deviennent des armes de guerre </h1>
                <img src={guerre} alt="soldat hacker" />
                <em>Le secteur de la sécurité informatique serait-il plus menacé par le stress professionnel ?</em>
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
            </div>
        )
    },
    {
        title: "Les hackers éthiques, qui sont-ils ?",
        tag: 3,
        date: new Date(),
        author: "Joris Garcia",
        img: white,
        Text: () => (
            <div>
                <h1>Les hackers éthiques, qui sont-ils ?</h1>
                <img src={white} alt="white hat" />
                <em>Qui se cache derrière ce terme.</em>
                <b>Avec l’explosion de la  production de données, assurer leur sécurité devient alors une priorité pour les entreprises entrainant ainsi l’émergence du terme d’hacker éthique. 
                Nous allons vous expliquer en quoi consiste ce métier, les formations disponibles et s’il s’agit d’un métier d’avenir en France. </b>
                <h2>Qu’est-ce que c’est ? Ses missions ? Ses objectifs ?</h2>
                <p>
                Le terme d’hacker éthique devient de plus en plus à la mode mais en quoi consiste ce métier.
                </p>
                <p>
                Un hacker éthique ou également appelé white hat est une personne qui réalise des activités d’hacking sans intentions malveillantes. Il peut réaliser des activités telles que le piratage, l’exploitation de failles ou le contournement de limitations. L’objectif de ses attaques est d’analyser la structure du système informatique pour ainsi détecter des failles et les corriger. C’est pourquoi il a pour mission de réaliser des tests d’intrusion afin de trouver des failles dans les systèmes informatiques des entreprises. Permettant ainsi aux entreprises d’améliorer la protection de leurs informations. La rémunération d’un hacker éthique est comprise entre 4.000 pour un débutant et peut aller jusqu’à 7.500 euros bruts mensuels. Elle peut également varier en fonction de la taille de l’entreprise qui l’emploie et de l’expérience du hacker. Ils peuvent être aussi rémunérés sous forme de récompenses en trouvant des failles sur des plateformes de bug bounty.
                </p>
                <h2>Les formations en France </h2>
                <p>
                En France, de nombreuses écoles ont mis en place des formations dans la cybersécurité pour répondre à la demande des entreprises.
                </p>
                <p>
                On peut trouver des écoles d’ingénieurs qui proposent des bachelors comme <a target="_blank" rel="noopener noreferrer" href="https://www.epita.fr/nos-formations/bachelor-cybersecurite/?utm_source=Futura&utm_medium=Affiliation&utm_campaign=fiche_metier_hacker_ethique&utm_content=encart_saviez-vous&xtor=AL-935">Epita</a> ou ESGI . Il existe aussi des licences professionnelles CDAISI (Cyber-défense, anti-intrusion des systèmes d'information) proposé par l’IUT de Valenciennes. Mais aussi des certifications qui sont reconnues en France comme l’OCSP (Offensive Security Certified Professional) et la CEH (Certified Ethical Hacker). Pour plus d’informations, consultez notre article : « Des formations innovantes pour faire face à un marché sous tension ».
                </p>
                <h2>Le marché de l’emploi en France</h2>
                <p>En France la demande de hacker éthique est en hausse, mais quelles entreprises recrutent  et quelles compétences sont attendues.</p>
                <p>De nombreuses entreprises cherchent à recruter des hackers éthiques telles que des grands groupes comme entreprise YES WE HACK, Orange Cyberdéfense, Enedis, mais aussi des start-up. Les entreprises sont aussi intéressées par les freelances. Le hacker éthique doit avoir de nombreuses connaissances en sécurité informatique, mais aussi en droit. Le profil recherché est une personne curieuse, il doit se tenir informé des nouvelles techniques et technologies d’intrusion. Il doit aussi être dynamique, car plus une faille reste disponible, plus les risques encourus par l’entreprise sont importants. Il doit bien entendu être discret et ne pas dévoiler des informations confidentielles. Ils sont parfois confrontés à des utilisateurs, c’est pourquoi de la pédagogie est vivement recommandée pour pouvoir se mettre à leur place.</p>
                <p>
                La protection des données devient un enjeu de plus en plus important pour les entreprises en France. Ce qui conduit à une forte demande de la part des entreprises. Mais qu’en est-il pour l’Europe et le monde.  
                </p>
            </div>
        )
    },
    {
        title: "Cybersécurité et stress au travail : qu’en pensent les experts ?",
        tag: 2,
        date: new Date(),
        author: "Lilian Andres",
        img: stress,
        Text: () => (
            <div>
                <h1>Cybersécurité et stress au travail : qu’en pensent les experts ?</h1>
                <img alt="stress" src={stress} />
                <em>Le secteur de la sécurité informatique serait-il plus menacé par le stress professionnel ?</em>
                <b> 
                De plus en plus d’experts de la cybersécurité déclarent travailler plus de quarante heures par semaine. Les nouveaux enjeux de la sécurité informatique mettent en lumière des professions éprouvantes, parfois dangereuses. Les conséquences sur la santé mentale sont quelques fois sous-estimées. Comprendre, expliquer et anticiper ces phénomènes peut vous aider à analyser ces situations et à y faire face. Les experts ont décortiqué ce sujet.
                </b>
                <h2>De lourdes conséquences sur la santé</h2>
                <p>
                Selon un <a target="_blank" rel="noopener noreferrer" href="https://media.nominetcyber.com/wp-content/uploads/2020/02/Nominet_The-CISO-Stress-Report_2020_V10.pdf">rapport</a> publié en 2020 par le groupe anglophone Nominet, 91% des salariés concernés se déclarent stressés, et la moitié d’entre eux très stressés. Le stress bouleverse évidemment leurs capacités de travail mais il peut également être accompagné d’autres symptômes. Les médecins citent notamment la perte d’appétit, les troubles du sommeil, de l’appétit et de la digestion, les maux de tête, les douleurs articulaires… Les entreprises ont également leur part de responsabilité. Le manque de moyens pour faire face à une menace grandissante ou encore le sentiment lié à l’urgence de chaque mission peuvent aussi favoriser l’apparition de ces symptômes, comme le confirme Christine Pekar, spécialiste des risques psycho-sociaux.
                </p>
                <h2>D’où pourrait venir ce phénomène ? </h2>
                <p>
                Une étude de l’université de Stanford aurait montré que 88 % des incidents de violation de données étaient dus à une erreur humaine. Les enjeux sont extrêmement élevés et ne font qu’aggraver l’état psychologique des salariés. Le niveau de stress augmente, la fatigue aussi et la charge cognitive est jugée par la grande majorité comme étant bien trop lourde. La productivité de plusieurs d’entre eux est fortement impactée et le repérage de failles et de vulnérabilités critiques devient plus complexe. 
                </p>
                <h2>Les conseils des experts</h2>
                <p>Face à cette menace pesante, les spécialistes sonnent l’alarme. Il devient urgent de réagir. Voici quelques conseils.</p>
                <h3>#1 - Consulter un professionnel de santé</h3>
                <p>Des professionnels de la santé sont présents dans bon nombre d’entreprises, il ne faut surtout pas hésiter à les consulter et à se faire suivre psychologiquement. Les bénéfices de ces thérapies sont énormes.</p>
                <h3>#2 - Apprendre à s’arrêter</h3>
                <p>Reconnectez-vous à vous-même, dites stop et mettez votre cerveau en pause. Prenez du temps pour vous et aérez votre esprit.</p>
                <h3>#3 - Communiquer</h3>
                <p>La communication est toujours la clé de la réussite. Faites le point avec votre responsable hiérarchique, définissez des plannings réalistes et prioriser les tâches. </p>
                <h3>#4 - La règle des 42%</h3>
                <p>Selon l’ouvrage Burn Out: The Secret to Solving the Stress Cycle (Burn-out : le secret de la résolution du stress), 42% serait le pourcentage de repos dont vous auriez besoin pour éviter le burn-out. Vous pourrez par exemple en profiter pour faire du sport, regarder une série ou encore prendre soin de vous.</p>
                <p>A l’ère du Big Data (ère de la donnée massive), les enjeux de la sécurité numérique sont trop nombreux. Il devient alors vital pour la santé des salariés de réagir rapidement. Les entreprises doivent en prendre conscience et certaines d'entre elles se disent prêtes à changer leur mode de fonctionnement. </p>
                <p>Est-ce vraiment le cas, et comment peuvent-elles y parvenir ?</p>
            </div>
        )
    },
    {
        title: "Les meilleures formations pour apprendre le hacking",
        tag: 4,
        date: new Date(),
        author: "Booba Jarrasso-Escoffier",
        img: learn,
        Text: () => (
            <div>
                <h1>Les meilleures formations pour apprendre le hacking</h1>
                <img alt="formation" src={learn} />
                <em>Le secteur de la sécurité informatique serait-il plus menacé par le stress professionnel ?</em>
                <b>Nous avons tous déjà vu dans nos films et séries préférées un protagoniste réussissant à pirater des systèmes de sécurité redoutables. Sur le coup, cela à du vous paraître insurmontable. En réalité, vous êtes-vous déjà questionné sur vos capacités. N’y aurait-t-il pas une façon intuitive d’apprendre le hacking ? Par ou devriez-vous commencer. Quels sites visiter ou bien quels livres acheter. Nous vous donnons les meilleures pistes pour débuter. </b>
                <h2>Prérequis avant de débuter</h2>
                <p>
                Ce court paragraphe introductif n’a pas pour but de vous décourager mais surtout d’éviter de vous faire perdre du temps. En effet il est inutile de vous lancer dans cette quête si vous ne remplissez pas tous les critères :
                </p>
                <ul>
                    <li>Bases solides dans un langage de programmation quelconque. </li>
                    <li>Connaître le fonctionnement d’un système réseau et les principaux protocoles (TCP/IP OSI).</li>
                    <li>Enfin disposer de matériel adapté, c’est-à-dire ne pas avoir un ordinateur trop vieux car vous risquez d’être limité.</li>
                </ul>
                <p>
                Maintenant que vous avez validé tous les points. Nous pouvons revenir au vif du sujet. Vous allez recevoir les meilleures pister pour apprendre à déjouer vos premiers systèmes de sécurité. 
                </p>
                <h2>Les meilleurs sites web pédagogiques </h2>
                <p>
                Cybary est une formation gratuite lancée en 2015. Cette formation vous propose une grande panoplie d’outils éducatifs. Cela va des leçons gratuites, des articles sur les derniers développements du domaine etc. De plus, ce site offre une plateforme d’échange entre les entreprises du secteur, un vrai boost pour votre carrière !
                </p>
                <p>
                Deuxièmement nous avons le site Hacking Tutorial. Bien que l’ergonomie de ce site aurait besoin d’un rafraîchissement, il se démarque notamment grâce à ses nombreux exercices. Il vous apprendra l’utilisation de divers outils permettant de porter atteinte à la sécurité de nombreux sites.
                </p>
                <p>
                Hackingloops est une encyclopédie du piratage informatique. Ce site regroupe environ 830 articles portant sur les failles de sécurité, les tests d’intrusion ce qui fera de vous un expert en percée éthique.
                </p>
                <h2>Apprendre à déjouer la sécurité sur papier </h2>
                <p>Si vous préférez vous former à l’aide d’un support papier, voici 2 livres qui devraient répondre à vos attentes </p>
                <p>Les bases du hacking de Patrick Engebretson est un livre destiné aux débutants. Il consiste en une introduction aux méthodes de hacking notamment aux tests d’intrusion. Il vous apprendra à maitriser toutes les prérequis et vous donnera les meilleures stratégies, pour que vous puissiez vous immiscer dans un système informatique.</p>
                <p>Les techniques de hacking de Jon Erickson est cette fois plus complet et s’adresse à un public plus expérimenté. Si vous souhaitez comprendre dans le détail comment se créent les failles de sécurité et comment les exploiter, alors ce livre est fait pour vous.</p>
            </div>
        )
    },
    {
        title: "Les bons réflexes en étant sur internet",
        tag: 1,
        date: new Date(),
        author: "Booba Jarrasso-Escoffier",
        img: proteger,
        Text: () => (
            <div>
                <h1>Les meilleures formations pour apprendre le hacking</h1>
                <img alt="formation" src={proteger} />
                <em>Les informations confidentielles qu'il faut protéger !</em>
                <b>
                    Dans le monde entier, la sécurité des internautes est de plus en plus mise à rude épreuve à cause des hackeurs. Actuellement, les données ont une place d’une extrême importance. C’est pourquoi certaines personnes essayent de voler des données pour les revendre au prix fort ! Découvrez avec nous les meilleurs pratiques en étant sur internet
                </b>
                <h2>Les mots de passes</h2>
                <p>
                Les mots de passe sont souvent un calvaire. Voici les différents critères demandés dans les cas généraux.
                </p>
                <ul>
                    <li>Avoir au moins 8 caractères.</li>
                    <li>Avoir une majuscule.</li>
                    <li>Avoir une minuscule.</li>
                    <li>Avoir un chiffre.</li>
                    <li>Avoir un caractère spécial.</li>
                    <li>Avoir des mots de passe différents pour chaque site web.</li>
                </ul>
                <p>
                La tâche n’est pas simple et peu de personne y arrive… Il existe plusieurs solutions pour facilement y parvenir et protéger ses comptes. La méthode ancestrale, noter tous ses mots de passe dans un carnet, mais attention à l’oubli. L’autre solution est un gestionnaire de mot de passe. Il suffit de se souvenir d’un seul mot de passe et le gestionnaire s’occupe du reste. Nous vous conseillons Dashlane, pour plus d'informations rendez-vous <a target="_blank" rel="noopener noreferrer">ici</a>.
                </p>
                <h2>Les meilleurs sites web pédagogiques </h2>
                <p>
                Cybary est une formation gratuite lancée en 2015. Cette formation vous propose une grande panoplie d’outils éducatifs. Cela va des leçons gratuites, des articles sur les derniers développements du domaine etc. De plus, ce site offre une plateforme d’échange entre les entreprises du secteur, un vrai boost pour votre carrière !
                </p>
                <p>
                Deuxièmement nous avons le site Hacking Tutorial. Bien que l’ergonomie de ce site aurait besoin d’un rafraîchissement, il se démarque notamment grâce à ses nombreux exercices. Il vous apprendra l’utilisation de divers outils permettant de porter atteinte à la sécurité de nombreux sites.
                </p>
                <p>
                Hackingloops est une encyclopédie du piratage informatique. Ce site regroupe environ 830 articles portant sur les failles de sécurité, les tests d’intrusion ce qui fera de vous un expert en percée éthique.
                </p>
                <h2>Apprendre à déjouer la sécurité sur papier </h2>
                <p>Si vous préférez vous former à l’aide d’un support papier, voici 2 livres qui devraient répondre à vos attentes </p>
                <p>Les bases du hacking de Patrick Engebretson est un livre destiné aux débutants. Il consiste en une introduction aux méthodes de hacking notamment aux tests d’intrusion. Il vous apprendra à maitriser toutes les prérequis et vous donnera les meilleures stratégies, pour que vous puissiez vous immiscer dans un système informatique.</p>
                <p>Les techniques de hacking de Jon Erickson est cette fois plus complet et s’adresse à un public plus expérimenté. Si vous souhaitez comprendre dans le détail comment se créent les failles de sécurité et comment les exploiter, alors ce livre est fait pour vous.</p>
            </div>
        )
    }
]


export default articles;