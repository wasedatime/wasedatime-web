import React from 'react';
import styled from 'styled-components';

const StyledFieldset = styled('fieldset')`
  margin: 0 0 .5em 0;
  padding: 0;
  border: none;
`

const StyledLegend = styled('legend')`
  font-size: 16px;
  font-weight: bold;
`

const StyledInput = styled('input')`
  margin-right: .6em;
`

const FilterGroup = ({legend, inputs, inputName}) => {
  const checkboxes = inputs.map(input => (
    <div key={input.value}>
      <StyledInput
        type="checkbox"
        id={input.value}
        name={inputName}
        value={input.value} />
      <label htmlFor={input.label}>{input.label}</label>
    </div>
  ));

  return (
    <StyledFieldset>
      <StyledLegend>{legend}</StyledLegend>
      {checkboxes}
    </StyledFieldset>
  );
}

export default FilterGroup;
