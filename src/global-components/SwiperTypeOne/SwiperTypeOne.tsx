import React from "react";
import '../../../node_modules/swiper/swiper.scss';
import "./SwiperTypeOne.scss";
import "../../../node_modules/swiper/swiper-element-bundle.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import { CardTypeOne } from "../CardTypeOne/CardTypeOne";


type Props = {
    cardTypeOneImgs: string[];
}


export const SwiperTypeOne: React.FC<Props> = ({ cardTypeOneImgs }) => (

    <div className="swiper-type-one" style={{ width: '100%' }}>

        <Swiper
            modules={[Navigation]}
            spaceBetween={-70}
            breakpoints={{
                280: {
                    slidesPerView: 1,
                    spaceBetween: -30
                },
                330: {
                    slidesPerView: 1,
                    spaceBetween: -120
                },
                400: {
                    slidesPerView: 1,
                    spaceBetween: -150
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1200: {
                    slidesPerView: 5,
                    spaceBetween: 200,
                },
                1600: {
                    slidesPerView: 5,
                    spaceBetween: '-12%'
                },
                1800: {
                    slidesPerView: 5,
                    spaceBetween: '-25%'
                }
            }}
            centeredSlides={true}
            loop={true}
            onSlideChange={() => console.log('slide chage')}
            onSwiper={swiper => console.log(swiper)}
            navigation={true}

        >

            {cardTypeOneImgs.map((image, index) => (

                <SwiperSlide key={index}>

                    <a href="#"> <CardTypeOne
                        cardTypeOneImg={image}
                    /> </a>

                </SwiperSlide>
            ))}



        </Swiper>
    </div>

);