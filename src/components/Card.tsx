import type { FC } from "react";
import "../sheet/cards.css"

export interface CardProps {
    name: string,
    description: string[],
    link?: string
}

export const Card: FC<CardProps> = ({name, description, link}) => {
    const desc = description.map((elem, i) => {
        return <h5 key={`${name}-desc-${i}`} className="card-desc">{elem}</h5>
    });

    const lien = link === undefined ? null : <a href={link}>Aller voir</a>;

    return (
        <div className="card-container">
            <h3 className="card-title">{name}</h3>
            <div className="card-desc-container">
                {desc}
            </div>
            {lien}
        </div>
    );
}
