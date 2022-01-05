import React from "react";
import styled from "styled-components";
import majorsBySchool from '../../constants/majors-by-school';
import Tab from "semantic-ui-react/dist/commonjs/modules/Tab";
import { Badge } from "../styles/Badge";
import fseIcon from "../../assets/img/syllabus-icons/fse.png";
import cseIcon from "../../assets/img/syllabus-icons/cse.png";
import aseIcon from "../../assets/img/syllabus-icons/ase.png";

const Menu = styled.div`
  margin: 2em;
`;

const SchoolMenu = styled.div`
  display: flex;
  flex-direction: row;
`;

const SchoolItem = styled.div`
  flex: auto;
  padding: 0px auto;
  text-align: center;
`;

const SchoolButton = styled.button`
  margin: 0px auto;
  ${props => props.active && "opacity: 0.5;"}
`;

const SchoolImg = styled.img`
  &:hover {
    opacity: 0.5;
  }
`;

const MajorMenu = styled.div`
  border: 2px solid ${props => {
    return props.school === "FSE"
      ? "rgba(190,106,20,0.5)"
      : props.school === "CSE"
        ? "rgba(105,140,45,0.5)"
        : "rgba(50,98,149,0.5)";
  }};
  border-radius: 10px;
  margin: 1em;
  padding: 1em;
`;

const Button = styled.button`
  background-color: #fff;
  color: ${props => {
    return props.school === "FSE"
      ? "rgb(190,106,20)"
      : props.school === "CSE"
        ? "rgb(105,140,45)"
        : "rgb(50,98,149)";
  }};
  border-radius: 5px;
  padding: 0px 1em;
  margin: 0.5em;
  font-size: 1.4rem;
`;

const ReviewsCount = styled(Badge)`
  background-color: ${props => {
    return props.school === "FSE"
      ? "rgba(190,106,20,0.5)"
      : props.school === "CSE"
        ? "rgba(105,140,45,0.5)"
        : "rgba(50,98,149,0.5)";
  }};
`;

const schools = ["FSE", "CSE", "ASE"];

const SchoolMajorSelector = ({ reviews, selectedSchool, selectedMajor, setSchool, setMajor }) => {

  return (
    <Menu>
      <SchoolMenu>
        {
          [fseIcon, cseIcon, aseIcon].map((icon, i) => <SchoolItem key={"school_button_" + i}><SchoolButton onClick={() => setSchool(schools[i])} active={selectedSchool === schools[i]}><SchoolImg src={icon} width="100" height="100" /></SchoolButton></SchoolItem>)
        }
      </SchoolMenu>

      <MajorMenu school={selectedSchool}>
        { majorsBySchool[selectedSchool]?.map(major => <Button school={selectedSchool} onClick={() => setMajor(major)}>{major} <ReviewsCount school={selectedSchool}>{reviews[selectedSchool][major]?.length}</ReviewsCount></Button>) }
      </MajorMenu>
    </Menu>
  );
}

export default SchoolMajorSelector;