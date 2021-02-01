import React from "react";
import styled from "styled-components";
import { Card, Icon, Dimmer, Image } from "semantic-ui-react";

const SchoolCardContainer = styled(Dimmer.Dimmable)`
  color: rgba(0, 0, 0, 0.05);

  &:hover i {
    color: rgba(0, 0, 0, 0.5) !important;
  }
`;

const SchoolImportCard = ({
  schoolName,
  loaded,
  loading,
  schoolIcon,
  onDownload,
  isBannedToLoad,
}) => (
  <SchoolCardContainer
    as={Card}
    dimmed={!loaded}
    onClick={() => (isBannedToLoad || loaded ? {} : onDownload(schoolName))}
  >
    <Dimmer
      active={!loaded}
      style={{
        background: isBannedToLoad
          ? "rgba(0,0,0,0.5)"
          : "rgba(255,255,255,0.7)",
      }}
    >
      {!loaded && (
        <Icon
          name={loading ? "spinner" : "download"}
          size="big"
          style={{
            color: loading ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0.05)",
          }}
        />
      )}
    </Dimmer>
    <Image
      src={schoolIcon}
      style={loaded ? { border: "2px solid rgba(0,0,200,0.4)" } : {}}
    />
  </SchoolCardContainer>
);

export default SchoolImportCard;
