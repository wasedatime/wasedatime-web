import React, { useState } from "react";
import { Link } from "react-router-dom";
import menuItems from "@app/constants/menuItems.json";

const BoardMenu = () => {
  return (
    <div className="flex text-lg justify-evenly">
      {menuItems.map((item) => (
        <>
          <div className="px-3.5 py-2 md:py-6">
            <div className={`text-center hover:text-light-main cursor-pointer`}>
              <Link to={`forum/${item.slug}`}>{item.title}</Link>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default BoardMenu;
