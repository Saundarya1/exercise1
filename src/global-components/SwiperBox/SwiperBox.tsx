import React from "react";
import './SwiperBox.scss';
import "@fontsource/space-grotesk";

interface Props {
    movieSection: string;
    swiper: React.ReactNode;
    additional: string;

}

export const SwiperBox: React.FC<Props> = ({ movieSection, swiper, additional}) => (

    <div className="swiper-box">
        <div className="swiper-box_top-section">
            <div className="swiper-box_movie-section"><p>{movieSection}</p></div>
            <div className="swiper-box_link"><a href="#">{additional}</a></div>
        </div>
        {swiper}
    </div>



);