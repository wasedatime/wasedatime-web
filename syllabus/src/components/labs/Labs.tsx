import React, { useState } from "react";
import SchoolMajorSelector from "./SchoolMajorSelector";
import Lab from "./Lab";
import SyllabusTabs from "../SyllabusTabs";
import reviews from "../../assets/lab_reviews_by_school_major.json";

interface Props {
  path: string;
}

const Labs = ({ path }: Props) => {
  const [school, setSchool] = useState("");
  const [major, setMajor] = useState("");

  return (
    <div>
      <SyllabusTabs />
      
      <SchoolMajorSelector school={school} major={major} setSchool={setSchool} setMajor={setMajor} />
      {school && major && reviews[school][major]?.map(lab => <Lab name={lab.lab} reviews={lab.reviews} />)}
    </div>
  );
}

export default Labs;