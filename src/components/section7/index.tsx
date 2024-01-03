// src/components/Section7.tsx
import React from 'react';
import './styles.css';

const Section7: React.FC = () => {
  return (
    <section className='masterContainer'>
      <h2 className='secSevenTitle'>Conheça nossos planos</h2>
      <h3 className='secSevenDescription'>Escolha o que <span>voce preferir</span></h3>
      <div className="plansContainer">
        <div className="plan">
          <h3 className="planTitle">Correcao postural</h3>
          <p className="planDescription">Plano mensal</p>
          <p className="planPrice">$9.99/mês</p>
          <button>Assinar</button>
          <p className="planNote">Correcao postural e enretamento colunar</p>
        </div>
        <div className="centerPlan">
          <h3 className="planTitle">Treino</h3>
          <p className="planDescription">Plano mensal</p>
          <p className="planPrice">$29.99/mês</p>
          <button className='centerPlanBtn'>Assinar</button>
          <p className="planNote">Correcao postural + Treino Periodizado e carculadissimo</p>
        </div>
        <div className="plan">
          <h3 className="planTitle">Treino</h3>
          <p className="planDescription">Plano mensal</p>
          <p className="planPrice">$19.99/mês</p>
          <button>Assinar</button>
          <p className="planNote">Prescricao de Treino, Periodizado e Calculadissomo.</p>
        </div>
      </div>
    </section>
  );
};

export default Section7;
