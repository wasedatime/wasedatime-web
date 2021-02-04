import styled from "styled-components";

const StyledHeader = styled("header")`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.3rem 1rem;
  height: 67px;
  background: #222;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 400;
`;

export default StyledHeader;
