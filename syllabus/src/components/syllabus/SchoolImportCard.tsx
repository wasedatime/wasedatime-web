import React from "react";

import colors from "@bit/wasedatime.core.theme.colors";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "semantic-ui-react/dist/commonjs/elements/Image";
import Dimmer from "semantic-ui-react/dist/commonjs/modules/Dimmer";
import Card from "semantic-ui-react/dist/commonjs/views/Card";
import styled from "styled-components";

import { ThemeContext } from "@app/utils/theme-context";

type ThemedComponentProps = {
  $isDark: boolean;
};

const SchoolCardWrapper = styled(Dimmer.Dimmable)<ThemedComponentProps>`
  color: rgba(0, 0, 0, 0.05);
  width: 60px !important;
  border: 0px !important;
  position: relative;
  ${(props) =>
    props.$isDark &&
    `
    background-color: ${colors.dark.text3} !important;
    box-shadow: 0 1px 3px 0 ${colors.dark.text3},0 0 0 1px ${colors.dark.text3} !important;
  `}

  &:hover i {
    color: rgba(0, 0, 0, 0.5);
  }
`;

const SchoolImage = styled(Image)<ThemedComponentProps>`
  span {
    display: block;
    transform: translate(-6px, 3px);
  }
  ${(props) =>
    props.$isDark && `background-color: ${colors.dark.text3} !important;`}
`;

const CheckLabel = styled.div`
  position: absolute;
  display: block;
  z-index: 100;
  top: 0px;
  left: 0px;
  width: 60px;
  height: 60px;
`;

const schoolCardDimmerColor = (isDimmerActive: boolean, theme: string): string => {
  if (theme === "light") {
    return isDimmerActive ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.8)";
  } else {
    return isDimmerActive ? "rgba(0,0,0,0.7)" : "rgba(0,0,0,0.5)";
  }
}

interface Props {
  loaded: boolean;
  loading: boolean;
  schoolIcon: string;
  onDownload: () => void;
  isBannedToLoad: boolean;
  checked: boolean;
  onCheck: () => void;
}

const SchoolImportCard = ({
  loaded,
  loading,
  schoolIcon,
  onDownload,
  isBannedToLoad,
  checked,
  onCheck,
}: Props) => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  const handleOnClick = () => {
    !isBannedToLoad && (loaded ? onCheck() : onDownload());
  };

  return (
    <SchoolCardWrapper
      as={Card}
      onClick={handleOnClick}
      $isDark={theme === "dark"}
    >
      <Dimmer
        active={!loaded}
        style={{
          background: schoolCardDimmerColor(isBannedToLoad, theme)
        }}
      >
        {!loaded && loading && (
          <FontAwesomeIcon
            icon={faSpinner}
            style={{ color: "rgba(0,0,0,0.5)" }}
          />
        )}
      </Dimmer>
      {checked && (
        <CheckLabel className="rounded-full border-4 border-light-lighter dark:border-dark-lighter" />
      )}
      <SchoolImage
        src={schoolIcon}
        width="70"
        height="70"
        $isDark={theme === "dark"}
      />
    </SchoolCardWrapper>
  );
};

export default SchoolImportCard;
