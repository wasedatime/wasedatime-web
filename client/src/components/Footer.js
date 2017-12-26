import React from 'react';

const Footer = () => {
  //TODO emoji should be wrapped with img tag
  const siteDescription = 'Created with ❤️ by ';
  const licensceDescription = '. Code licensed ';
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
        {siteDescription}
        <a className="footer__author" href="https://github.com/OscarWang114">
          Oscar Wang
        </a>
      </p>
      <p className="footer__description">
        <a className="footer_organization" href="https://github.com/wasetime ">
          WaseTime 2017
        </a>
        {licensceDescription}
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
