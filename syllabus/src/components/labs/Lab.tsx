import React, { useState } from "react";
import Review from "./Review";

const Lab = ({ name, reviews }) => {
  const [open, setOpen] = useState(false);
  
  return (
    <div>
      {/* Lab info */}
      {name}
      <Review />
    </div>
  );
}

export default Lab;