import React, { useState } from "react";
import Review from "./Review";

const Lab = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <div>
      {/* Lab info */}
      <Review />
    </div>
  );
}

export default Lab;