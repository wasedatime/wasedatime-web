import React, { useState } from "react";
import { Link } from "react-router-dom";
import boards from "@app/constants/boards.json";

const BoardMenu = () => {
  return (
    <div className="px-2 md:px-4 lg:px-10">
      <h1 className="form-item-title">Topics</h1>
      <div className="flex flex-col sm:text-lg text-sm">
        {boards.map((board, i) => (
          <div
            key={i}
            className="px-3.5 py-1 md:py-4 flex hover:text-light-main"
          >
            <span className="text-left list-inside list-disc">•</span>
            <div className="text-left ml-2 cursor-pointer ">
              <Link to={`forum/${board.slug}`}>{board.title}</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardMenu;

// const BoardMenu = () => {
//   return (
//     <div className="w-40 text-left px-4">
//       <h1 className="form-item-title">Topics</h1>
//       <div className="flex text-lg justify-evenly flex-col">
//         {boards.map((board, i) => (
//           <div key={i} className="px-3.5 py-2 md:py-6">
//             <div className={`text-center hover:text-light-main cursor-pointer`}>
//               <Link to={`forum/${board.slug}`}>{board.title}</Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BoardMenu;
