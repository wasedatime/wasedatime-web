import React, { useState, useEffect } from "react";

import {
  faGithub,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

import LinkOutsideRouter from "@app/utils/link-outside-router";

type LinksWrapperProps = {
  expanded: boolean;
};

const LinksWrapper = styled.div<LinksWrapperProps>`
  ${(props) => (props.expanded ? "width: 210px;" : "width: 100%;")}
  height: 120px;
  overflow-x: hidden;
  padding: 0px;
  margin-bottom: 0.1vh;
  font-size: 12px;
  text-align: center;
  a {
    font-size: 12px;
  }
  opacity: ${(props) => (props.expanded ? "1" : "0")};
  transition: ${(props) =>
    props.expanded ? "opacity 0.4s ease 0.2s" : "opacity 0.2s, width 0.2s"};

  // Solve 'OtherInfo covering Nav' problem in iphone X wide mode
  ${(window.innerWidth < 400 || window.innerHeight < 450) &&
  "line-height: 4vh;"}
`;

const SnsLink = styled("a")`
  margin: 0px 5px;
`;

interface Props {
  expanded: boolean;
  setCurrentPath: (path: string) => void;
}

const OtherLinks = ({ expanded, setCurrentPath }: Props) => {
  const { t } = useTranslation();
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    function handleResize() {
      setWindowHeight(window.innerHeight);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowHeight >= 480 ? (
    <LinksWrapper
      expanded={expanded}
      className="text-light-text2 dark:text-dark-text2"
    >
      <LinkOutsideRouter
        to="/aboutus"
        customOnClick={() => setCurrentPath("/aboutus")}
      >
        {t("navigation.aboutus")}
      </LinkOutsideRouter>
      <br />
      <LinkOutsideRouter
        to="/terms-of-service"
        customOnClick={() => setCurrentPath("/terms-of-service")}
      >
        {t("user.Terms of Service")}
      </LinkOutsideRouter>
      ・
      <LinkOutsideRouter
        to="/privacy-policy"
        customOnClick={() => setCurrentPath("/privacy-policy")}
      >
        {t("user.Privacy Policy")}
      </LinkOutsideRouter>
      <br />
      <a
        href="https://github.com/wasedatime/wasedatime-web/blob/master/LICENSE.md"
        target="_blank"
        rel="noopener noreferrer"
        className="text-light-text2 dark:text-dark-text2 hover:text-light-main dark:hover:text-dark-text1"
      >
        Code Licensed MIT
      </a>
      <br />
      <SnsLink
        href="https://github.com/wasedatime"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub link"
        className="text-light-text2 dark:text-dark-text2 hover:text-light-main dark:hover:text-dark-text1"
      >
        <FontAwesomeIcon icon={faGithub} size="2x" transform="shrink-2" />
      </SnsLink>
      <SnsLink
        href="https://twitter.com/WasedaTime"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter link"
        className="text-light-text2 dark:text-dark-text2 hover:text-light-main dark:hover:text-dark-text1"
      >
        <FontAwesomeIcon icon={faTwitter} size="2x" transform="shrink-2" />
      </SnsLink>
      <SnsLink
        href="https://www.facebook.com/wasedatime"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook link"
        className="text-light-text2 dark:text-dark-text2 hover:text-light-main dark:hover:text-dark-text1"
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" transform="shrink-2" />
      </SnsLink>
      <SnsLink
        href="https://www.instagram.com/wasedatime/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram link"
        className="text-light-text2 dark:text-dark-text2 hover:text-light-main dark:hover:text-dark-text1"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" transform="shrink-2" />
      </SnsLink>
      <br />
      Copyright © 2018-2021 WasedaTime
    </LinksWrapper>
  ) : (
    <div />
  );
};

export default OtherLinks;
