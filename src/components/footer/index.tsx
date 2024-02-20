import React from 'react';
import './styles.css'; // Arquivo de estilos para o Footer
import tikTokIcon from '../../assets/footer/tiktok.png'
import instagramIcon from '../../assets/footer/instagram.png' 
import logo from '../../assets/footer/logo.png'

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
        {/* Adicionando onClick para rolar até o topo */}
        <img src={logo} alt="Imagem do Footer" onClick={scrollToTop} style={{cursor: 'pointer'}}/>
      </div>
      <div className="middle">
        <p>Direitos Autorais © 2024 Junior Dalamaria. Todos os direitos reservados.</p>
      </div>
      <div className="right">
        <a href="link-do-instagram"><img src={instagramIcon} alt="" /></a>
        <a href="link-do-tiktok"><img src={tikTokIcon} alt=""/></a>
      </div>
    </footer>
  );
};

export default Footer;
