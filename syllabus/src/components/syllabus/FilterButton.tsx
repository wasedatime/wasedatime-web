import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FloatingActionButton } from "@bit/wasedatime.core.ts.styles.button";

interface Props {
  isModalOpen: boolean;
  handleToggleModal: () => void;
}

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
