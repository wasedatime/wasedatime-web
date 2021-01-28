import { Dropdown } from "semantic-ui-react";

export const SelectionDropdown = styled(Dropdown)`
  min-height: 32px !important;
  padding: 0.3rem 0px 0px 0px !important;

  font-family: Segoe UI, Yu Gothic Medium, Lato;
  font-display: swap;

  .divider.text {
    font-size: 1em;
    line-height: 1.3;
    font-size: 1.2em;
    margin: 0.3rem 1rem;
  }

  .menu .text {
    font-size: 1.5em;
    line-height: 1.2;
  }

  .divider.text + i.dropdown.icon {
    font-size: 1em;
    padding-top: 0.6rem;
    padding-right: 0.3rem;
  }
`;

export const MultipleDropdown = styled(Dropdown)`
  min-height: 32px !important;
  padding: 0.2rem 0.5rem 0.1rem 0.5rem !important;

  font-family: Segoe UI, Yu Gothic Medium, Lato;
  font-display: swap;

  .divider.text {
    font-size: 1em;
  }

  .divider.default.text {
    font-size: 1em;
    margin: 0.4rem 1rem;
  }

  .menu .text {
    font-size: 1em;
    font-size: 1.5em;
    line-height: 1.2;
    margin: 0.4rem 1rem;
  }

  .divider.text + .dropdown.icon {
    font-size: 1em;
    padding: 0.7rem 1rem;
  }
`;

export default SelectionDropdown;
