import React from 'react';
import styled from 'styled-components';

const StyledFieldset = styled('fieldset')`
  margin: 0 0 0.5em 0;
  padding: 0;
  border: none;
`;

const StyledLegend = styled('legend')`
  font-size: 1.2em;
  font-weight: bold;
`;

const StyledInput = styled('input')`
  margin-right: 0.6em;
`;

const StyledLabel = styled('label')`
  font-size: 1.2em;
`;

const FilterGroup = ({ handleToggleFilter, legend, inputs, inputName }) => {
  const checkboxes = inputs.map(input => (
    <div key={input.value}>
      <StyledInput
        type="checkbox"
        id={input.value}
        name={inputName}
        value={input.value}
        checked={input.isChecked}
        onChange={e => {
          handleToggleFilter(e.target.name, e.target.value);
        }}
      />
      <StyledLabel htmlFor={input.label}>{input.label}</StyledLabel>
    </div>
  ));

  return (
    <StyledFieldset>
      <StyledLegend>{legend}</StyledLegend>
      {checkboxes}
    </StyledFieldset>
  );
};

export default FilterGroup;

FilterGroup.propTypes = {
  handleToggleFilter: PropTypes.func.isRequired,
  legend: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  inputs: PropTypes.array.isRequired
}
