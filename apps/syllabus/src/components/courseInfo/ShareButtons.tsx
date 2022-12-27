import React from "react";

import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookSquare,
  faTwitterSquare,
  faLinkedin,
  faLine,
  faWhatsappSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ReactGA from "react-ga";
import { withTranslation } from "react-i18next";
import Popup from "semantic-ui-react/dist/commonjs/modules/Popup";

import { InvisibleButton } from "@app/components/styles/Button";
import { gaShareCourse } from "@app/ga/eventActions";
import { gaCourseDetails } from "@app/ga/eventCategories";

type SnsItem = {
  label: string;
  name: string;
  url: string;
  icon: IconDefinition;
  color: string;
};

type SnsButtonProps = {
  snsItem: SnsItem;
  handleClick: (snsName: string) => void;
};

const SnsButton = ({ snsItem, handleClick }: SnsButtonProps) => (
  <a
    className={`${snsItem.label}-share-button dark:bg-dark-bgMain`}
    href={snsItem.url}
    target="_blank"
    rel="noopener noreferrer"
    onClick={() => handleClick(snsItem.name)}
  >
    <FontAwesomeIcon
      icon={snsItem.icon}
      size="2x"
      style={{
        color: snsItem.color,
      }}
    />{" "}
  </a>
);

const ShareButtons = ({ courseId, t }) => {
  const shareLink = `https://${window.location.hostname}${window.location.pathname}?courseId=${courseId}`;
  const shareText = t("syllabus.Share text");
  const handleSnsButtonClicked = (name) => {
    ReactGA.event({
      category: gaCourseDetails,
      action: gaShareCourse,
      label: name,
    });
  };

  const snsItems: SnsItem[] = [
    {
      label: "twitter",
      name: "Twitter",
      url: `https://twitter.com/intent/tweet?url=${shareLink}&text=${shareText}&hashtags=wasedatime,waseda`,
      icon: faTwitterSquare,
      color: "#00ACEE",
    },
    {
      label: "facebook",
      name: "Facebook",
      url: `https://www.facebook.com/sharer/sharer.php?title=&u=${shareLink}&quote=${shareText}`,
      icon: faFacebookSquare,
      color: "#3B5998",
    },
    {
      label: "linkedin",
      name: "LinkedIn",
      url: `http://www.linkedin.com/shareArticle?mini=true&url=${shareLink}&title=${shareText}&summary=${shareText}`,
      icon: faLinkedin,
      color: "#0E76A8",
    },
    {
      label: "line",
      name: "Line",
      url: `http://line.me/R/msg/text/?${shareText} ${shareLink}`,
      icon: faLine,
      color: "#00B400",
    },
    {
      label: "whatapp",
      name: "Whatapp",
      url: `https://wa.me/?text=${shareText} ${shareLink}`,
      icon: faWhatsappSquare,
      color: "#4FCE5D",
    },
  ];

  const copyClipboardButton = (
    <CopyToClipboard
      text={shareLink}
      onClick={() => handleSnsButtonClicked("Copied link")}
      className="dark:bg-dark-bgMain"
    >
      <InvisibleButton>
        <Popup
          basic
          content="Link Copied!"
          on="click"
          trigger={
            <FontAwesomeIcon
              icon={faLink}
              size="3x"
              transform="shrink-2"
              style={{ color: "#8B8" }}
            />
          }
        />
      </InvisibleButton>
    </CopyToClipboard>
  );

  return (
    <span className="dark:bg-dark-text3">
      <p style={{ marginBottom: "0px" }}>Share this course:</p>
      {snsItems.map((item) => (
        <SnsButton
          key={item.label}
          snsItem={item}
          handleClick={handleSnsButtonClicked}
        />
      ))}
      {copyClipboardButton}
    </span>
  );
};

export default withTranslation("translation")(ShareButtons);
