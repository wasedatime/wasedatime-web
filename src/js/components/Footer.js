import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { withNamespaces } from "react-i18next";

import LANGS from "../config/langs";

const StyledFooter = styled("footer")`
  display: block;
  text-align: center;
  color: #a9a9a9;
  background-color: #222222;
  font-size: 1.4rem;
  font-weight: 300;
  z-index: 300;
`;

const StyledP = styled("p")`
  margin: 0.5em 0.5em;
`;

const StyledList = styled("ul")`
  padding: 0;
  margin: 0.5em 0;
  list-style: none;
  list-style-type: none;
`;

const StyledListItem = styled("li")`
  display: inline-block;
  margin: 0 0.3em;
`;

const StyledLink = styled("a")`
  text-decoration: none;
  color: #ffffff;
`;

const Footer = ({ finishTime, t, lng }) => {
  return (
    <StyledFooter>
      <StyledP>{finishTime}</StyledP>
      <StyledList>
        <StyledListItem>
          <StyledLink
            href="https://github.com/wasedatime/wasedatime-web"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" transform="shrink-2" />
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink
            href="https://twitter.com/WasedaTime"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" transform="shrink-2" />
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink href="mailto:wasedatime@gmail.com" target="_blank">
            <FontAwesomeIcon icon={faEnvelope} size="2x" transform="shrink-2" />
          </StyledLink>
        </StyledListItem>
      </StyledList>

      {lng === LANGS.JP ? (
        <StyledP>
          <StyledLink
            href="https://github.com/wasedatime/wasedatime-web/graphs/contributors"
            target="_blank"
            rel="noreferrer"
          >
            コントリビュータたち
          </StyledLink>
          <span role="img" aria-label="Love">
            が&nbsp;❤️&nbsp;
          </span>
          を込めて作り上げました。&nbsp;
        </StyledP>
      ) : (
        <StyledP>
          Created with&nbsp;
          <span role="img" aria-label="Love">
            ❤️&nbsp;
          </span>
          by&nbsp;
          <StyledLink
            href="https://github.com/wasedatime/wasedatime-web/graphs/contributors"
            target="_blank"
            rel="noreferrer"
          >
            Our Contributors
          </StyledLink>
        </StyledP>
      )}
      <StyledP>
        <StyledLink href="https://github.com/wasedatime " target="_blank">
          WasedaTime 2020.
        </StyledLink>
        {t("footer.licensed")}
        <StyledLink
          href="https://github.com/wasedatime/wasedatime-web/blob/master/LICENSE.md"
          target="_blank"
          rel="noreferrer"
        >
          MIT
        </StyledLink>
        .{" "}
        <StyledLink href="/privacy-policy" target="_blank" rel="noreferrer">
          Privacy Policy
        </StyledLink>
      </StyledP>
    </StyledFooter>
  );
};

export default withNamespaces("translation")(Footer);

Footer.propTypes = {
  finishTime: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
  lng: PropTypes.string.isRequired,
};
