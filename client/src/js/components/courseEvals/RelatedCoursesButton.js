import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faSearchPlus,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import PropTypes from "prop-types";
import { withNamespaces } from "react-i18next";

import { FloatingActionButton } from "../../styled-components/Button";

const IconTextWrapper = styled("div")`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: 0 10px;
`;

const IconWrapper = styled("div")`
  flex: 1;
`;

const ButtonText = styled("div")`
  flex: 2;
`;

const RelatedCoursesButton = ({ isModalOpen, handleToggleModal, t }) => {
  const width = isModalOpen ? "56px" : "130px";
  const borderRadius = isModalOpen ? "30px" : "20px";

  return (
    <FloatingActionButton
      onClick={handleToggleModal}
      width={width}
      borderRadius={borderRadius}
    >
      {isModalOpen ? (
        <FontAwesomeIcon icon={faTimes} size="2x" transform="shrink-3" />
      ) : (
        <IconTextWrapper>
          <IconWrapper>
            <FontAwesomeIcon
              icon={faSearchPlus}
              size="2x"
              transform="shrink-3"
            />{" "}
          </IconWrapper>
          <ButtonText>{t(`courseEvals.Related courses`)}</ButtonText>
        </IconTextWrapper>
      )}
    </FloatingActionButton>
  );
};

export default withNamespaces("translation")(RelatedCoursesButton);

RelatedCoursesButton.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  handleToggleModal: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};
