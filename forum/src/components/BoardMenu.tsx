import React, { useState } from "react";
import { Link } from "react-router-dom";

const menuItems: any[] = [
  {
    // icon: <CoursesIcon />,
    title: "Courses",
    slug: "courses",
  },
  {
    // icon: <ResearchIcon />,
    title: "Life",
    slug: "life",
  },
  {
    // icon: <JobHuntingIcon />,
    title: "Job Hunting",
    slug: "jobhunting",
  },
  {
    // icon: <FreeChatIcon />,
    title: "Free Chat",
    slug: "freechat",
  },
  // {
  //   icon: <FreeChatIcon />,
  //   title: "School Select"
  // },
];

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
