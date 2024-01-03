// src/components/Section5.tsx
import React from 'react';
import './styles.css';
import noteImageSec5 from '../../assets/note.png'

const Section5: React.FC = () => {
  return (
    <section className="section5">
      <img src={noteImageSec5} alt="Imagem 5" />
      {/* <h1 className='containerTextSec5'>Atendimento Via Whatsapp! 📱</h1> */}
    </section>
  );
};

export default Section5;
