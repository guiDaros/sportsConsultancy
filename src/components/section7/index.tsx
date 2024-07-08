// src/components/Section7.tsx
import React from 'react';
import './styles.css';

const Section7: React.FC = () => {
  return (
    <section className='masterContainer'>
      <h2 className='secSevenTitle'>Conheça os nossos planos</h2>
      {/* <h3 className='secSevenDescription'>Escolha o que <span>voce preferir</span></h3> */}
      <div className="plansContainer">

        <div className="centerPlan">
          <p className="planDescription">Faça parte do time <span> você também </span></p>
          
          <button onClick={() => window.location.href='https://wa.me/5554996252215'} className="centerPlanBtn">Entre em Contato</button>     
        </div>
        </div>
      
    </section>
  );
};

export default Section7;
