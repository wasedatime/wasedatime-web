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
  width: 56px;
  height: 56px;
  justify-content: center;
  display: flex;
  align-items: center;
  background-color: #b51e36;
  color: white;
  border-radius: 50%;
  bottom: 20px;
  right: 20px;
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.4), 0 6px 10px 0 rgba(0, 0, 0, 0.2),
    0 1px 18px 0 rgba(0, 0, 0, 0.15);
  -webkit-tap-highlight-color: transparent;
`;

// interface CustomButtonProps {
//   bgColor: string;
//   fontColor: string;
//   float: string;
//   fluid: boolean;
//   hoverable: boolean;
// }
// props: { bgColor, fontColor, float, fluid, hoverable }
export const CustomButton = styled("button")`
  display: block;
  background-color: ___CSS_0___;
  border: 0px;
  border-radius: 5px;
  color: ___CSS_1___;
  padding: 5px 1rem;
  margin-bottom: 4px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  float: ___CSS_2___;
  ___CSS_3___ ___CSS_4___ &:focus {
    outline: none;
  }
`;

export default CustomButton;
