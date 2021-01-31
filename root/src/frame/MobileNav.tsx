import React from "react";
import PropTypes from "prop-types";
import { Link } from "@reach/router";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { media } from "@bit/wasedatime.core.ts.utils.responsive-utils";

const StyledNav = styled("nav")`
  display: flex;
  flex-direction: row;
  max-width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
`;

const StyledLink = styled(Link)`
  padding: 0.2em 0.3em 0 0.3em !important;
  ${media.tablet`padding: 0.2em 0.1em 0 0.1em !important;`}
  text-align: center;
  text-decoration: none;
  font-size: 1.1em;
  font-weight: 330;
  ${media.tablet`font-size: 0.8em;`};
`;

const StyledButton = styled("button")`
  width: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
  background-color: inherit;
  color: ${(props) =>
    props.isClicked ? props.theme.colorPrimary : props.theme.white};
  &:hover {
    color: ${(props) => props.theme.colorPrimary};
  }
`;

const StyledSpan = styled("span")`
  font-size: 0.8em;
  font-weight: 100;
  color: #fff;
`;

type Props = {
  navItems: any;
};

const MobileNav = ({ navItems }: Props) => {
  const styledLinks = navItems.map((item) => {
    const itemName = item["name"];
    const itemPath = item["path"];
    const itemIcon = item["icon"];
    const fontBase = (
      <FontAwesomeIcon icon={itemIcon} size="3x" transform="shrink-3" />
    );
    return (
      <StyledLink to={itemPath} key={itemPath}>
        <StyledButton>
          {fontBase}
          <StyledSpan>{itemName}</StyledSpan>
        </StyledButton>
      </StyledLink>
    );
  });

  return <StyledNav>{styledLinks}</StyledNav>;
};

export default MobileNav;

MobileNav.propTypes = {
  location: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired,
};

StyledButton.propTypes = {
  isClicked: PropTypes.bool.isRequired,
};
