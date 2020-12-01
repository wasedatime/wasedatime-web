import React from "react";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Dropdown } from "semantic-ui-react";
import { withStyles } from "@material-ui/core/styles";
import styled from "styled-components";

const StyledDropdown = styled(Dropdown)`
  font-size: 1em !important;
  a.ui.label {
    line-height: 1.3 !important;
  }
  .menu .text {
    font-size: 1.5em !important;
    line-height: 1.2 !important;
  }
`;

const styles = (theme) => ({
  formLabel: {
    fontSize: "1.3em",
    color: "#000",
    fontWeight: "bold",
  },
  formGroup: {
    fontSize: "1.2em",
    margin: "0 0 10px",
  },
  formControlLabel: {
    minWidth: "105px",
  },
  formControlLabel_label: {
    fontSize: "1em",
  },
  checkBox: {
    height: "30px",
  },
  checkBoxChecked: {
    color: "#b51e36 !important",
  },
});

const FilterGroup = ({
  handleToggleFilter,
  legend,
  inputs,
  inputName,
  classes,
  filterType,
}) => {
  var filterItems;
  if (filterType === "checkbox") {
    filterItems = inputs.map((input) => (
      <FormControlLabel
        key={input.value}
        control={
          <Checkbox
            id={input.value}
            name={inputName}
            value={input.value}
            checked={input.isChecked}
            onChange={(e) => {
              handleToggleFilter(e.target.name, e.target.value);
            }}
            classes={{
              root: classes.checkBox,
              checked: classes.checkBoxChecked,
            }}
          />
        }
        label={input.label}
        classes={{
          root: classes.formControlLabel,
          label: classes.formControlLabel_label,
        }}
      />
    ));
  } else if (filterType === "dropdown") {
    filterItems = (
      <StyledDropdown
        placeholder={legend}
        fluid
        multiple
        selection
        options={inputs}
        value={inputs.filter((i) => i.isChecked).map((i) => i.value)}
        onChange={(e, data) => {
          handleToggleFilter(inputName, data.value);
        }}
      />
    );
  }

  return (
    <div>
      <FormLabel className={classes.formLabel}>{legend}</FormLabel>
      <FormGroup row className={classes.formGroup}>
        {filterItems}
      </FormGroup>
    </div>
  );
};

export default withStyles(styles)(FilterGroup);
