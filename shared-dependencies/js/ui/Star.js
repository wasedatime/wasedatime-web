import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";

const FilledIcon = styled(FontAwesomeIcon)`
  color: orange;
  font-size: 0.7em;
  vertical-align: 0.1em;
`;

const BlankIcon = styled(FilledIcon)`
  color: #ccc;
`;

export const FilledStar = () => <FilledIcon icon={faStar} />;
export const FilledHalfStar = () => <FilledIcon icon={faStarHalf} />;
export const BlankStar = () => <BlankIcon icon={faStar} />;
export const BlankHalfStar = () => <BlankIcon icon={faStarHalf} />;

export default FilledStar;
