import React from "react";
import { ContactData } from "./contactData";
import "./style.scss";
import accountImg from "assets/account.png";
import Bounce from "react-reveal/Bounce";

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="contact-head">
              <a href="/">Contact Us</a>
              <h3>
                We Love To Help Great Companies To Enlarge Their Revenues.
              </h3>
            </div>

            <div className="row ">
              <div className="col-sm-6 col-12">
                {ContactData[0].dataFirst.map((item) => (
                  <div className="form-group" key={item.id}>
                    <div className="group-icon">
                      <i className={item.icon}></i>
                    </div>
                    <div className="group-input">
                      <input type="text" placeholder={item.placeHol}></input>
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-sm-6 col-12">
                {ContactData[0].dataLast.map((itemLast) => (
                  <div className="form-group" key={itemLast.id}>
                    <div className="group-icon">
                      <i className={itemLast.icon}></i>
                    </div>
                    <div className="group-input">
                      <input
                        type="text"
                        placeholder={itemLast.placeHol}
                      ></input>
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-lg-12">
                <div className="message-group">
                  <div className="group-icon">
                    <i className="far fa-envelope"></i>
                  </div>
                  <textarea placeholder="Message"></textarea>
                </div>
                <div className="sub-button">
                  <a href="/" className="submit-btn">
                    <i className="fas fa-chevron-right"></i>Submit Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 ">
            <Bounce right >
              <div className="account-media">
                <img src={accountImg} alt=""></img>
              </div>
            </Bounce>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
