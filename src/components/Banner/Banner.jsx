import  React  from "react";
import "./style.scss";
import banner from "assets/banner.png";
import Jump from 'react-reveal/Jump';

const Homebanner = () => {
  return (
    <div className="banner-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 mb-3 wow slideInLeft">
            <div className="banner-content">
              <h6 className="first-title">work with us</h6>
              <h1 className="last-title">
                we only work for new <span>current and creative</span> ideas
              </h1>
              <p className="content-pr">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </p>
              <a href="/" className="content-button">
                <i className="fas fa-chevron-right"></i>
                Learn More
              </a>
            </div>
          </div>
          <div className="col-md-6">
          <Jump >
            <div className="content-img">
              <img src={banner} alt="" />
            </div>
            </Jump>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homebanner;
