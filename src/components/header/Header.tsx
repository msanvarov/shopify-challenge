import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faAward } from '@fortawesome/free-solid-svg-icons';
import * as menuActions from 'store/menu/actions';

import './Header.scss';
import LogoMDPNG from 'assets/logo-md.png';
import { RootAppState } from 'store';
import SideMenuModal from './side-menu-modal/SideMenuModal';

const Header = () => {
  const dispatch = useDispatch();
  // const movies = useSelector((state) => state.nominatedMovies);
  const collapsed = useSelector((state: RootAppState) => state.menu.collapsedState);

  const toggleNavbar = () => {
    dispatch(menuActions.collapsedState());
  };

  useEffect(() => {
    const elementId = document.getElementById('navbar');
    document.addEventListener('scroll', () => {
      if (window.scrollY > 170) {
        elementId?.classList.add('is-sticky');
      } else {
        elementId?.classList.remove('is-sticky');
      }
    });
    window.scrollTo(0, 0);
  });

  // side-menu toggler
  const toggleSideMenuModal = () => {
    dispatch(menuActions.sideMenuModalState());
  };

  const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
  const classTwo = collapsed
    ? 'navbar-toggler navbar-toggler-right collapsed'
    : 'navbar-toggler navbar-toggler-right';

  return (
    <header>
      <div id="navbar" className="navbar-area">
        <div className="main-nav">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg">
              <NavLink to="/" onClick={toggleNavbar} className="navbar-brand">
                <img src={LogoMDPNG} alt="logo" />
              </NavLink>
              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <FontAwesomeIcon icon={faEllipsisV} />
              </button>
              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav m-auto">
                  <li className="nav-item">
                    <NavLink
                      to="/"
                      onClick={toggleNavbar}
                      className="nav-link"
                      activeClassName="active"
                    >
                      Landing
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/movies"
                      onClick={toggleNavbar}
                      className="nav-link"
                      activeClassName="active"
                    >
                      Find Movies
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/nominations"
                      onClick={toggleNavbar}
                      className="nav-link"
                      activeClassName="active"
                    >
                      Nominations
                    </NavLink>
                  </li>
                </ul>
                <div className="others-option">
                  <div className="cart-icon">
                    <NavLink to="/nominations">
                      <FontAwesomeIcon icon={faAward} size="lg" />
                      <span>{0}</span>
                    </NavLink>
                  </div>

                  <div className="menu-icon">
                    <a
                      className="burger-menu"
                      href="/"
                      onClick={(e) => {
                        e.preventDefault();
                        toggleSideMenuModal();
                      }}
                    >
                      <FontAwesomeIcon icon={faEllipsisV} size="lg" />
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <SideMenuModal />
    </header>
  );
};

export default Header;
