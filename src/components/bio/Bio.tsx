import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Bio.scss';

const Bio = () => {
  return (
    <div className="bio-area ptb-100">
      <Container>
        <div className="bio-content-wrap">
          <div className="row">
            <div className="col-lg-8">
              <div className="bio-content">
                <span>The Shoppies Bio</span>
                <h2>Nominate and Manage Movies</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sem nulla, bibendum
                  sed lacus ac, dapibus vulputate turpis. Nam metus lectus, volutpat in mauris non,
                  tristique efficitur metus.
                </p>

                <Link to="/bio" className="default-btn">
                  Learn More
                </Link>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="bio-img">
                <img src="https://via.placeholder.com/810x522" alt="bio" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Bio;
