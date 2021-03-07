import styled from "styled-components";
import Step from "semantic-ui-react/dist/commonjs/elements/Step";

export const VerticalStep = styled(Step)`
  &:after {
    display: block !important;
    position: absolute;
    z-index: 2;
    content: "";
    top: 101% !important;
    left: 50% !important;
    border: medium none;
    background-color: #fff;
    width: 1.14285714em;
    height: 1.14285714em;
    border-style: solid;
    border-color: rgba(34, 36, 38, 0.15);
    border-width: 0 1px 1px 0;
    transition: background-color 0.1s ease, opacity 0.1s ease, color 0.1s ease,
      box-shadow 0.1s ease;
    transform: translateY(-50%) translateX(50%) rotate(45deg) !important;
  }
`;

export default VerticalStep;
