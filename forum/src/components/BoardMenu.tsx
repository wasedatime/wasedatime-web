import React from "react";
import { CoursesIcon, CoursesIconHovered, } from './icons/CoursesIcon'
import { FreeChatIcon, FreeChatIconHovered } from './icons/FreeChatIcon';
import { JobHuntingIcon, JobHuntingIconHovered } from './icons/JobHuntingIcon';
import { LifeIcon, LifeIconHovered } from "./icons/LifeIcon";
import { ResearchIcon, ResearchIconHovered } from './icons/ResearchIcon';




const menuItems: any[] = [
  {
    // icon: <CoursesIcon />,
    title: "Courses"
  },
  {
    // icon: <ResearchIcon />,
    title: "Research"
  },
  {
    // icon: <JobHuntingIcon />,
    title: "Job Hunting"
  },
  {
    // icon: <FreeChatIcon />,
    title: "Free Chat"
  },
  // {
  //   icon: <FreeChatIcon />,
  //   title: "School Select"
  // },

];

const BoardMenu = () => {
  return (
    <div className='bg-gray-100 flex justify-evenly'>
      { menuItems.map(item => <>
      <div className="px-3.5 py-2 md:py-6">
        <div className="text-center hover:text-light-main cursor-pointer">
      <div>{item.icon}</div>
      <div>{item.title}</div> 
      </div>
        </div>
        </>
        ) }
    </div>
  )
}

export default BoardMenu;
