import React from "react";
import { Link } from "react-router-dom";
import boards from "@app/constants/boards.json";

const BoardMenu = () => {
  return (
    <div className="pl-2 md:pl-4 lg:pl-10">
      <h3 className="form-item-title">Topics</h3>
      <div className="flex flex-col sm:text-xl text-sm text-light-text1 text-light-text1 dark:text-dark-text1">
        {boards.map((board, i) => (
          <div
            key={i}
            className=" py-1 md:py-4 flex hover:text-light-main hover:text-dark-main"
          >
            {/* <span className="text-left list-inside list-disc">•</span> */}
            <div className="text-left cursor-pointer border p-2 rounded-lg gap-2">
              <Link to={`/${board.slug}`} className="text-xl lg:text-2xl">
                {board.title}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardMenu;
