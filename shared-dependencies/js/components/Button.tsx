import styled from "styled-components";

export const Button = styled("button")`
  padding: 12px;
  margin: 10px 0;
  width: 160px;
  text-align: center;
  text-decoration: none;
  border-radius: 8px;
  border-bottom: none;
  background-color: #fff;
  box-shadow: 0 5px #999;
  font-size: 1.7rem;
  &:hover {
    background-color: #ccc;
  }
  &:active {
    background-color: #ccc;
    box-shadow: 0 5px #666;
    transform: translateY(3px);
  }
`;

export const InvisibleButton = styled("button")`
  align-self: flex-start;
  background-color: unset;
  border: none;
  padding: 0;
  &:focus {
    outline: 0;
  }
  -webkit-tap-highlight-color: transparent;
`;

export const FloatingActionButton = styled(InvisibleButton)`
  position: fixed;
  z-index: 405;
  width: ${(props) => props.width};
  height: 56px;
  justify-content: center;
  display: flex;
  align-items: center;
  background-color: #b51e36;
  color: white;
  border-radius: ${(props) => props.borderRadius};
  bottom: 20px;
  right: 20px;
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.4), 0 6px 10px 0 rgba(0, 0, 0, 0.2),
    0 1px 18px 0 rgba(0, 0, 0, 0.15);
  -webkit-tap-highlight-color: transparent;
`;

export const TransparentButton = styled("button")`
  color: #b51e36;
  background: rgba(255, 255, 255, 0);
  font-weight: 500;
  border: none;
`;

export const HoverableTealButton = styled("button")`
  display: block;
  background-color: rgb(86, 162, 146);
  border: 0px;
  border-radius: 5px;
  color: #fff;
  padding: 5px 1rem;
  margin-bottom: 4px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: rgba(86, 162, 146, 0.3);
    color: rgb(86, 162, 146);
  }
  &:focus {
    outline: none;
  }
`;

const FloatRightRedButton = styled("button")`
  background-color: #b51e36;
  color: #fff;
  border: 0px;
  border-radius: 5px;
  font-size: 0.9em;
  float: right;
  padding: 0.3rem 0.5em;
`;

const FluidRedButton = styled(FloatRightRedButton)`
  float: none;
  width: 100%;
`;

// fluid, color, float, hoverable, transparent

export default Button;
