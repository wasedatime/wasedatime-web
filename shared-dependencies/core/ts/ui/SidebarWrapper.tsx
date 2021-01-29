import "@types/node";
import styled from "styled-components";

const StyledSidebar = styled("aside")`
  background: #222;
  width: 65px;
  height: 100%;
  position: fixed;
  z-index: 400;
  box-shadow: rgba(0, 0, 0, 0.45) 4px 0px 12px;
  transition: width 0.5s;

  &:hover {
    width: 210px;
    transition: width 0.5s;
  }
`;

export default StyledSidebar;
