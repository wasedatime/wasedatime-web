import React from "react";

import { media } from "@bit/wasedatime.core.ts.utils.responsive-utils";
import FormLabel from "@material-ui/core/FormLabel";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Grid from "semantic-ui-react/dist/commonjs/collections/Grid";
import Dropdown from "semantic-ui-react/dist/commonjs/modules/Dropdown";
import styled from "styled-components";
import colors from "@bit/wasedatime.core.theme.colors";

import FilterGroup from "@app/components/syllabus/FilterGroup";
import { ThemeContext } from "@app/utils/theme-context";

type ThemedComponentProps = {
  isDark: boolean;
}

const Range = Slider.createSliderWithTooltip(Slider.Range);

const StyledRange = styled(Range)<ThemedComponentProps>`
  ${
    props => props.isDark && `
      .rc-slider-rail {
        background-color: ${colors.dark.text3};
      }

      .rc-slider-track {
        background-color: ${colors.dark.main};
      }
    
      .rc-slider-handle {
        background-color: ${colors.dark.text3};
        border-color: ${colors.dark.main};
        &:hover {
          border-color: ${colors.dark.main};
        }
        &:focus {
          border-color: ${colors.dark.main};
        }
      }

      .rc-slider-handle-clicked-focus {
        border-color: ${colors.dark.main};
        &:focus {
          border-color: ${colors.dark.main};
        }
      }
    
      .rc-slider-handle-dragging {
        background-color: ${colors.dark.text3};
        border-color: ${colors.dark.main};
        &:hover {
          border-color: ${colors.dark.main};
        }
        &:focus {
          border-color: ${colors.dark.main};
        }
      }
    `
  }
`;

const StyledDropdown = styled(Dropdown)<ThemedComponentProps>`
  min-height: 32px !important;
  padding: 0px !important;
  padding-top: 0.3rem !important;
  background-color: ${props => props.isDark ? colors.dark.text3 : "white"} !important;

  label {
    font-family: Lato, Yu Gothic Medium, Segoe UI !important;
    font-display: swap;
  }

  .divider.text {
    line-height: 1.3 !important;
    font-size: 1.3em !important;
    margin: 2px 1rem !important;
    color: ${props => props.isDark ? colors.dark.text2 : "black"} !important;
  }

  .menu {
    background-color: ${props => props.isDark ? colors.dark.text3 : "white"} !important;
    ::-webkit-scrollbar {
      width: 0;
      background: transparent;
    }

    .item {
      border-width: 0px !important;
      .text {
        font-size: 16px !important;
        line-height: 1.2 !important;
        color: ${props => props.isDark ? colors.dark.text2 : "black"};
      }
    }
  }

  i {
    padding: 0.5rem 0.2rem 0.5rem 0px !important;
    font-size: 14px !important;
    font-weight: 100;
    color: ${props => props.isDark ? colors.dark.text2 : "black"};
  }
`;

const StyledFormLabel = styled(FormLabel)`
  font-size: 1.3em !important;
  font-family: Lato, Yu Gothic Medium, Segoe UI;
  font-weight: bold;
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
  const { theme } = React.useContext(ThemeContext);
  
  return (
    <div>
      <StyledFormLabel>
        <b className="text-light-text1 dark:text-dark-text2">{legend}</b>
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
          isDark={theme === "dark"}
        />
        <br />
        <StyledRange
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
          isDark={theme === "dark"}
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
