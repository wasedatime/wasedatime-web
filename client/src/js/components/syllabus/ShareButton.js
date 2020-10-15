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
import PropTypes from "prop-types";
import { withNamespaces } from "react-i18next";
import { InvisibleButton } from "../../styled-components/Button";

const SocialMediaRow = styled("div")`
  display: block;
  background-color: #fff;
  border-left: 0px;
  text-decoration: none;
  padding-left: 5px;
`; // PLAN TO NOT USE (Become a popper instate)

const ShareButtonBarWrapper = styled("div")`
  flex: 1 0 30%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 0.9em;
`;

const ShareButtonBar = styled("a")`
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
`; // Case of large Screen

const ShareButtonIcon = styled("a")`
  display: block;
  background-color: #fff;
  border-left: 0px;
  color: #7d7a7c;
  text-decoration: none;

  &:focus {
    outline: none;
  }
`; // Case of Small Screen
// &:hover {
//   color: #abc;
// }

const ShareButton = ({ shareLink, isInCourseEvalsPage, display, sizesDesktop }) => { // screenSize = Small or Large Screen

  const shareButtonBar = ( // Share Button Function for large page
    <MediaQuery minWidth={sizesDesktop}>
      {(matches) => {
        if (matches && isInCourseEvalsPage && display == "bar") {
          return (
            <ShareButtonBarWrapper>
              <ShareButtonBar>
                <FontAwesomeIcon icon={faShareAlt} /> {("Share")}
              </ShareButtonBar>
            </ShareButtonBarWrapper>
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
        /* Share Button */
        if (matches && isInCourseEvalsPage && display == "icon") {
          return (
            <ShareButtonIcon>
              <FontAwesomeIcon
                icon={faShareAlt}
                size="2x"
              />{" "}
            </ShareButtonIcon>
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
      {(matches) => {
        /* Share Button */
        return (
          // matches &&
          // course.e && 
          (
            <SocialMediaRow>
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
            </SocialMediaRow>
          )
        );
      }}
    </MediaQuery>
  );

  const facebookButton = (
    <MediaQuery maxWidth={sizesDesktop}>
      {(matches) => {
        /* Share Button */
        return (
          // matches &&
          // course.e && 
          (
            <SocialMediaRow>
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
            </SocialMediaRow>
          )
        );
      }}
    </MediaQuery>
  );

  const linkedinButton = (
    <MediaQuery maxWidth={sizesDesktop}>
      {(matches) => {
        /* Share Button */
        return (
          // matches &&
          // course.e && 
          (
            <SocialMediaRow>
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
            </SocialMediaRow>
          )
        );
      }}
    </MediaQuery>
  );

  const lineButton = (
    <MediaQuery maxWidth={sizesDesktop}>
      {(matches) => {
        /* Share Button */
        return (
          // matches &&
          // course.e && 
          (
            <SocialMediaRow>
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
            </SocialMediaRow>
          )
        );
      }}
    </MediaQuery>
  );

  const whatappButton = (
    <MediaQuery maxWidth={sizesDesktop}>
      {(matches) => {
        /* Share Button */
        return (
          // matches &&
          // course.e && 
          (
            <SocialMediaRow>
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
            </SocialMediaRow>
          )
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
    <div>
      {shareButtonIcon}
      {shareButtonBar}
      
      {/* <SocialMediaRow>
        {facebookButton}
        {linkedinButton}
        {twitterButton}
        {whatappButton}
        {lineButton}
      </SocialMediaRow> */}
    </div>
  );
}

export default ShareButton;

/*  
  Implement on click Share BTN
  Impelenent popup 
  Done!
*/