import React from "react";
import "./style.scss";
import aboutImg from "assets/about.png";
import Fade from 'react-reveal/Fade';
const About = () => {

  return (
    <div className="about-section">
      <div className="container">
        <div className="row align-items-center m-3">
          <div className="col-lg-6">
          <Fade left>
            <div className="col-media">
              <img className="" alt="" src={aboutImg}></img>
            </div>
            </Fade> 
          </div>
          <div className="col-lg-6">
          <Fade right>
            <div className="about-content">
              <div className="content-head">
                <a href="/">About Us</a>
                <h2>How We Can Help You Achieve Your Business Goal</h2>
              </div>
              <p className="about-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised
              </p>
              <p className="about-text-last">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen.
              </p>
              <a href="/" className="about-button">
                <i className="fas fa-chevron-right"></i>
                Learn More
              </a>
            </div>
            </Fade>
          </div>
       
        </div>
      </div>
    </div>
  );
};

export default About;
