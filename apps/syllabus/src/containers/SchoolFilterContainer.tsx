import React from "react";

import { connect } from "react-redux";

import SchoolFilterForm from "@app/components/syllabus/SchoolFilterForm";
import { fetchCoursesBySchool, removeSchool } from "@app/redux/actions";
import { getSchools } from "@app/redux/reducers/fetchedCourses/schools";

interface ReduxStateProps {
  loadedSchools: string[];
}

interface ReduxDispatchProps {
  addSchool: (school: string) => void;
  removeSchool: (school: string) => void;
}

interface OwnProps {
  checkedSchools: string[];
  handleToggleFilter: (name: string, value: string) => void;
  isPopup: boolean;
}

const SchoolFilterContainer = ({
  checkedSchools,
  loadedSchools,
  addSchool,
  removeSchool,
  handleToggleFilter,
  isPopup,
}: ReduxStateProps & ReduxDispatchProps & OwnProps) => {
  const handleToggleSchoolFilter = (school: string) => {
    handleToggleFilter("school", school);
  };

  return (
    <SchoolFilterForm
      loadedSchools={loadedSchools}
      selectedSchools={checkedSchools || []}
      handleToggleFilter={handleToggleSchoolFilter}
      loadSyllabus={addSchool}
      removeSyllabus={removeSchool}
      isPopup={isPopup}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    loadedSchools: getSchools(state.fetchedCourses.schools) || [],
  };
};

const mapDispatchToProps = {
  addSchool: fetchCoursesBySchool,
  removeSchool,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SchoolFilterContainer);
