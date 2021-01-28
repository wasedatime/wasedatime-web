import styled from "styled-components";

export const SwitchButton = styled("button")`
  width: 100%;
  height: 100%;
  background-color: unset;
  border: none;
  border-bottom: none;
  padding: 5px;
  color: #222;
  &:hover {
    background-color: #ccc;
    border-bottom: 3px solid #ccc;
  }
  &:focus {
    outline: 0;
  }
`;

export const SelectedSwitchButton = styled(SwitchButton)`
  background-color: #fff;
  border-bottom: 3px solid #ccc;
`;

export default SwitchButton;
