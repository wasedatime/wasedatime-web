import React from 'react';
import { Helmet } from 'react-helmet';

import { Wrapper } from '../../styled-components/Wrapper';
import Timetable from '../../components/timetable/Timetable';
import SemesterSwitcher from '../../components/timetable/SemesterSwitcher';
import withFetchCourses from '../../hocs/withFetchCourses';

class TimetableContainer extends React.Component {
  render() {
    const addedCoursesAndPrefs = this.props.addedCoursesAndPrefs.fall;
    return (
      <Wrapper>
        <Helmet>
          <title>WaseTime - Timetable</title>
          <meta
            name="description"
            content="Create Your Own Timetable at Waseda University."
          />
          <meta property="og:title" content="WaseTime - Timetable" />
          <meta
            property="og:description"
            content="Create Your Own Timetable at Waseda University."
          />
          <meta property="og:site_name" content="WaseTime - Timetable" />
        </Helmet>
        <SemesterSwitcher />
        <Timetable addedCoursesAndPrefs={addedCoursesAndPrefs} />
      </Wrapper>
    );
  }
}

export default withFetchCourses(TimetableContainer);
