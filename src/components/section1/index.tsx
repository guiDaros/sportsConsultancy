// src/components/Section1.tsx
import React from 'react';
import './styles.css'

const Section1: React.FC = () => {
  return (
    <section className='generalContainer'>
      <div className='leftContainer'>
        <h2 className='title'>Conquiste o fisico que tanto sonhou!</h2>
        <p className='description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam delectus aut hic, perferendis mollitia accusantium deserunt inventore commodi quasi ducimus, nam in quaerat odio vel ab nesciunt? Similique, alias minima!</p>
        <button>Faca parte</button>
      </div>
      <div className='imageSec1'></div>
    </section>
  );
};

export default Section1;
