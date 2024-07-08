import React from 'react';
import './styles.css'; // Arquivo de estilos para o Footer
import tikTokIcon from '../../assets/footer/tiktok.png'
import instagramIcon from '../../assets/footer/instagram.png' 
import youtubeIcon from '../../assets/footer/youtube.png'
import logo from '../../assets/footer/juniorlogo.png'

const Footer: React.FC = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="left">
        <img src={logo} alt="Imagem do Footer" onClick={scrollToTop} style={{cursor: 'pointer'}}/>
      </div>
      <div className="middle">
        <p>Direitos Autorais © 2024 Junior Dalamaria. Todos os direitos reservados.</p>
      </div>
      <div className="right">
        <a href="https://www.instagram.com/mauriciojuniortreinador/"><img src={instagramIcon} alt="" /></a>
        <a href="https://www.tiktok.com/@mauriciojunior_d?lang=pt-BR"><img src={tikTokIcon} alt=""/></a>
        <a href="https://www.youtube.com/@MauricioJuniorDalamaria"><img src={youtubeIcon} alt=""/></a>
      </div>
    </footer>
  );
};

export default Footer;
