import React from "react";
import "./styles.css";

import photo1 from "../../assets/new-photos/imgs-results/img2.png";
import photo2 from "../../assets/new-photos/imgs-results/be.png";
import photo3 from "../../assets/new-photos/imgs-results/eve.png";
import photo4 from "../../assets/new-photos/imgs-results/eu.png";
import photo5 from "../../assets/new-photos/imgs-results/guizão.png";
import photo6 from "../../assets/new-photos/imgs-results/hiago.png";
import photo7 from "../../assets/new-photos/imgs-results/Kaiki.png";
import photo8 from "../../assets/new-photos/imgs-results/eve2.png"
import photo9 from "../../assets/new-photos/imgs-results/lontra.png"
import photo10 from "../../assets/new-photos/imgs-results/mana.png"
import photo11 from "../../assets/new-photos/imgs-results/pai.png"
import photo12 from "../../assets/new-photos/imgs-results/ruga.png";
import { useEffect, useState } from "react";

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

  const [slidePerView, setSlidePerView] = useState(2);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 720) {
        setSlidePerView(1);
      } else {
        setSlidePerView(4);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="generalContainerSec3">
      <div className="titleContainerSec3">
        <h2>Evolucao de alguns alunos</h2>
      </div>
      <div className="carrouselDivSec3">
        <Swiper className="carroussels"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={slidePerView}
          navigation
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          style={{
            height: "450px",
            width: "100vw",
            //left: "100px",
          }}
        >
          <SwiperSlide >
            <img src={photo1} style={{width:"450px"}} className="swiperImgSec3" alt="evolution photo" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={photo2} style={{width:"450px"}} className="swiperImgSec3" alt="evolution photo" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={photo3} style={{width:"450px"}} className="swiperImgSec3" alt="evolution photo" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={photo4} style={{width:"450px"}} className="swiperImgSec3" alt="evolution photo" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={photo5} style={{width:"450px"}} className="swiperImgSec3" alt="evolution photo" />
          </SwiperSlide>
          <SwiperSlide >
            <img src={photo6} style={{width:"450px"}} className="swiperImgSec3" alt="evolution photo" />
          </SwiperSlide>
          <SwiperSlide >
            <img src={photo7} style={{width:"450px"}} className="swiperImgSec3" alt="evolution photo" />
          </SwiperSlide>
          <SwiperSlide >
            <img src={photo8} style={{width:"450px"}} className="swiperImgSec3" alt="evolution photo" />
          </SwiperSlide>
          <SwiperSlide >
            <img src={photo9} style={{width:"450px"}} className="swiperImgSec3" alt="evolution photo" />
          </SwiperSlide>
          <SwiperSlide >
            <img src={photo10} style={{width:"450px"}} className="swiperImgSec3" alt="evolution photo" />
          </SwiperSlide>
          <SwiperSlide >
            <img src={photo11} style={{width:"450px"}} className="swiperImgSec3" alt="evolution photo" />
          </SwiperSlide>
          <SwiperSlide >
            <img src={photo12} style={{width:"450px"}} className="swiperImgSec3" alt="evolution photo" />
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
