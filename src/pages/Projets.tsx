import { Card, type CardProps } from "../components/Card";
import "../sheet/pages.css"

function Projet() {
    const cards = projetsProps.map((card, index) => {
        return <Card key={`Card${index}`} name={card.name} description={card.description} link={card.link}/>;
    });

    return (
        <>
        <h2>PROJETS</h2>

        <div className="cards-container">
            {cards}
        </div>
        </>
    );
}

const projetsProps: CardProps[] = [
    {
        name: "Simple Clicker",
        description: [
            "Commencé le 26 juin 2025",
            "Un jeu de type clicker très basique où le but est d'accumuler le plus de pièce possible.",
            "Ce projet est mon premier projet de jeu par navigateur.",
            "Je l'ai réalisé avec l'API Phaser3 qui est simple d'utilisation et intuitive." 
        ],
        link: "../Simple Clicker/index.html"
    },
    {
        name: "Projet universitaire: Ping",
        description: [
            "Du 10 juin 2025 au 26 juillet 2025",
            "Projet en groupe de 5 dans lequel nous devions réaliser un service Web de gestion de stock.",
            "L'objectif était de nous apprendre de renforcer nos capacitées en développement Back et Front ainsi que d'apprendre à faire la liaison entre les deux.",
            "Le Front a été réalisé en ReactJS et le Back en Java avec Quarkus, Hibernate et Jakarta."
        ]
    },
    {
        name: "GitHub page",
        description: [
            "Commencé le 8 juin 2025",
            "Développement de ce site Web afin de regrouper toutes les informations me concernant.",
            "Fait avec ReactJS et publié sur GitHub Page."
        ]
    },
    {
        name: "Projet universitaire: ERO1",
        description: [
            "Du 12 mai 2025 au 7 juin 2025",
            "Projet en groupe de 5 de recherche opérationnel où nous devions déterminer la meilleur façon de déneiger Montréal avec divers contrainte.",
            "Nous avons pu voir les grands principes de la recherche opérationnel ainsi que divers algorithme sur les graphs.",
            "Le projet a été réalisé en Python avec les bibliothèques networkx, tkinter et geopy, et également les données disponible sur le site de la ville de Montréal."
        ]
    },
    {
        name: "Projet universitaire: Tiger",
        description: [
            "Du 8 mars 2025 au 26 avril 2025",
            "Projet en groupe de 4 où nous devions compléter une base de code pour réaliser un compilateur de Tiger jusq'à l'HIR.",
            "Nous avons fait un lexer avec ReFlex, un parser avec Bison, puis, en C++, le binder, type checker, desugar, et la conversion vers l'HIR de LLVM pour pouvoir finir la compilation avec clang."
        ]
    },
    {
        name: "Kingdoms",
        description: [
            "Du 19 février 2025 au 6 mars 2025",
            "Développement d'un backend pour un jeu de stratégies multijoueur.",
            "Utilisation de Java avec les APIs Quarkus, Hibernate et Jakarta."
        ]
    },
    {
        name: "Projet universitaire JWS",
        description: [
            "Du 10 février 2025 au 15 février 2025",
            "Création en une semaine d'un backend pour un service Web en Java avec Quarkus, Jarkarta et Hibernate."
        ]
    },
    {
        name: "Projet universitaire: 42SH",
        description: [
            "Du 6 janvier 2025 au 1 février 2025",
            "Création d'un petit Shell Posix en C en groupe de 4.",
            "Réalisation de module pour parser, lexer, créer et éxécuter un AST entièrement en C sans recours à des bibliothèques externes."
        ]
    },
    {
        name: "Nuagy",
        description: [
            "Du 21 décembre 2024 au 31 décembre 2024",
            "Jeu en réalité augmenté développé en une dizaine de jour où vous devez prendre soin de votre Nuagy.",
            "Inspiré des Tamagochi et autres jeux du genre mais avec la touche AR en plus."
        ],
        link: "https://ozone92.itch.io/nuagy"
    },
    {
        name: "Projet universitaire: PPEX",
        description: [
            "Du 2 novembre 2024 au 30 novembre 2024",
            "Trois projets de développement d'application en C, deux solo et un duo.",
            "Premier projet (solo): Réaliser une application permettant de calculer des expressions mathématiques basiques avec gestion des prioritées et des parenthèses en notation RPN ou classique.",
            "Second projet (solo): Re-coder notre propre système d'allocation dynamique de la mémoire (malloc, calloc, realloc et free).",
            "Troisième projet (duo): Coder le protocole BitTorrent à partir d'une base de code fournie et de la documentation officielle."
        ]
    },
    {
        name: "Projet universitaire: Pixel Pursuit",
        description: [
            "Du 9 mars 2024 au 22 avril 2024",
            "Développement d'un jeu mobile en groupe de 4",
            "Le jeu est du genre arcade où le joueur à pour objectif de retouver une forme particulière dans une grille avec un temps limité.",
            "Réalisé en Java et en XML avec le logiciel Android Studio."
        ]
    },
    {
        name: "Genetics Apocalypse",
        description: [
            "Du 1 mars 2024 au 3 mars 2024",
            "Participation à la WonderJam UQAC Hiver 2024",
            "Jeu fait en solo sous Unity avec pour thème génétique et comme sous-thème: \"Un point pour moi\", \"Progression exponentielle\" et \"Check mon char\".",
            "Le jeu est un Rogue-Lite avec une génération de carte procédurale où l'objectif est de récupérer des bouts de métaux sur la carte pour réparer l'hélicoptère pour s'enfuir tout en survivant aux zombies qui vous attaquent.",
            "Le jeu à eu une mention honorable du fait qu'il a été développé en solo (il n'y aucune preuve de cela, la mention à seulment été dite à l'oral durant la remise des prix.)"
        ],
        link: "https://ozone92.itch.io/genetics-apocalypse"
    },
    {
        name: "Projet universitaire: Résolveur de sudoku",
        description: [
            "D'octobre 2023 à décembre 2023",
            "Projet en C en groupe de 4",
            "Développement d'un logicel avec une interface graphique où l'obejctif est que l'utilisateur donne une image d'une grille de sudoku en entrée et le programme renvoie la grille résolue.",
            "Des recherches en réseau de neuronne et en traitement d'image basique ont été nécessaire pour mener à bien ce projet."
        ]
    },
    {
        name: "Projet universitaire: Jean Tombe",
        description: [
            "Du 8 mars 2023 au 30 mai 2023",
            "Projet de création de jeu en groupe de 5",
            "Inspiré par \"Fall Guys\", le principe du jeu est d'enchainer trois parcours en arrivant dans les premières places pour être qualifié pour le suivant.",
            "Possibilité de jouer en multijoueur local à 2 en clavier partiagé.",
            "Premier projet de jeu sur un moteur professionel, utilisation de Nav Mesh pour l'IA.",
            "Création d'un site dédié au jeu"
        ],
        link: "../Jean-Tombe/index.html"
    },
    {
        name: "Infinite Dungeon",
        description: [
            "Sortie le 22 février 2021",
            "Jeu Rogue-Lite inspiré par \"The Binding of Isaac\" où l'objectif est d'arriver à la fin du donjon généré aléatoirement en récupérant des objets pour améliorer son personnage.",
            "Créé en environ une semaine."
        ],
        link: "https://scratch.mit.edu/projects/489743664/"
    },
    {
        name: "Les Aventures de Boully",
        description: [
            "Sortie le 11 septembre 2020",
            "Zelda Like réalisé sous Scratch.",
            "Développement étendu sur plusieurs années avec des pauses, 1-2 mois de développement en cumulé.",
            "Mon projet terminé le plus ambitieux encore à ce jour."
        ],
        link: "https://scratch.mit.edu/projects/200460253/"
    },
    {
        name: "Conquest",
        description: [
            "Sortie le 12 juillet 2017",
            "Premier jeu publié.",
            "Jeu de société stratégique où l'objectif est de détruire ces adversaires en choisant bien ses actions."
        ],
        link: "https://scratch.mit.edu/projects/165491877/"
    }
];

export default Projet
