import React from 'react';

import '../styles/home.css';

const Home = () => {
  return (
    <div className="home__wrapper">
      <div className="home__overlay">
        <header className="home__header">
          <img className="home__logo" src="/img/logo.png" />
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
        </header>
      </div>
    </div>
  );
};

export default Home;
