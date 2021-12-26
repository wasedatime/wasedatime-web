import React, { useState } from "react";
import styled from "styled-components";
import SchoolMajorSelector from "./SchoolMajorSelector";
import Lab from "./Lab";
import SyllabusTabs from "../SyllabusTabs";
import reviews from "../../assets/lab_reviews_by_school_major.json";

const LabsWrapper = styled.div`
  padding: 0px 2em;
`;

interface Props {
  path: string;
}

const Labs = ({ path }: Props) => {
  const [school, setSchool] = useState("FSE");
  const [major, setMajor] = useState("");

  return (
    <div className="theme-default">
      <SyllabusTabs />
      
      <SchoolMajorSelector reviews={reviews} selectedSchool={school} selectedMajor={major} setSchool={setSchool} setMajor={setMajor} />
      <LabsWrapper>
        {school && major && reviews[school][major]?.map(lab => <Lab name={lab.lab} reviews={lab.reviews} />)}
      </LabsWrapper>
    </div>
  );
}

export default Labs;