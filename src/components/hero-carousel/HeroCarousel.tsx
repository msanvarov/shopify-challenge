import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
// @ts-expect-error
import OwlCarousel from 'react-owl-carousel3';
import { Link } from 'react-router-dom';

import './HeroCarousel.scss';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const options = {
  loop: true,
  margin: 0,
  nav: true,
  mouseDrag: false,
  items: 1,
  dots: true,
  autoplay: true,
  smartSpeed: 1500,
  autoplayHoverPause: true,
  navText: [<FontAwesomeIcon icon={faChevronLeft} />, <FontAwesomeIcon icon={faChevronRight} />],
};

const HeroCarousel = () => {
  return (
    <div className="hero-carousel-area">
      <OwlCarousel className="hero-carousel-wrap owl-carousel owl-theme" {...options}>
        <div className="hero-carousel-item bg-1">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="hero-carousel-text one">
                  <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                  <p>Movie Recommendation</p>

                  <div className="slider-btn">
                    <Link to="#" className="default-btn">
                      View More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-carousel-item bg-2">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="hero-carousel-text two">
                  <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                  <p>Movie Recommendation</p>

                  <div className="slider-btn">
                    <Link to="#" className="default-btn">
                      View More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </OwlCarousel>
    </div>
  );
};

export default HeroCarousel;
