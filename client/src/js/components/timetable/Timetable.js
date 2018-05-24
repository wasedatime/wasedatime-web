import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import { Wrapper } from '../../styled-components/Wrapper';
import TimeRowList from './TimeRowList';
import DayColumnList from './DayColumnList';

const StyledTimetable = styled('div')`
  display: flex;
  flex-direction: row;
  flex: 1 0 auto;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
`

 const Timetable = () => {
  return (
    <Wrapper>
      <Helmet>
        <title>WaseTime - Timetable</title>
        <meta name="description" content="Create Your Customizable Timetable at Waseda University." />
        <meta property="og:title" content="WaseTime - Timetable" />
        <meta property="og:description" content="Create Your Customizable Timetable at Waseda University." />
        <meta property="og:site_name" content="WaseTime - Timetable" />
      </Helmet>
      <StyledTimetable>
        <TimeRowList />
        <DayColumnList />
      </StyledTimetable>
    </Wrapper>
  );
}

export default Timetable;
