import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const StyledFooter = styled('footer')`
  display: block;
  text-align: center;
  color: #a9a9a9;
  background-color: #222222;
  font-size: 1.4rem;
  font-weight: 300;
`;

const StyledList = styled('ul')`
  padding: 0;
  list-style: none;
  list-style-type: none;
`;

const StyledLink = styled('a')`
  text-decoration: none;
  color: #ffffff;
`;

const Footer = ({finishTime}) => {
  return (
    <StyledFooter>
      <p>{finishTime}</p>
      <StyledList>
        <li>
          <StyledLink href="https://github.com/wasetime/wasetime-web">
          <FontAwesomeIcon icon={faGithub} size="2x" transform="shrink-2" />
          </StyledLink>
        </li>
      </StyledList>
      <p>
        Created with&nbsp;
        <span role="img" aria-label="Love">❤️&nbsp;</span>by&nbsp;
        <StyledLink href="https://github.com/wasetime/wasetime-web/graphs/contributors">
          Our Contributors
        </StyledLink>
      </p>
      <p>
        <StyledLink href="https://github.com/wasetime ">
          WaseTime 2018
        </StyledLink>
        . Code licensed&nbsp;
        <StyledLink href="https://github.com/wasetime/wasetime-web/blob/master/LICENSE.md">
          MIT
        </StyledLink>.
      </p>
    </StyledFooter>
  );
};

export default Footer;
