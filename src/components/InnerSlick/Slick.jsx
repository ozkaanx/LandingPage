import React, { Component } from "react";
import Slider from "react-slick";

import { logoData } from "./logodata";
import "./style.scss";
export default class Responsive extends Component {
  render() {
    var settings = {
      infinite: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 2000,
      slidesToShow: 6,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div className="container slick-container">
        <Slider {...settings}>
          {logoData.map((item) => (
            <div className="item" key={item.id}>
              <div className="item-logo">
                <img src={item.link} alt="" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
