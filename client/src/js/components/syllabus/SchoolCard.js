import React from "react";
import styled from "styled-components";
import { Card, Icon, Dimmer, Image } from "semantic-ui-react";

const SchoolCardContainer = styled(Dimmer.Dimmable)`
  color: rgba(0, 0, 0, 0.05);

  &:hover i {
    color: rgba(0, 0, 0, 0.5) !important;
  }
`;

const SchoolCard = ({
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
    <Dimmer active={!loaded} inverted={!isBannedToLoad}>
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
    <Image src={schoolIcon} />
  </SchoolCardContainer>
);

export default SchoolCard;
