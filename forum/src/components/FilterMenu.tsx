import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import groups from "@app/constants/groups.json";
import List from "@app/components/form/List";

const FilterMenu = () => {
  const [openSchoolModal, setOpenSchoolModal] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="w-64 text-center px-4">
      <div className="my-2 mx-auto">
        <h1 className="form-item-title">School</h1>
        <button className="w-full p-2 bg-light-main text-white rounded-lg my-1">
          Select the School
        </button>
      </div>
      
      {
        Object.keys(groups).map((groupCategory, groupCategoryId) => (
          <List
            key={groupCategoryId}
            listId={groupCategoryId.toString()}
            title={groupCategory}
            items={groups[groupCategory]}
          />
        ))
      }
    </div>
  );
};

export default FilterMenu;
