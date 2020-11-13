import React from "react";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Dropdown } from "semantic-ui-react";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  formLabel: {
    fontSize: "1.3em",
    color: "#000",
    fontWeight: "bold",
  },
  formGroup: {
    fontSize: "1.2em",
    margin: "5px 0",
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
      <Dropdown
        placeholder={legend}
        fluid
        multiple
        selection
        options={inputs}
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
