import React from 'react';
import mypic from '../assets/mypic.png';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-left">
        <p className="tagline">ARTIFICIAL INTELLIGENCE & DATA SCIENCE | WEB DEVELOPER | DSA</p>
        <h1>Hi, I am <span>Sarath Santhosh</span> <br/>I build ML Projets & responsive websites.</h1>
        <div className="buttons">
          <a href="#contact" className="btn primary">Hire Me</a>
          <a href="/Dokala Sarath Santhosh.pdf" className="btn outline" download>Download CV</a>
        </div>
      </div>
      <div className="hero-right">
        <img src={mypic} alt="Sarath Santhosh" />
        <div className="bg-skew"></div>
      </div>
    </section>
  );
};

export default Hero;