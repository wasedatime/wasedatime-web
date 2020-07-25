import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faHandPointUp } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import PropTypes from "prop-types";
import { withNamespaces } from "react-i18next";

import { InvisibleButton } from "../../styled-components/Button";

const ExtendedInvisibleButton = styled(InvisibleButton)`
  position: fixed;
  z-index: 3002;
  width: ${props => props.isModalOpen ? '56px' : '130px'};
  height: 56px;
  justify-content: center;
  display: flex;
  align-items: center;
  background-color: #b51e36;
  color: white;
  border-radius: ${props => props.isModalOpen ? '30px' : '20px'};
  bottom: 20px;
  right: 20px;
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.4), 0 6px 10px 0 rgba(0, 0, 0, 0.2),
    0 1px 18px 0 rgba(0, 0, 0, 0.15);
  -webkit-tap-highlight-color: transparent;
`;

const RelatedCoursesButtonFlex = styled('div')`
  display: flex;
  flex-direction: row;
`;

const HandPointUpIconWrapper = styled('div')`
  flex: 1;
  text-align: right;
`;

const RelatedCoursesButtonText = styled('div')`
  flex: 3;
`;

const FilterButton = ({ isModalOpen, handleToggleModal, t }) => {
  return (
    <ExtendedInvisibleButton onClick={handleToggleModal} isModalOpen={isModalOpen}>
      {
        isModalOpen ? <FontAwesomeIcon
          icon={faTimes}
          size="2x"
          transform="shrink-3"
        /> : (
          <RelatedCoursesButtonFlex>
            <HandPointUpIconWrapper>
              <FontAwesomeIcon
                icon={faHandPointUp}
                size="2x"
                transform="shrink-3"
              />
            </HandPointUpIconWrapper>
            <RelatedCoursesButtonText>
              {t(`courseEvals.Related courses`)}
            </RelatedCoursesButtonText>
          </RelatedCoursesButtonFlex>
        )
      }
    </ExtendedInvisibleButton>
  );
};

export default withNamespaces("translation")(FilterButton);

FilterButton.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  handleToggleModal: PropTypes.func.isRequired
};
