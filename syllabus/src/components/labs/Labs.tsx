import React, { useState } from "react";
import SchoolMajorSelector from "./SchoolMajorSelector";
import Lab from "./Lab";

const Labs = () => {
  const [school, setSchool] = useState("");
  const [major, setMajor] = useState("");

  return (
    <div>
      <SchoolMajorSelector school={school} major={major} setSchool={setSchool} setMajor={setMajor} />
      {[].map(lab => <Lab />)}
    </div>
  );
}

export default Labs;