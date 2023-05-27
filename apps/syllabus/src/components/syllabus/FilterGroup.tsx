import React from "react"

import { Colors } from "wasedatime-ui"
import { WithStyles, createStyles } from "@material-ui/core"
import Checkbox from "@material-ui/core/Checkbox"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import FormGroup from "@material-ui/core/FormGroup"
import FormLabel from "@material-ui/core/FormLabel"
import { withStyles } from "@material-ui/core/styles"
import Dropdown from "semantic-ui-react/dist/commonjs/modules/Dropdown"
import styled from "styled-components"

import { ThemeContext } from "@app/utils/theme-context"

type StyledDropdownProps = {
  $isDark: boolean
}

const StyledDropdown = styled(Dropdown)<StyledDropdownProps>`
  font-size: 0.9em !important;
  font-family: Segoe UI, Yu Gothic Medium, Lato;
  font-display: swap;
  min-height: 32px !important;
  padding: 0.2rem 0.5rem 0.1rem 0.5rem !important;
  background-color: ${(props) =>
    props.$isDark ? colors.dark.card1 : "white"} !important;

  a.ui.label {
    border-width: 0px;
    border-radius: 5px;
    background-color: ${(props) =>
      props.$isDark ? colors.dark.text2 : colors.dark.text2} !important;
    color: ${(props) => (props.$isDark ? "#333" : "white")};
    .delete.icon {
      padding: 0px !important;
      &:before {
        content: "×";
        margin-left: 5px;
        font-size: 16px;
        color: ${(props) => (props.$isDark ? "#333" : "white")};
      }
    }
  }

  .menu {
    background-color: ${(props) =>
      props.$isDark ? colors.dark.card1 : "white"} !important;
    ::-webkit-scrollbar {
      width: 0;
      background: transparent;
    }

    .item {
      border-width: 0px !important;
      .text {
        font-size: 16px !important;
        line-height: 1.2 !important;
      }
    }
  }

  .text {
    margin: 0.4rem 1em !important;
    color: ${(props) => (props.$isDark ? colors.dark.text2 : "black")};
  }

  i {
    padding: 0.5rem 1em !important;
    font-size: 14px !important;
    color: ${(props) => (props.$isDark ? colors.dark.text2 : "black")};
  }
`

// const StyledFormControlLabel = styled(FormControlLabel)`
//   label {
//     padding-left: 50px !important;
//   }
// `;

const styles = (theme) =>
  createStyles({
    formLabel: {
      fontSize: "1.3em",
      color: "#000",
      fontWeight: "bold",
      fontFamily: "Lato, Yu Gothic Medium, Segoe UI",
      fontDisplay: "swap",
    },
    formGroup: {
      fontSize: "1.3em",
      margin: "0 0 10px",
      fontFamily: "Segoe UI, Yu Gothic Medium, Lato",
      fontDisplay: "swap",
    },
    formControlLabel: {
      minWidth: "70px",
      fontFamily: "Segoe UI, Yu Gothic Medium, Lato",
      fontDisplay: "swap",
    },
    formControlLabel_label: {
      fontSize: "0.9em",
      fontFamily: "Segoe UI, Yu Gothic Medium, Lato",
      fontDisplay: "swap",
    },
    checkBox: {
      marginLeft: "5px",
      width: "30px",
      height: "30px",
      transform: "scale(1.5)",
    },
    checkBoxChecked: {
      color: `${colors.dark.lighter} !important`,
    },
  })

interface Props extends WithStyles<typeof styles> {
  handleToggleFilter: (name: string, value: any) => void
  legend: string
  inputs: any
  inputName: string
  classes: any
  filterType: string
}

const FilterGroup = ({
  handleToggleFilter,
  legend,
  inputs,
  inputName,
  classes,
  filterType,
}: Props) => {
  const { theme } = React.useContext(ThemeContext)

  let filterItems
  if (filterType === "checkbox") {
    filterItems = inputs.map((input) => (
      <FormControlLabel
        key={input.value}
        control={
          <Checkbox
            id={`${inputName}_${input.value}`}
            name={inputName}
            value={input.value}
            checked={input.ischecked}
            onChange={(e) => {
              handleToggleFilter(e.target.name, e.target.value)
            }}
            classes={{
              root: classes.checkBox,
              checked: classes.checkBoxChecked,
            }}
            size="medium"
            className="text-light-text2 dark:text-dark-text2"
          />
        }
        label={input.label}
        classes={{
          root: classes.formControlLabel,
          label: classes.formControlLabel_label,
        }}
      />
    ))
  } else if (filterType === "dropdown") {
    filterItems = (
      <StyledDropdown
        placeholder={legend}
        fluid
        multiple
        selection
        options={inputs.map((i) => ({
          ...i,
          ischecked: i.ischecked.toString(),
        }))}
        value={inputs.filter((i) => i.ischecked).map((i) => i.value)}
        onChange={(e, data) => {
          handleToggleFilter(inputName, data.value)
        }}
        aria-label={inputName}
        $isDark={theme === "dark"}
      />
    )
  }

  return (
    <div>
      <FormLabel
        className={`${classes.formLabel} text-light-text2 dark:text-dark-text1`}
      >
        {legend}
      </FormLabel>
      <FormGroup row className={classes.formGroup}>
        {filterItems}
      </FormGroup>
    </div>
  )
}

export default withStyles(styles)(FilterGroup)
