// src/components/Footer.tsx
import React from 'react';
import './styles.css'; // Arquivo de estilos para o Footer
import tikTokIcon from '../../assets/footer/tiktok.png'
import instagramIcon from '../../assets/footer/instagram.png' 
import logo from '../../assets/footer/logo.png'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="left">
        <img src={logo} alt="Imagem do Footer" />
      </div>
      <div className="middle">
        <p>Direitos Autorais © 2024 Junior Dalamaria. Todos os direitos reservados.</p>
        {/* Mais conteúdo do meio do footer */}
      </div>
      <div className="right">
        <a href="link-do-instagram"><img src={instagramIcon} alt="" /></a>
        <a href="link-do-tiktok"><img src={tikTokIcon} alt=""/></a>
      </div>
    </footer>
  );
};

export default Footer;
