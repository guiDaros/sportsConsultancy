// src/components/Section1.tsx
import React from 'react';
import './styles.css'
import profileImg from "../../assets/new-photos/juju.jpg"

const Section1: React.FC = () => {

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className='generalContainer'>
      <div className='leftContainer'>
        <h2 className='title'>NÃO É SÓ ESFORÇO, <span>MAS SIM ESFORÇO INTELIGENTE</span></h2>
        <p className='description'>Resolvo suas dores através da Biomecânica</p>
        <button onClick={scrollToBottom}>Faca parte</button>
      </div>
      <div className='imageSec1'><img src={profileImg} alt="" /></div>
    </section>
  );
};

export default Section1;
