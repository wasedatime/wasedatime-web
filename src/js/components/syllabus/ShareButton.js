import React from "react";
import styled from "styled-components";
import MediaQuery from "react-responsive";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareAlt, faLink } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faTwitterSquare,
  faLinkedin,
  faLine,
  faWhatsappSquare,
  //faWeixin,
  //faFacebookMessenger,
} from "@fortawesome/free-brands-svg-icons";
import { Manager, Reference, Popper } from "react-popper";
import { InvisibleButton } from "../../styled-components/Button";
//import { element } from "prop-types";

//Propper Style -----
const PopperBox = styled("div")`
  display: box;
  border-radius: 5px;
  padding: 0.4em;
  text-align: center;
  z-index: 1050;
`;

//ShareButton Style -----
const ShareButtonBarWrapper = styled("div")`
  flex: 1 0 30%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 0.9em;
`;

const ShareButtonBar = styled("InvisibleButton")`
  display: block;
  background-color: #aaa;
  border: 0px;
  border-radius: 5px;
  color: #554a53;
  padding: 5px 1rem;
  margin-bottom: 4px;
  text-align: center;
  text-decoration: none;

  &:hover {
    color: #eee;
  }
  &:focus {
    outline: none;
  }
`; // Case of large Screen

const ShareButtonIcon = styled("InvisibleButton")`
  display: block;
  background-color: #fff;
  border-left: 0px;
  color: #7d7a7c;
  text-decoration: none;

  &:focus {
    outline: none;
  }
`; // Case of Small Screen

const ShareButton = ({
  // passed from components/syllebus/ShareButton.js
  display,
  shareLink,
  sizesDesktop, // = Small or Large Screen
  isInCourseEvalsPage,
  // logic in containers/syllebus/FetchedShareButton.js
  isPopperOpen,
  handleToggleSharePopper,
  //isWindowResize,
  //handleWindowResize,
}) => {
  const shareButtonBar = ( // Share Button Function for large page
    <MediaQuery minWidth={sizesDesktop}>
      {(matches) => {
        if (matches && isInCourseEvalsPage && display === "bar") {
          return (
            <Reference>
              {({ ref }) => (
                <ShareButtonBarWrapper>
                  <ShareButtonBar
                    innerRef={ref}
                    onClick={handleToggleSharePopper}
                  >
                    <FontAwesomeIcon icon={faShareAlt} /> {"Share"}
                  </ShareButtonBar>
                </ShareButtonBarWrapper>
              )}
            </Reference>
          );
        } else {
          return "";
        }
      }}
    </MediaQuery>
  );

  const shareButtonIcon = ( // Share Button Function for small page
    <MediaQuery maxWidth={sizesDesktop}>
      {(matches) => {
        if (matches && isInCourseEvalsPage && display === "icon") {
          return (
            <Reference>
              {({ ref }) => (
                <ShareButtonIcon
                  innerRef={ref}
                  onClick={handleToggleSharePopper}
                >
                  <FontAwesomeIcon icon={faShareAlt} size="2x" />{" "}
                </ShareButtonIcon>
              )}
            </Reference>
          );
        } else {
          return "";
        }
      }}
    </MediaQuery>
    //<MediaQuery maxWidth={sizes.phone || sizes.tablet}></MediaQuery>
  );

  //Social Button part ---------------------------------------------------
  const twitterButton = (
    <MediaQuery maxWidth={sizesDesktop}>
      {() => {
        /* Share Button */
        return (
          <a
            class="twitter-share-button"
            href={`https://twitter.com/intent/tweet?url=${shareLink}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faTwitterSquare}
              size="lg" // lg = slight large than 1x
              style={{
                color: "#00ACEE",
                // backgroundColor: "#fff",
              }}
            />{" "}
          </a>
        );
      }}
    </MediaQuery>
  );

  const facebookButton = (
    <MediaQuery maxWidth={sizesDesktop}>
      {() => {
        /* Share Button */
        return (
          <a
            class="facebook-share-button"
            href={`https://www.facebook.com/sharer/sharer.php?title=&u=${shareLink}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faFacebookSquare}
              size="lg" // lg = slight large than 1x
              style={{ color: "#3B5998" }}
            />{" "}
          </a>
        );
      }}
    </MediaQuery>
  );

  const linkedinButton = (
    <MediaQuery maxWidth={sizesDesktop}>
      {() => {
        return (
          <a
            class="linkedin-share-button"
            href={`http://www.linkedin.com/shareArticle?mini=true&url=${shareLink}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              size="lg" // lg = slight large than 1x
              style={{ color: "#0E76A8" }}
            />{" "}
          </a>
        );
      }}
    </MediaQuery>
  );

  const lineButton = (
    <MediaQuery maxWidth={sizesDesktop}>
      {() => {
        return (
          <a
            class="line-share-button"
            href={`https://social-plugins.line.me/lineit/share?url=${shareLink}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLine}
              size="lg" // lg = slight large than 1x
              style={{ color: "#00B400" }}
            />{" "}
          </a>
        );
      }}
    </MediaQuery>
  );

  const whatappButton = (
    <MediaQuery maxWidth={sizesDesktop}>
      {() => {
        return (
          <a
            class="whatapp-share-button"
            href={`https://wa.me/?text=${shareLink}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faWhatsappSquare}
              size="lg" // lg = slight large than 1x
              style={{ color: "#4FCE5D" }}
            />{" "}
          </a>
        );
      }}
    </MediaQuery>
  );

  const copyClipboardButton = (
    <MediaQuery maxWidth={sizesDesktop}>
      {() => {
        return (
          <CopyToClipboard text={window.location.href}>
            <InvisibleButton>
              <FontAwesomeIcon
                icon={faLink}
                size="1x" // lg = slight large than 1x
                style={{ color: "#8B8" }}
              />{" "}
            </InvisibleButton>
          </CopyToClipboard>
        );
      }}
    </MediaQuery>
  );

  // Return Share button popper
  return (
    <Manager>
      {shareButtonIcon}
      {shareButtonBar}
      {/* <element onresize="handleWindowResize"/> */}
      <Popper placement="bottom">
        {isPopperOpen
          ? ({ ref, style, placement }) => (
              <PopperBox
                innerRef={ref}
                style={style}
                data-placement={placement}
              >
                {facebookButton}
                {linkedinButton}
                {twitterButton}
                {whatappButton}
                {lineButton}
                {copyClipboardButton}
              </PopperBox>
            )
          : () => null}
      </Popper>
    </Manager>
    // </div>
  );
};

export default ShareButton;
