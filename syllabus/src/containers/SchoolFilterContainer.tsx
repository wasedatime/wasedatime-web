import React from "react";
import { connect } from "react-redux";
import { getSchools } from "../redux/reducers/fetchedCourses/schools";
import { fetchCoursesBySchool, removeSchool } from "../redux/actions";
import SchoolFilterForm from "../components/syllabus/SchoolFilterForm";

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
  isPopup
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
  removeSchool: removeSchool,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SchoolFilterContainer);
