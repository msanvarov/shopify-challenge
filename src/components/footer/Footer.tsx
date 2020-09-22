import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';

import './Footer.scss';
import LogoWhitePNG from 'assets/logo-white.png';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faMailBulk, faMapPin, faPhone } from '@fortawesome/free-solid-svg-icons';

const quickLinks = [
  {
    name: 'Movies',
    to: '/movies',
  },
  { name: 'Nominations', to: '/nominations' },
];

const contact = {
  location: '80 Spadina Ave #400, Toronto, ON M5V 2J4',
  email: 'msalanvarov@gmail.com',
  skype: { link: 'https://join.skype.com/invite/tPGqWW4Gapka', name: 'Sal Anvarov' },
  phone: '647-680-5579',
};

type FormData = {
  email: string;
};

const validation = yup.object().shape({
  email: yup.string().email().required(),
});

const Footer: React.FC = () => {
  const { register, setValue, handleSubmit, errors } = useForm<FormData>({
    resolver: yupResolver(validation),
  });
  const onSubmit = handleSubmit(({ email }) => {
    toast(email);
  });

  useEffect(() => {
    if (errors.email) {
      toast(errors.email?.message);
    }
  }, [errors.email]);

  return (
    <>
      <footer className="footer-top-area pt-100 pb-70">
        <Container>
          <Row>
            <Col lg={3} md={6}>
              <div className="single-widget">
                <div className="logo">
                  <Link to="/">
                    <img src={LogoWhitePNG} alt="logo" />
                  </Link>
                </div>

                <div className="newsletter-wrap">
                  <h3>Movies Newsletter</h3>
                  <form className="newsletter-form" onSubmit={onSubmit}>
                    <input
                      type="email"
                      ref={register}
                      className="form-control"
                      placeholder="Enter email address"
                      name="email"
                      onChange={(event) => setValue('email', event.target.value)}
                      //   required
                    />

                    <button className="send-btn" type="submit">
                      <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                  </form>
                </div>
              </div>
            </Col>

            <div className="col-lg-3 col-md-6">
              <div className="single-widget">
                <h3>Contact</h3>

                <ul className="address">
                  <li>
                    <i>
                      <FontAwesomeIcon icon={faMapPin} />
                    </i>
                    {contact.location}
                  </li>
                  <li>
                    <i>
                      <FontAwesomeIcon icon={faMailBulk} />
                    </i>
                    <a href={`mailto:${contact.email}`}>{contact.email}</a>
                    <a href={contact.skype.link}>Skype: {contact.skype.name}</a>
                  </li>
                  <li>
                    <i>
                      <FontAwesomeIcon icon={faPhone} />
                    </i>
                    <a href={`tel:${contact.phone}`}>{contact.phone}</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-widget">
                <h3>Quick Links</h3>

                <ul className="quick-link">
                  {quickLinks.map(({ to, name }, i) => (
                    <li key={i}>
                      <Link {...{ to }}>{name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Row>
        </Container>
      </footer>

      <footer className="footer-bottom-area">
        <Container>
          <div className="copyright-wrap">
            <p>
              Made with{' '}
              <span role="img" aria-label="heart" aria-labelledby="heart">
                💙
              </span>{' '}
              and a lot of{' '}
              <span role="img" aria-label="coffee" aria-labelledby="coffee">
                ☕
              </span>{' '}
              by Sal Anvarov
            </p>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
