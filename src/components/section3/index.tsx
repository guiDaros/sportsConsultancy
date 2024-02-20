import React from "react";
import "./styles.css";

import photo1 from "../../assets/bob.png";
import photo2 from "../../assets/cbum.png";
import photo3 from "../../assets/popeye.png";
import photo4 from "../../assets/ratatoulie.png";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Section3: React.FC = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="generalContainerSec3">
      <div className="titleContainerSec3">
        <h2>Evolucao de alguns alunos</h2>
      </div>
      <div className="carrouselDivSec3">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          navigation
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          style={{
            height: "450px",
            margin: "auto", // Para centralizar o contêiner
          }}
          breakpoints={{
            1400: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 1,
              width: 380,
            },
          }}
        >
          <SwiperSlide>
            <img src={photo1} alt="evolution photo" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={photo2} alt="evolution photo" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={photo3} alt="evolution photo" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={photo4} alt="evolution photo" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="buttonContainerSec3">
        <button onClick={scrollToBottom}>Faca parte</button>
      </div>
    </section>
  );
};

export default Section3;
