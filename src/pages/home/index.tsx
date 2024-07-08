import React from 'react';
import Section1 from '../../components/section1';
import Section2 from '../../components/section2';
import Section3 from '../../components/section3';
import Section4 from '../../components/section4';
import Section5 from '../../components/section5';
import Section7 from '../../components/section7';
import Footer from '../../components/footer';

const Home: React.FC = () => {
  return (
    <div className='mainContainer'>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section7 />
      <footer><Footer/></footer>
    </div> 
  );
};

export default Home;
