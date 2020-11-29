import React from "react";
import FormLabel from "@material-ui/core/FormLabel";
import { Grid, Dropdown } from "semantic-ui-react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import styled from "styled-components";

const Range = Slider.createSliderWithTooltip(Slider.Range);

const StyledDropdown = styled(Dropdown)`
  font-size: 1em !important;
  .menu .text {
    font-size: 1.5em !important;
  }
`;

const FilterEvalGroup = ({
  handleToggleFilter,
  legend,
  typeInputs,
  typeInputName,
  selectedTypeInput,
  percentInputName,
  selectedPercentInputs,
}) => (
  <div>
    <FormLabel style={{ fontSize: "1.3em", color: "#000", fontWeight: "bold" }}>
      {legend}
    </FormLabel>
    <Grid style={{ margin: "0 0 1rem" }}>
      <Grid.Column width={7} style={{ paddingLeft: "0px", paddingTop: "0" }}>
        <StyledDropdown
          selection
          fluid
          options={typeInputs}
          value={selectedTypeInput}
          onChange={(e, data) => {
            handleToggleFilter(typeInputName, data.value);
          }}
        />
      </Grid.Column>
      <Grid.Column width={9} style={{ paddingTop: "0" }}>
        <Range
          min={0}
          max={100}
          step={5}
          defaultValue={selectedPercentInputs}
          tipFormatter={(value) => value + "%"}
          tipProps={{ placement: "bottom", visible: true }}
          onAfterChange={(v) => handleToggleFilter(percentInputName, v)}
        />
      </Grid.Column>
    </Grid>
  </div>
);

export default FilterEvalGroup;
