import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faTimes } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

import { FloatingActionButton } from "../../styled-components/Button";

const FilterButton = ({ isModalOpen, handleToggleModal }) => {
  return (
    <FloatingActionButton
      onClick={handleToggleModal}
      width="56px"
      borderRadius="30px"
    >
      <FontAwesomeIcon
        icon={isModalOpen ? faTimes : faFilter}
        size="2x"
        transform="shrink-3"
      />
    </FloatingActionButton>
  );
};

export default FilterButton;

FilterButton.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  handleToggleModal: PropTypes.func.isRequired,
};
