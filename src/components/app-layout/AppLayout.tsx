import React from 'react';
import { ToastContainer, Slide } from 'react-toastify';
import { Helmet } from 'react-helmet';

import './AppLayout.scss';
import { helmet } from 'utils/helmet';
import Header from 'components/header/Header';
import ToTop from 'components/to-top/ToTop';
import Footer from 'components/footer/Footer';

const AppLayout: React.FC = ({ children }) => {
  return (
    <>
      <Helmet {...helmet} />
      <Header />

      {children}

      <ToTop scrollStepInPx={100} delayInMs={10.5} />
      <ToastContainer transition={Slide} />
      <Footer />
    </>
  );
};

export default AppLayout;
