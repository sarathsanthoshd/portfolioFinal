import React from 'react';
import { motion } from 'framer-motion';
import mypic from '../assets/mypic.png';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // This staggers the animations of the child elements
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  return (
    <motion.section
      id="hero"
      className="hero"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="hero-left">
        <motion.p className="tagline" variants={textVariants}>
          ARTIFICIAL INTELLIGENCE & DATA SCIENCE | WEB DEVELOPER | DSA
        </motion.p>
        <motion.h1 variants={textVariants}>
          Hi, I am <span>Sarath Santhosh</span> <br />I build ML Projects & responsive websites.
        </motion.h1>
        <motion.div className="buttons" variants={containerVariants}>
          <motion.a href="#contact" className="btn primary" variants={textVariants}>
            Hire Me
          </motion.a>
          <motion.a href="/Dokala Sarath Santhosh.pdf" className="btn outline" download variants={textVariants}>
            Download CV
          </motion.a>
        </motion.div>
      </div>
      <div className="hero-right">
        <motion.img
          src={mypic}
          alt="Sarath Santhosh"
          variants={imageVariants}
        />
        <div className="bg-skew"></div>
      </div>
    </motion.section>
  );
};

export default Hero;