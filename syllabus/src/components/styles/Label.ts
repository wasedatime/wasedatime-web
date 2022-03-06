import styled from "styled-components";

type Props = {
  filled?: boolean | false;
  color?: string;
}

export const Label = styled.span<Props>`
  border: 1px solid ${props => props.color || "grey"};
  border-radius: 5px;
  color: ${props => props.color || "grey"};
  padding: 0.5rem;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  vertical-align: middle;

  ${(props) => {
    if (!props.filled) return;
    const bgColorStyle = "background-color: " + (props.color || "grey") + ";";
    const restStyle = `
      border: 0px;
      color: white;
    `;
    return bgColorStyle + restStyle;
  }}
`;

export default Label;
