import React from "react";
import "./PlayInfoBtns.scss";
import playBtnIcon from "@/assets/images/playBtnIcon.png";
import infoBtnIcon from "@/assets/images/infoBtnIcon.png";
import "@fontsource/space-grotesk";

export const PlayInfoBtns: React.FC = () => {

    const handleClick = () => {
        window.location.href = "#";
    }

    return (
        <div className="play-info-btns">

            <button className="play-info-btns_play-btn" onClick={handleClick}><img src={playBtnIcon}></img>Odtwórz</button>

            <button className="play-info-btns_info-btn" onClick={handleClick}><img src={infoBtnIcon}></img>Więcej informacji</button>

        </div>

    );
};