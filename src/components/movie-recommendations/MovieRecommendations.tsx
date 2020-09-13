import React from 'react';
import { Link } from 'react-router-dom';

import './MovieRecommendations.scss';

const products = [
  {
    id: '5f05ab914875b805d9f87b09',
    title: 'Deep Sea',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 59.1,
    img: 'https://via.placeholder.com/285x400',
    type: 'thriller',
  },
  {
    id: '5f0cc6063ab06e21b560184b',
    title: 'The Gdudg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 49.2,
    img: 'https://via.placeholder.com/285x400',
    type: 'drugs',
  },
  {
    id: '5f0df3a63ab06e21b560184c',
    title: 'Summer Love',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 39.3,
    img: 'https://via.placeholder.com/285x400',
    type: 'war',
  },
  {
    id: '5f0e24bb4c722b06d3de91e9',
    title: 'Tattoo Life',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 55.1,
    img: 'https://via.placeholder.com/285x400',
    type: 'thriller',
  },
];

const MovieRecommendations = () => {
  return (
    <div className="exclusive-hop-area ptb-100">
      <div className="container">
        <div className="section-title white-title">
          <span>Movie Recommendations</span>
          <h2>Nominate Popular Movies!</h2>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="exclusive-img">
              <img src="https://via.placeholder.com/450" alt="movie cover" />

              <div className="exclusive-img-2">
                <img src="https://via.placeholder.com/400" alt="rotating movie disk" />
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="exclusive-video-list">
              {products.map((product) => (
                <div className="row" key={product.id}>
                  <div className="col-lg-3">
                    <div className="exclusive-list-img">
                      <Link to={`/product/${product.id}`}>
                        <img src={product.img} alt="movie suggestions" />
                      </Link>
                    </div>
                  </div>

                  <div className="col-lg-9">
                    <div className="exclusive-text">
                      <h3>
                        <Link to={`/product/${product.id}`}>{product.title}</Link>
                      </h3>
                      <span>
                        <del>${product.price}</del> ${product.price - 2}
                      </span>
                      <ul>
                        <li>Director: Peter Spider</li>
                        <li>Release: 01-01-2018</li>
                      </ul>

                      {/* <AddToCart {...product} /> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieRecommendations;
