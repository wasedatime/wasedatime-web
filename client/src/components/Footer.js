import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer__list">
        <li>
          <a
            className="footer__link"
            href="https://github.com/wasetime/wasetime-web"
          >
            GitHub
          </a>
        </li>
      </ul>
      <p className="footer__description">
        Created with ❤️ by&nbsp;
        <a className="footer__author" href="https://github.com/OscarWang114">
          Oscar Wang
        </a>
      </p>
      <p className="footer__description">
        <a className="footer_organization" href="https://github.com/wasetime ">
          Wasetime
        </a>{' '}
        2017. Code licensed&nbsp;
        <a
          className="footer__license"
          href="https://github.com/wasetime/wasetime-web/blob/master/LICENSE.md"
        >
          MIT
        </a>.
      </p>
    </footer>
  );
};

export default Footer;
