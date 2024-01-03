// src/components/Section6.tsx
import React from 'react';
import './styles.css'
import pflPicture from '../../assets/pflPicture.png'

const Section6: React.FC = () => {
  const content = [
    {
      image: pflPicture,
      title: 'Gabriel Antunes',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet magnam, perferendis blanditiis neque deserunt ipsum numquam praesentium aperiam ex quis minus sequi non, voluptates reiciendis nihil? Optio dignissimos expedita laborum!',
    },
    {
      image: pflPicture,
      title: 'Gustavo Alves',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet magnam, perferendis blanditiis neque deserunt ipsum numquam praesentium aperiam ex quis minus sequi non, voluptates reiciendis nihil? Optio dignissimos expedita laborum!',
    },
    {
      image: pflPicture,
      title: 'Junior Dalamaria',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet magnam, perferendis blanditiis neque deserunt ipsum numquam praesentium aperiam ex quis minus sequi non, voluptates reiciendis nihil? Optio dignissimos expedita laborum!',
    },
    {
      image: pflPicture,
      title: 'Guilherme Daros',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet magnam, perferendis blanditiis neque deserunt ipsum numquam praesentium aperiam ex quis minus sequi non, voluptates reiciendis nihil? Optio dignissimos expedita laborum!',
    },
  ];

  return (
    <section className="grid-container">
      {content.map((item, index) => (
        <div className="grid-item" key={index}>
          <div className='gridFstLine'>
            <img src={item.image} alt={`Imagem ${index}`} />
            <h3>{item.title}</h3>
          </div>
          <p>{item.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Section6;