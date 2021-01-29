import "@types/node";
import styled from "styled-components";

const InvisibleButton = styled("button")`
  align-self: flex-start;
  background-color: #fff;
  border: none;
  padding: 0;
  outline: 0;
`;

export const ColorButton = styled(InvisibleButton)`
  width: 1.5em;
  height: 1.5em;
  border: solid 2px;
  border-radius: 0.3em;
  margin: 0 0.1em;
`;

export default ColorButton;
