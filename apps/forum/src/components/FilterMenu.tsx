import React, { useState } from "react";
import SchoolFilterForm from "@app/components/SchoolFilterForm";

const FilterMenu = () => {
  const [openSchoolModal, setOpenSchoolModal] = useState(false);

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
    </div>
  );
};

export default FilterMenu;
