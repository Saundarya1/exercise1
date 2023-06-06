import React from "react";
import '../../../node_modules/swiper/swiper.scss';
import '../../../node_modules/swiper/swiper-element-bundle.css';
import "./SwiperTypeTwo.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import { CardTypeTwo } from "../CardTypeTwo/CardTypeTwo";


type Props = {
    cardTypeTwoImgs: string[];
    cardTypeTwoNumbers: string[];
}


export const SwiperTypeTwo: React.FC<Props> = ({ cardTypeTwoImgs, cardTypeTwoNumbers }) => (

    <div className="swiper-type-two">

        <Swiper
            modules={[Navigation]}
            breakpoints={{
                280: {
                    slidesPerView: 1,
                    spaceBetween: 10
                },
                330: {
                    slidesPerView: 1,
                    spaceBetween: -134
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 156,
                },
                1200: {
                    slidesPerView: 5,
                    spaceBetween: 220,
                }
            }}
            slidesPerView={4}
            loop={false}
            onSlideChange={() => { console.log('slide chage') }}
            onSwiper={swiper => console.log(swiper)}
            navigation={true}

        >

            {cardTypeTwoImgs.map((image, index) => (

                <SwiperSlide key={index}>

                    <a href="#"><CardTypeTwo
                        cardTypeTwoImg={image}
                        cardTypeTwoNumber={cardTypeTwoNumbers[index]} /></a>

                </SwiperSlide>

            ))}
        </Swiper>

    </div>

);