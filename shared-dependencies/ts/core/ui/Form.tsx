import styled from "styled-components";
import { Divider } from "semantic-ui-react";

export const Form = styled("form")`
  width: 100%;
  align-self: center;
  padding: 0 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Textarea = styled("textarea")`
  border: 1px solid #eee;
  border-radius: 10px;
  background-color: #fff;
  outline: none;
  padding: 10px;
  margin: 5px 0 0;
  height: 100px;
  flex: 1 0 auto;
`;

export const SubmitButton = styled("button")`
  flex: 0 0 20%;
  background-color: orange;
  color: #fff;
  border: 0px;
  border-radius: 5px 0 0 5px;
  padding: 0.3em;
`;

export const CloseButton = styled("button")`
  flex: 0 0 20%;
  background-color: #aaa;
  color: #fff;
  border: 0px;
  border-radius: 0 5px 5px 0;
  padding: 0.3em;
`;

const FieldLegend = styled(Divider)`
  font-size: 1.2em !important;
  width: 60% !important;
  margin: 1em 20% !important;
`;

export default Form;
