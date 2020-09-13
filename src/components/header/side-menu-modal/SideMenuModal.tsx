import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootAppState } from 'store';
import * as menuActions from 'store/menu/actions';

import './SideMenuModal.scss';
import LogoPNG from 'assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const SideMenuModal = () => {
  const dispatch = useDispatch();
  const sideMenuModal = useSelector((state: RootAppState) => state.menu.sideMenuModalState);

  // side-menu toggler
  const toggleSideMenuModal = () => {
    dispatch(menuActions.sideMenuModalState());
  };

  return (
    <div className={`sidemenu-modal ${sideMenuModal ? 'active' : ''}`}>
      <div className="sidemenu-modal-inner">
        <div className="sidemenu-header">
          <div className="sidemenu-logo">
            <Link to="/">
              <img src={LogoPNG} alt="logo" />
            </Link>
          </div>

          <span className="close-btn sidemenu-modal-close-btn" onClick={toggleSideMenuModal}>
            <i>
              <FontAwesomeIcon icon={faTimes} />
            </i>
          </span>
        </div>

        <div className="sidemenu-about">
          <div className="title">
            <p>
              This website was create to address the business requirements for the Shopify Web
              Developer challenge that can be found{' '}
              <a href="https://docs.google.com/document/d/1AZO0BZwn1Aogj4f3PDNe1mhq8pKsXZxtrG--EIbP_-w/edit#">
                here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenuModal;
