import React from "react";
import styled from "styled-components";
import majorsBySchool from '../../constants/majors-by-school';
import Tab from "semantic-ui-react/dist/commonjs/modules/Tab";
import { Badge } from "../styles/Badge";

const Menu = styled.div`
  margin: 2em;
`;

const Button = styled("button")`
  background-color: #fff;
  color: #b51e36;
  border-radius: 5px;
  padding: 0px 1em;
  margin: 0.5em;
  font-size: 1.4rem;
`;

const ReviewsCount = styled(Badge)`
  background-color: #ccc;
`;

const schools = ["FSE", "CSE", "ASE"];

const SchoolMajorSelector = ({ reviews, selectedSchool, selectedMajor, setSchool, setMajor }) => {
  const panes = schools.map(school => ({
    menuItem: school,
    render: () => <Tab.Pane>{ majorsBySchool[school]?.map(major => <Button onClick={() => setMajor(major)}>{major} <ReviewsCount>{reviews[school][major]?.length}</ReviewsCount></Button>) }</Tab.Pane>
  }));

  return (
    <Menu>
      <Tab menu={{ secondary: true, pointing: true }} panes={panes} onTabChange={(e, data) => setSchool(schools[data.activeIndex])} />
    </Menu>
  );
}

export default SchoolMajorSelector;