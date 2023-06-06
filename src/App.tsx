import React from 'react';
import { MovieAdvertisedDescription } from '@/global-components';
import { Navbar } from '@/global-components';
import { SwiperBox } from "@/global-components";
import { SwiperTypeOne } from '@/global-components';
import { SwiperTypeTwo } from '@/global-components';
import MainMovieTitle from "@/assets/images/mainMovieTitle.png";
import { cardTypeOneImgs } from './cardTypeOneImgs';
import { cardTypeTwoImgs } from './cardTypeTwoImgs';
import { cardTypeTwoNumbers } from './cardTypeTwoNumbers';


const App: React.FC = () => (
  <>

    <div className="backgroundImage">
    </div>

    <Navbar />

    <MovieAdvertisedDescription
      movieTitle={MainMovieTitle}
      topSerialNumber={5}
      description="Makabrycznie bystra i sarkastyczna Wednesday Addams prowadzi śledztwo w sprawie serii zabójstw, przysparzając sobie nowych przyjaciół i wrogów w Akademii Nevermore."
    />


    <div className="swiper-box-first">
      <SwiperBox
        movieSection='Docenione przez krytyków'
        swiper={<SwiperTypeOne
          cardTypeOneImgs={cardTypeOneImgs}
        />}
        additional='Zobacz wszystkie'
      />
    </div>

    <div className="swiper-box-second">
      <SwiperBox
        movieSection='Popularne teraz'
        swiper={<SwiperTypeOne
          cardTypeOneImgs={cardTypeOneImgs}
        />}
        additional='Zobacz wszystkie'
      />
    </div>

    <div className="swiper-box-third">
      <SwiperBox
        movieSection='Obejrzyj ponownie'
        swiper={<SwiperTypeOne
          cardTypeOneImgs={cardTypeOneImgs}
        />}
        additional='Zobacz wszystkie'
      />
    </div>

    <div className="swiper-box-fourth">
      <SwiperBox
        movieSection='Top 10 seriali w Polsce dzisiaj'
        swiper={<SwiperTypeTwo
          cardTypeTwoNumbers={cardTypeTwoNumbers}
          cardTypeTwoImgs={cardTypeTwoImgs}
        />}
        additional=''
      />
    </div>

    <div className="swiper-box-fifth">
      <SwiperBox
        movieSection='Top 10 seriali w Polsce dzisiaj'
        swiper={<SwiperTypeTwo
          cardTypeTwoNumbers={cardTypeTwoNumbers}
          cardTypeTwoImgs={cardTypeTwoImgs}
        />}
        additional=''
      />
    </div>


  </>
);

export default App;