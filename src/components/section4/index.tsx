// src/components/Section4.tsx
import React from 'react';
import './styles.css'; // Arquivo de estilos para a Section4

const Section4: React.FC = () => {
  return (
    <section className="section4">
      <title>Beneficios da Consultoria</title>
      <div className="container">
        <div>
          <div className="content">
            <h2>CORREÇÃO POSTURAL</h2>
            <span>Avaliação e correção de padrões posturais alterados</span>
          </div>
        </div>
        <div>
          <div className="content">
            <h2>TREINAMENTO ESPECÍFICO E PERIODIZADO</h2>
            <span>Planejamento dividido em Macro, Meso e Microciclo de treino visando as especificidades de cada indivíduo </span>
          </div>
        </div>
        <div>
          <div className="content">
            <h2>REABILITAÇÃO DE LESÕES </h2>
            <span>Prescrição, reabilitação e correção de movimentos que causam dores </span>
          </div>
        </div>
        <div>
          <div className="content">
            <h2>CONSULTORIA PARA PROFISSIONAIS DA ÁREA</h2>
            <span>Solução de dúvidas e auxílio na prescrição de treinamento correta para cada caso específico </span>
          </div>
        </div>
        <div>
          <div className="content">
            <h2>AVALIAÇÃO FÍSICA</h2>
            <span>Adipometria, Perimetria, testes físicos, dinamometria, estado nutricional e parâmetros como IMC e RCQ</span>
          </div>
        </div>
        <div>
          <div className="content">
            <h2>ATENDIMENTO PRESENCIAL</h2>
            <span>Atendimento personalizado, oferece orientação individualizada e adaptada para suas necessidades e objetivos específicos</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;


