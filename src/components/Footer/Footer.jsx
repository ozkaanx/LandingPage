import React from "react";
import "./style.scss";
import FooterLogo from "assets/footerLogo.png";

const Footer = () => {
  return (
    <div className="footer-top">
      <div className="container">
        <div className="footer-info">
          <div className="row">
            <div className="col-lg-6 mb-3">
              <div className="footer-logo">
                <img src={FooterLogo} alt=""></img>
                <span>ReactAppOz</span>
              </div>
            </div>
            <div className="col-lg-3 mb-3 col-sm-6">
              <div className="footer-telephone">
                <div className="tel-icon">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <div className="tel-text">
                  <span>+212 651 00 00 </span>
                  <span>demo@mail.com</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 mb-3 col-sm-6">
              <div className="footer-adress">
                <div className="adress-icon">
                <i className="fas fa-globe"></i>
                </div>
                <div className="adress-text">
                  <span>İstanbul Beşiktaş 00000111 İstanbul </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <div className="footer-about">
              <h5 className="footer-title">About Us</h5>
              <p className="about-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
              <div className="footer-links">
              <h5 className="footer-title">Our Link</h5>
              <ul>
                  <li><a href="/">Home</a> </li>
                  <li><a href="/">Home</a> </li>
                  <li><a href="/">Home</a> </li>
                  <li><a href="/">Home</a> </li>
                  <li><a href="/">Home</a> </li>
              </ul>
              </div>
          </div>
          <div className="col-lg-3 col-sm-6">
          <div className="footer-links">
              <h5 className="footer-title">Our Services</h5>
              <ul>
              <li><a href="/">Home</a> </li>
              <li><a href="/">Home</a> </li>
              <li><a href="/">Home</a> </li>
              <li><a href="/">Home</a> </li>
              <li><a href="/">Home</a> </li>
              </ul>
              </div>

          </div>
          <div className="col-lg-3 col-sm-6">
          <div className="footer-links">
              <h5 className="footer-title">Other Link</h5>
              <ul>
              <li><a href="/">Home</a> </li>
              <li><a href="/">Home</a> </li>
              <li><a href="/">Home</a> </li>
              <li><a href="/">Home</a> </li>
              <li><a href="/">Home</a> </li>
              </ul>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
