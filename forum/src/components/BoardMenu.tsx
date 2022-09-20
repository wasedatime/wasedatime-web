import React from "react";

const menuItems: any[] = [
  {
    icon: "",
    title: "Courses"
  }
];

const BoardMenu = () => {
  return (
    <div>
      { menuItems.map(item => <>{item.title}</>) }
    </div>
  )
}

export default BoardMenu;
