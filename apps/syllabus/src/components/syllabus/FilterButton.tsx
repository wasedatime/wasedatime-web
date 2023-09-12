import React from "react"

import { faFilter, faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"

import { FloatingActionButton } from "@app/components/styles/Button"

const StyledFloatingActionButton = styled(FloatingActionButton)`
  bottom: 70px;
  width: 56px;
  border-radius: 30px;
`
interface Props {
  isModalOpen: boolean
  handleToggleModal: () => void
}

const FilterButton = ({ isModalOpen, handleToggleModal }) => {
  return (
    <StyledFloatingActionButton onClick={handleToggleModal}>
      <FontAwesomeIcon
        icon={isModalOpen ? faTimes : faFilter}
        size="2x"
        transform="shrink-3"
      />
    </StyledFloatingActionButton>
  )
}

export default FilterButton
