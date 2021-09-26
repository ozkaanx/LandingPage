import React from "react";
import newslet from "assets/newsletter.png";
import "./stlye.scss";


const Newsletter = () => {
  return (
    <div className="news-section">
      <div className="container" style={{paddingTop : "50px" , paddingBottom :"20px"}}>
        <div className="row align-items-center">
          <div className="col-lg-4 col-md-5">
            <div className="col-media">
              <img src={newslet} alt=""></img>
            </div>
          </div>
          <div className="col-lg-8 col-md-7" >
            <div className="news-head">
              <a  href="/" className="news-title">Newsletter</a>
              <h3>
                Subscribe To Our Newsletter For Latest Update Of Finanical
                Services
              </h3>
              <p>
                Curabitur eleifend nibh sit amet ex posuere, vel malesuada
                turpis pretium. Quisque et tincidunt risus, a tempor massa. Cras
                tempor egestas libero, eu laoreet enim pharetra non.
              </p>
            </div>
            <div className="news-form">
              <div className="form-group">
                <input type="email" placeholder="Email Addres"></input>
                <div className="form-buton">
                  <button>Subscribe Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
