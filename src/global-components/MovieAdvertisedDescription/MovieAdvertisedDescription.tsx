import React from "react";
import "./MovieAdvertisedDescription.scss";
import { PlayInfoBtns } from "@/global-components";
import Top10Icon from "@/assets/images/top10Icon.jpg";
import "@fontsource/space-grotesk";

interface Props {
    movieTitle: string;
    topSerialNumber: number;
    description: string;
}

export const MovieAdvertisedDescription: React.FC<Props> = ({ movieTitle, topSerialNumber, description }) => (

    
        <div className="movie-advertised-description">
            <div className="movie-advertised-description_top-ten">
                <img src={Top10Icon}></img>
                <div> <p>Nr {topSerialNumber} wśród seriali dzisiaj</p> </div>
            </div>

            <div className="movie-advertised-description_movie-title"><img src={movieTitle}></img></div>
            <p>{description}</p>
            <div className="movie-advertised-description_description-buttons">
                <PlayInfoBtns/>
            </div>
        </div>
        
    

);