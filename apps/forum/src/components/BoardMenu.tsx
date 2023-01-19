import React, { useState } from "react";
import { Link } from "react-router-dom";
import boards from "@app/constants/boards.json";

const BoardMenu = () => {
  return (
    <div className="flex text-lg justify-evenly">
      {boards.map((board, i) => (
        <div key={i} className="px-3.5 py-2 md:py-6">
          <div className={`text-center hover:text-light-main cursor-pointer`}>
            <Link to={`forum/${board.slug}`}>{board.title}</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BoardMenu;
