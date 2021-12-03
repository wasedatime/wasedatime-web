import React, { useState } from "react";
import SchoolMajorSelector from "./SchoolMajorSelector";
import Lab from "./Lab";
import SyllabusTabs from "../SyllabusTabs";

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
      {[].map(lab => <Lab />)}
    </div>
  );
}

export default Labs;