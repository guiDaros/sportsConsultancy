// src/components/Section2.tsx
import React from "react";
import "./styles.css";

import img1 from "../../assets/new-photos/11.jpg";
import img2 from "../../assets/new-photos/13.jpg";


const Section2: React.FC = () => {
  return (
    <section className="generalContainerSec2">
      <div className="leftContainer">
        <h2 className="title">
          Quem é <span>Maurício Júnior</span>
        </h2>
        <p className="description">
          Entusiasta da Educação Física, Pós Graduando em: Biomecânica e
          Reabilitação Musculoesquelética; Correção Postural e Reabilitação de
          Lesões.
        </p>
      </div>
      <div className="imageSec2">
        <div className="insideContainerSec2">
          <img className="image1" src={img1} alt="" />
          <img className="image2" src={img2} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Section2;
