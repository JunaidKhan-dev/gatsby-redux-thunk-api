import React from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import slider1 from "../images/hero-1.jpg"
import slider2 from "../images/hero-2.jpg"
import "../styles/slide.scss"
class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    }
    return (
      <Slider {...settings}>
        <div className="hero-slide">
          <img src={slider1} alt="" />
          <h2>Complex Gatsby App</h2>
        </div>
        <div className="hero-slide">
          <img src={slider2} alt="" />
          <h2>Complex Gatsby App</h2>
        </div>
      </Slider>
    )
  }
}

export default SimpleSlider
