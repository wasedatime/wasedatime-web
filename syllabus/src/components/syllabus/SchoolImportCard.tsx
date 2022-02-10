import React from "react";

import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "semantic-ui-react/dist/commonjs/elements/Image";
import Dimmer from "semantic-ui-react/dist/commonjs/modules/Dimmer";
import Card from "semantic-ui-react/dist/commonjs/views/Card";
import styled from "styled-components";
import { ThemeContext } from "@app/utils/theme-context";

const SchoolCardWrapper = styled(Dimmer.Dimmable)`
  color: rgba(0, 0, 0, 0.05);
  width: 60px !important;

  &:hover i {
    color: rgba(0, 0, 0, 0.5);
  }
`;

const SchoolImage = styled(Image)`
  border: ${(props) => (props.loaded ? "2px solid rgba(0,0,200,0.4)" : "none")};
  span {
    display: block;
    transform: translate(-6px, 3px);
  }
`;

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
    <SchoolCardWrapper as={Card} dimmed={!loaded} onClick={handleOnClick}>
      <Dimmer
        active={!loaded}
        style={{
          background: isBannedToLoad
            ? "rgba(0,0,0,0.5)"
            : "rgba(255,255,255,0.7)",
        }}
      >
        {!loaded && loading && (
          <FontAwesomeIcon
            icon={faSpinner}
            style={{ color: "rgba(0,0,0,0.5)" }}
          />
        )}
      </Dimmer>
      <SchoolImage
        src={schoolIcon}
        label={
          checked && {
            as: "a",
            corner: "left",
            content: <span>✔</span>,
            color: "red",
          }
        }
        loaded={loaded}
        width="70"
        height="70"
      />
    </SchoolCardWrapper>
  );
};

export default SchoolImportCard;
