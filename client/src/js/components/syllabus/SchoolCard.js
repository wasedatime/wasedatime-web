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
  selected,
  loading,
  schoolIcon,
  toggleSelected,
  onDownload,
  isBannedToLoad,
}) => (
  <SchoolCardContainer
    as={Card}
    dimmed={!loaded}
    selected={selected}
    onClick={() =>
      isBannedToLoad
        ? {}
        : loaded
        ? toggleSelected(schoolName)
        : onDownload(schoolName)
    }
    style={{
      border: selected ? "2px solid rgb(150, 150, 255)" : "0px",
    }}
  >
    <Dimmer active={!loaded} inverted={!isBannedToLoad}>
      {!loaded && (
        <Icon
          name={loading ? "spinner" : "download"}
          size="huge"
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
