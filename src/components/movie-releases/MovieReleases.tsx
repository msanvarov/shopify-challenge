import React from 'react';
// @ts-expect-error
import OwlCarousel from 'react-owl-carousel3';
// @ts-expect-error
import ModalVideo from 'react-modal-video';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

import './MovieReleases.scss';

const options = {
  loop: true,
  margin: 30,
  nav: false,
  mouseDrag: true,
  dots: true,
  autoplay: true,
  smartSpeed: 1500,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 2,
    },
    768: {
      items: 2,
    },
    992: {
      items: 2,
    },
    1200: {
      items: 2,
    },
  },
};

const MovieReleases = () => {
  // Popup Video
  const [isOpen, setIsOpen] = React.useState(true);
  const openModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="latest-trailer ptb-100">
        <Container>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="latest-trailer-content">
                <span>Latest Trailers</span>
                <h2>New Releases</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sem nulla, bibendum
                  sed lacus ac, dapibus vulputate turpis. Nam metus lectus, volutpat in mauris non,
                  tristique efficitur metus.
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <OwlCarousel className="latest-trailer-wrap owl-carousel owl-theme" {...options}>
                <div className="latest-trailer-item">
                  <img src="https://via.placeholder.com/285x400" alt="movie-releases" />

                  <div className="caption">
                    <div className="d-table">
                      <div className="d-table-cell">
                        <Link
                          to="#play-video"
                          onClick={(e) => {
                            e.preventDefault();
                            openModal();
                          }}
                          className="play-video popup-youtube"
                        >
                          <FontAwesomeIcon icon={faPlay} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="latest-trailer-item">
                  <img src="https://via.placeholder.com/285x400" alt="movie-releases" />

                  <div className="caption">
                    <div className="d-table">
                      <div className="d-table-cell">
                        <Link
                          to="#play-video"
                          onClick={(e) => {
                            e.preventDefault();
                            openModal();
                          }}
                          className="play-video popup-youtube"
                        >
                          <FontAwesomeIcon icon={faPlay} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="latest-trailer-item">
                  <img src="https://via.placeholder.com/285x400" alt="movie-releases" />

                  <div className="caption">
                    <div className="d-table">
                      <div className="d-table-cell">
                        <Link
                          to="#play-video"
                          onClick={(e) => {
                            e.preventDefault();
                            openModal();
                          }}
                          className="play-video popup-youtube"
                        >
                          <FontAwesomeIcon icon={faPlay} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="latest-trailer-item">
                  <img src="https://via.placeholder.com/285x400" alt="movie-releases" />

                  <div className="caption">
                    <div className="d-table">
                      <div className="d-table-cell">
                        <Link
                          to="#play-video"
                          onClick={(e) => {
                            e.preventDefault();
                            openModal();
                          }}
                          className="play-video popup-youtube"
                        >
                          <FontAwesomeIcon icon={faPlay} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="latest-trailer-item">
                  <img src="https://via.placeholder.com/285x400" alt="movie-releases" />

                  <div className="caption">
                    <div className="d-table">
                      <div className="d-table-cell">
                        <Link
                          to="#play-video"
                          onClick={(e) => {
                            e.preventDefault();
                            openModal();
                          }}
                          className="play-video popup-youtube"
                        >
                          <FontAwesomeIcon icon={faPlay} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="latest-trailer-item">
                  <img src="https://via.placeholder.com/285x400" alt="movie-releases" />

                  <div className="caption">
                    <div className="d-table">
                      <div className="d-table-cell">
                        <Link
                          to="#play-video"
                          onClick={(e) => {
                            e.preventDefault();
                            openModal();
                          }}
                          className="play-video popup-youtube"
                        >
                          <FontAwesomeIcon icon={faPlay} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </Container>
      </div>

      {/* If you want to change the video need to update videoID */}
      <ModalVideo
        channel="youtube"
        isOpen={!isOpen}
        videoId="bk7McNUjWgw"
        onClose={() => setIsOpen(!isOpen)}
      />
    </>
  );
};

export default MovieReleases;
