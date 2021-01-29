import "@types/node";
import styled from "styled-components";

export const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
`;

export const RowWrapper = styled("div")`
  display: flex;
  flex-direction: row;
  flex: 1 0 auto;
`;

interface WrapperProps {
  background: string;
}
export const WrapperWithBackground = styled(Wrapper)`
  background-image: url(${(props: WrapperProps) => props.background});
  background-position: center, center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export default Wrapper;
