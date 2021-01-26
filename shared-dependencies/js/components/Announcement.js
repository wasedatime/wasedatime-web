import styled from "styled-components";

export const Announcement = styled("div")`
  background-color: #48af37;
  color: #fff;
  margin-top: 20px;
  margin-bottom: 5px;
  padding: 0.5rem;
  font-size: 0.7em;
  border-radius: 3px;
  line-height: normal;
`;

export const Disclaimer = styled(Announcement)`
  background-color: #aaa;
`;

export default Announcement;
