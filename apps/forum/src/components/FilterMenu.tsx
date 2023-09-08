import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import SchoolFilterForm from "@app/components/SchoolFilterForm";
import { currentSchoolState } from "@app/recoil/atoms";

const FilterMenu = () => {
  const [currentSchools, setCurrentSchools] =
    useRecoilState(currentSchoolState);
  const [openSchoolModal, setOpenSchoolModal] = useState(false);
  const navigate = useNavigate();

  const toggleGroup = (group: string) => {
    if (currentSchools.includes(group)) {
      var groups = [...currentSchools];
      const index = groups.indexOf(group);
      if (index > -1) {
        groups.splice(index, 1);
      }
      setCurrentSchools(groups);
    } else {
      setCurrentSchools([...currentSchools, group]);
    }
  };

  const isGroupChecked = (group: string) => currentSchools.includes(group);

  const toggleSchoolFilter = () => {
    setOpenSchoolModal(!openSchoolModal);
  };

  return (
    <div className=" text-center pl-2 lg:pl-10">
      <div className="my-2 mx-auto">
        <h1 className="form-item-title">School</h1>
        <button
          className="w-full p-2 bg-light-main text-white rounded-lg my-1"
          onClick={toggleSchoolFilter}
        >
          Select a School
        </button>
        {openSchoolModal && (
          <SchoolFilterForm
            isOpen={openSchoolModal}
            setOpen={setOpenSchoolModal}
          />
        )}
      </div>

      {/* {Object.keys(groups).map((groupCategory, groupCategoryId) => (
        <CheckList
          key={groupCategoryId}
          listId={groupCategoryId.toString()}
          title={groupCategory}
          items={groups[groupCategory]}
          onListItemToggle={toggleGroup}
          isItemChecked={isGroupChecked}
        />
      ))} */}
    </div>
  );
};

export default FilterMenu;
