import React from "react";
import "./CardTypeOne.scss";

interface Props {
    cardTypeOneImg: string;
}

export const CardTypeOne: React.FC<Props> = ({ cardTypeOneImg }) => (

    <div className="card-type-one">
        <img src={cardTypeOneImg}></img>
    </div>

);