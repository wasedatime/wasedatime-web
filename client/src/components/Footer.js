import React from 'react';
import styled from 'styled-components';

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
  margin: 1.4rem 0;
  list-style: none;
  list-style-type: none;
`;

const StyledLink = styled('a')`
  text-decoration: none;
  color: #ffffff;
`;

const Footer = () => {
  const siteDescription = 'Created with ❤️ by ';
  const licensceDescription = '. Code licensed ';

  return (
    <StyledFooter>
      <StyledList>
        <li>
          <StyledLink href="https://github.com/wasetime/wasetime-web">
            GitHub
          </StyledLink>
        </li>
      </StyledList>
      <p>
        {siteDescription}
        <StyledLink href="https://github.com/OscarWang114">
          Oscar Wang
        </StyledLink>
      </p>
      <p>
        <StyledLink href="https://github.com/wasetime ">
          WaseTime 2017
        </StyledLink>
        {licensceDescription}
        <StyledLink href="https://github.com/wasetime/wasetime-web/blob/master/LICENSE.md">
          MIT
        </StyledLink>.
      </p>
    </StyledFooter>
  );
};

export default Footer;
