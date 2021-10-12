import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      // fade: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
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
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <section className="page-section bg-light" id="photoGallery">
        <div className="container">
          <div className="row">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">Photo Gallery</h2>
              <h3 className="section-subheading text-muted">masterclasses, concerts and performances</h3>
            </div>
            <Slider {...settings}>
              <div>
                <h3>
                  <img
                    className="img-fluid gallery-image"
                    src="../assets/img/gallery/4.jpeg"
                    alt="Masterlclass by Singapore Symphony Orchestra viola principal Zhang Manchin"
                  />
                </h3>
              </div>
              <div>
                <h3>
                  <img
                    className="img-fluid gallery-image"
                    src="../assets/img/gallery/5.jpeg"
                    alt="chamber concert with Zhang Manchin, Wang Zihao"
                  />
                </h3>
              </div> 
              <div>
                <h3>
                  <img
                    className="img-fluid gallery-image"
                    src="../assets/img/gallery/9.jpeg"
                    alt="Mozart Violin Concerto No.3 performed by 8 years old Zhu Keming"
                  />
                </h3>
              </div> 
              <div>
                <h3>
                  <img
                    className="img-fluid gallery-image"
                    src="../assets/img/gallery/7.jpeg"
                    alt="orchestra performance at MRT"
                  />
                </h3>
              </div> 
              <div>
                <h3>
                  <img
                    className="img-fluid gallery-image"
                    src="../assets/img/gallery/8.jpeg"
                    alt="orchestra performance at MRT"
                  />
                </h3>
              </div>
              <div>
                <h3>
                  <img
                    className="img-fluid gallery-image" 
                    src="../assets/img/gallery/10.jpeg"
                    alt="Masterclass by Singapore Symphony Orchestra associate concertmaster Kong Zaho Hui 1"
                  />
                </h3>
              </div>
              <div>
                <h3>
                  <img
                    className="img-fluid"
                    src="../assets/img/gallery/2.jpeg"
                    alt="Masterclass by Singapore Symphony Orchestra associate concertmaster Kong Zaho Hui 2"
                  />
                </h3>
              </div> 

            </Slider>
          </div>
        </div>
      </section>
    );
  }
}
