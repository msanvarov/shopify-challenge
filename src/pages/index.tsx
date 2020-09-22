import React from 'react';
import { Helmet } from 'react-helmet';

import Bio from 'components/bio/Bio';
import HeroCarousel from 'components/hero-carousel/HeroCarousel';
import MovieRecommendations from 'components/movie-recommendations/MovieRecommendations';
import MovieReleases from 'components/movie-releases/MovieReleases';

const LandingPage = () => (
  <>
    <Helmet title="Home" />

    <HeroCarousel />
    <Bio />
    <MovieReleases />
    <MovieRecommendations />
  </>
);

export default LandingPage;
