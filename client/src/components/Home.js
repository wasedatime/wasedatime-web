import React from 'react';

import '../styles/home.css';
import logo from '../img/logo.png';

const Home = () => {
  return (
    <div className="home__wrapper">
      <div className="home__overlay">
        <header className="home__header">
          <div className="home__logo_wrapper">
            <img className="home__logo" src={logo} />
          </div>
          <div className="home__title__description__wrapper">
            <h1 className="home__title">WaseTime</h1>
            <p className="home__decription">
              An unonfficial app for{' '}
              <span className="home__description__highlight">
                syllabus searching
              </span>,{' '}
              <span className="home__description__highlight">
                classroom finding
              </span>, and{' '}
              <span className="home__description__highlight">
                bus schedule checking
              </span>{' '}
              at Waseda University.
            </p>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Home;
