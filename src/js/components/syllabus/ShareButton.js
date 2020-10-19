import React from "react";
import styled from "styled-components";
import MediaQuery from "react-responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShareAlt,
  // faLink or faShare,
} from "@fortawesome/free-solid-svg-icons";
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
import PropTypes from "prop-types";
import { withNamespaces } from "react-i18next";
import { InvisibleButton } from "../../styled-components/Button";

//Propper Style -----
const Arrow = styled("div")`
  position: relative;
  width: 3em;
  height: 3em;
  &[data-placement*="top"] {
    bottom: 0;
    left: 0;
    margin-bottom: 2.5em;
    width: 1em;
    height: 1em;
    &::before {
      border-width: 0.5em 0.5em 0 0.5em;
      border-color: #eee transparent transparent transparent;
    }
  }
  &::before {
    content: "";
    margin: auto;
    display: block;
    width: 0;
    height: 0;
    border-style: solid;
  }
  z-index: 1050;
`;

const PopperBox = styled("div")`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  background-color: #eee;
  color: #fff;
  border-radius: 5px;
  margin: 0.5 em;
  padding: 0.25em;
  text-align: center;
  
  z-index: 1050;
`; // width: 8em; (re-moved)
// flex-direction: collumn;

const SocialMediaRow = styled("div")`
  display: "flex",
  flex-wrap: "nowrap",
  flex: "1 0 auto",
  justifyContent: "flex-end",
  borderRadius: "5px",
`;

// const SocialMediaRow = styled("div")`
//   display: block;
//   background-color: #fff;
//   border-left: 0px;
//   text-decoration: none;
//   padding-left: 5px;
// `; // PLAN TO NOT USE (Become a popper instate)

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
    color: #abc;
  }
  &:focus {
    outline: none;
  }
`; // Case of large Screen // Used to be "a" tag

const ShareButtonIcon = styled("InvisibleButton")`
  display: block;
  background-color: #fff;
  border-left: 0px;
  color: #7d7a7c;
  text-decoration: none;

  &:focus {
    outline: none;
  }
`; // Case of Small Screen // Used to be "a" tag

const ShareButton = ({
  // passed from components/syllebus/ShareButton.js
  display,
  shareLink,
  sizesDesktop, // = Small or Large Screen
  isInCourseEvalsPage,
  // logic in containers/syllebus/FetchedShareButton.js
  isPopperOpen,
  handleToggleSharePopper,
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
                    <FontAwesomeIcon icon={faShareAlt} /> {("Share")}
                  </ShareButtonBar>
                </ShareButtonBarWrapper>
              )}
            </Reference>
          );
        } else { return ""; }
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
                  <FontAwesomeIcon
                    icon={faShareAlt}
                    size="2x"
                  />{" "}
                </ShareButtonIcon>
              )}
            </Reference>
          );
        } else { return ""; }
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
              style={{ color: "#00ACEE" }}
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

  // const MessengerButton = (
  //   <MediaQuery maxWidth={sizes.desktop}>
  //     {(matches) => { /* Share Button */
  //       return (
  //         matches &&
  //         course.e && (
  //           <SocialMediaRow>
  //             <a
  //               class="messenger-share-button"
  //               href={`fb-messenger://share/?link=${shareLink}`}
  //               target="_blank"
  //             >
  //               <FontAwesomeIcon
  //                 icon={faFacebookMessenger} size="lg" // lg = slight large than 1x
  //                 style={{ color: "#0078FF" }}
  //               />{" "}
  //             </a>
  //           </SocialMediaRow>
  //         )
  //       );
  //     }}
  //   </MediaQuery>
  // );

  // const copyClipboardButton = (
  //   <MediaQuery maxWidth={sizes.desktop}>
  //     {(matches) => { /* Share Button */
  //       return (
  //         matches &&
  //         course.e && (
  //           <SocialMediaRow>
  //             <a
  //               onClick={`copyToClipboard(${shareLink})`}
  //             >
  //               <FontAwesomeIcon
  //                 icon={faLink} size="lg" // lg = slight large than 1x
  //                 style={{ color: "#4FCE5D" }}
  //               />{" "}
  //             </a>
  //           </SocialMediaRow>
  //         )
  //       );
  //     }}
  //   </MediaQuery>
  // );

  // Return Share button popper
  return (
    <Manager>
      {shareButtonIcon}
      {shareButtonBar}
      <Popper placement="bottom">
        {isPopperOpen
          ? ({ ref, style, placement, arrowProps }) => (
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
              <Arrow
                innerRef={arrowProps.ref}
                data-placement={placement}
                style={arrowProps.style}
              />
            </PopperBox>
          )
          : () => null}
      </Popper>
    </Manager>
  );
}

export default ShareButton;