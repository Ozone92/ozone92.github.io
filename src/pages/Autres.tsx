import type { JSX } from "react";
import { type CardProps, Card } from "../components/Card";
import "../sheet/pages.css"

function Autres() {
    const cards: JSX.Element[] = autresItems.map((card, index) => {
        return <Card key={`Card${index}`} name={card.name} description={card.description} link={card.link}/>;
    })

    return (
        <>
        <h2>AUTRES</h2>

        <div className="cards-container">
            {cards}
        </div>
        </>
    );
}

const autresItems: CardProps[] = [
    {
        name: "GitHub",
        description: ["Ma page GitHub sur laquelle ce trouve plusieurs de mes projets personels que j'ai pu réaliser."],
        link: "https://github.com/Ozone92"
    },
    {
        name:"Itch.io",
        description: ["Mon Itch.io sur lequel je poste mes jeux fait sous Unity."],
        link: "https://ozone92.itch.io"
    },
    {
        name: "Scratch",
        description: ["Ma page Scratch où j'ai réalisé mes premiers projets de jeux."],
        link:"https://scratch.mit.edu/users/ozone92/"
    }
]

export default Autres;
