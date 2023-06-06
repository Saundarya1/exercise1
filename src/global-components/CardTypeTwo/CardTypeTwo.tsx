import React from "react";
import "./CardTypeTwo.scss";

interface Props {
    cardTypeTwoImg: string;
    cardTypeTwoNumber: string;
}

export const CardTypeTwo: React.FC<Props> = ({ cardTypeTwoImg, cardTypeTwoNumber }) => (

    <div className="card-type-two">
        <div className="card-type-two_number-img"><img src={cardTypeTwoNumber}></img></div>
        <div className="card-type-two_movie-img"><img src={cardTypeTwoImg}></img></div>
    </div>

);