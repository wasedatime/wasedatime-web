import React from "react";
import styled from "styled-components";
import majorsBySchool from '../../constants/majors-by-school';

const Button = styled("button")`
  color: #b51e36;
  border: 5px solid #b51e36;
  border-radius: 5px;
  padding: 0px 1em;
  margin: 0.5em;
`;

const SchoolMajorSelector = ({ school, major, setSchool, setMajor }) => {

  return (
    <div>
      <div>
        <Button onClick={() => setSchool("FSE")}>FSE</Button>
        <Button onClick={() => setSchool("CSE")}>CSE</Button>
        <Button onClick={() => setSchool("ASE")}>ASE</Button>
      </div>
      <div>
        {
          school && majorsBySchool[school].map(major => <Button onClick={() => setMajor(major)}>{major}</Button>)
        }
      </div>
    </div>
  );
}

export default SchoolMajorSelector;