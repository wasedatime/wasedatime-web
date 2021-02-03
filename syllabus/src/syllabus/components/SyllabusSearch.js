import React from "react";
import MediaQuery from "react-responsive";
import styled from "styled-components";

import AddedCourseListSwitchContainer from "../../containers/syllabus/AddedCourseListSwitchContainer";
import FetchedCourseListSearch from "../../containers/syllabus/FetchedCourseListSearch";
import { RowWrapper } from "../common/Wrapper";
import { SideBar } from "../common/SideBar";
import { media, sizes } from "../common/utils";
import withFetchCourses from "../../hocs/withFetchCourses";

const ExtendedRowWrapper = styled(RowWrapper)`
  flex: 1 0 0;
  padding-top: 67px;
  ${media.tablet`padding-top: 0px;`}
`;

const SyllabusSearch = (props) => {
  const { addedCoursesAndPrefs, fetchedCourses } = props;
  return (
    <ExtendedRowWrapper>
      <MediaQuery minWidth={sizes.tablet}>
        {(matches) =>
          matches && (
            <SideBar flexBasis="21em">
              <AddedCourseListSwitchContainer
                addedCoursesAndPrefs={addedCoursesAndPrefs}
              />
            </SideBar>
          )
        }
      </MediaQuery>
      <FetchedCourseListSearch fetchedCourses={fetchedCourses} />
    </ExtendedRowWrapper>
  );
};

export default withFetchCourses(SyllabusSearch);
