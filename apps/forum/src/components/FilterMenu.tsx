import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import groups from "@app/constants/groups.json";
import CheckList from "@app/components/form/CheckList";
import SchoolFilterForm from "@app/components/SchoolFilterForm";
import { currentGroupsState } from "@app/recoil/atoms";

const FilterMenu = () => {
  const [currentGroups, setCurrentGroups] = useRecoilState(currentGroupsState);
  const [openSchoolModal, setOpenSchoolModal] = useState(false);
  const navigate = useNavigate();

  const toggleGroup = (group: string) => {
    if (currentGroups.includes(group)) {
      var groups = [...currentGroups];
      const index = groups.indexOf(group);
      if (index > -1) {
        groups.splice(index, 1);
      }
      setCurrentGroups(groups);
    } else {
      setCurrentGroups([...currentGroups, group]);
    }
  };

  const isGroupChecked = (group: string) => currentGroups.includes(group);

  const toggleSchoolFilter = () => {
    setOpenSchoolModal(!openSchoolModal);
  };

  return (
    <div className=" text-center px-2 lg:px-10">
      <div className="my-2 mx-auto">
        <h1 className="form-item-title">School</h1>
        <button
          className="w-full p-2 bg-light-main text-white rounded-lg my-1"
          onClick={toggleSchoolFilter}
        >
          Select the School
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
