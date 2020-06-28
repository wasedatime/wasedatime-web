import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";

const FilledStar = styled(FontAwesomeIcon)`
  color: orange;
`;

const BlankStar = styled(FontAwesomeIcon)`
  color: #ccc;
`;

const displayFilledStars = scale => {
  return [...Array(Math.floor(scale)).keys()].map(i => <FilledStar key={i} icon={faStar} />)
}

const displayHalfStar = scale => {
  return (scale - Math.floor(scale))*2 ? <FilledStar icon={faStarHalf} /> : ''
}

const displayBlankStars = scale => {
  return [...Array(5-Math.ceil(scale)).keys()].map(i => <BlankStar key={i} icon={faStar} />)
}

const EvaluationStars = ({ scale }) => (
  <span>
    {displayFilledStars(scale)}
    {displayHalfStar(scale)}
    {displayBlankStars(scale)}
  </span>
)

export default EvaluationStars;
