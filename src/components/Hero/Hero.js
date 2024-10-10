import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="main-section">
        <h2 className="intro-text">Hey, this is Sathvik Chilaka..</h2>
        <h1 className="intro-heading">Software Developer</h1>
        <p className="intro">
          Frontend Web Developer with over a year of experience at Deloitte. 
          <br class="hidden md:block" />
          I'm skilled in ReactJS, Javascript, and NodeJS, and excited about an opportunity to interview.
        </p>
        <div style={ {marginTop: '2rem'}}>
          <button className="action-btn">Hit me up!</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
