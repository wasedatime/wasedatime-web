import React from "react";

import { media } from "@bit/wasedatime.core.ts.utils.responsive-utils";
import FormLabel from "@material-ui/core/FormLabel";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Grid from "semantic-ui-react/dist/commonjs/collections/Grid";
import Dropdown from "semantic-ui-react/dist/commonjs/modules/Dropdown";
import styled from "styled-components";

import FilterGroup from "@app/components/syllabus/FilterGroup";

const Range = Slider.createSliderWithTooltip(Slider.Range);

const StyledDropdown = styled(Dropdown)`
  min-height: 32px !important;
  padding: 0px !important;
  padding-top: 0.3rem !important;

  label {
    font-family: Lato, Yu Gothic Medium, Segoe UI !important;
    font-display: swap;
  }

  .divider.text {
    line-height: 1.3 !important;
    font-size: 1.3em !important;
    margin: 2px 1rem !important;
  }

  .menu .text {
    line-height: 1.2 !important;
  }

  i {
    padding: 0.5rem 0.2rem 0.5rem 0px !important;
  }
`;

const StyledFormLabel = styled(FormLabel)`
  font-size: 1.3em !important;
  font-family: Lato, Yu Gothic Medium, Segoe UI;
  font-weight: bold;
  color: #000 !important;
`;

const EvalRangeWrapper = styled.div`
  margin-bottom: 30px;
  ${media.tablet`width: 80%;`}
`;

interface Props {
  handleToggleFilter: (name: string, value: any) => void;
  legend: string;
  typeDefault: string;
  typeInputs: object[];
  typeInputName: string;
  selectedTypeInput: number;
  percentInputName: string;
  selectedPercentInputs: number[];
  specialInputName: string;
  checkedSpecialInputs: object[];
}

const FilterEvalGroup = ({
  handleToggleFilter,
  legend,
  typeDefault,
  typeInputs,
  typeInputName,
  selectedTypeInput,
  percentInputName,
  selectedPercentInputs,
  specialInputName,
  checkedSpecialInputs,
}: Props) => {
  return (
    <div>
      <StyledFormLabel>
        <b>{legend}</b>
      </StyledFormLabel>
      <EvalRangeWrapper>
        <StyledDropdown
          placeholder={typeDefault}
          selection
          fluid
          clearable
          options={typeInputs}
          value={selectedTypeInput}
          onChange={(e, data) => {
            handleToggleFilter(typeInputName, data.value);
          }}
          aria-label={typeInputName}
        />
        <br />
        <Range
          min={0}
          max={100}
          step={5}
          defaultValue={selectedPercentInputs}
          tipFormatter={(value) => `${value}%`}
          tipProps={{ placement: "bottom", visible: true }}
          onAfterChange={(v) => handleToggleFilter(percentInputName, v)}
          ariaLabelGroupForHandles={[
            `${percentInputName}Min`,
            `${percentInputName}Max`,
          ]}
        />
      </EvalRangeWrapper>
      <FilterGroup
        handleToggleFilter={handleToggleFilter}
        legend=""
        inputName={specialInputName}
        inputs={checkedSpecialInputs}
        filterType="checkbox"
      />
    </div>
  );
};

export default FilterEvalGroup;
