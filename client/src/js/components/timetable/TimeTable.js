import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import { Wrapper } from '../../styled-components/Wrapper';
import TimeRowList from './TimeRowList';
import DayColumnList from './DayColumnList';

const StyledTimeTable = styled('div')`
  display: flex;
  flex-direction: row;
  flex: 1 0 auto;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
`

 const TimeTable = () => {
  return (
    <Wrapper>
      <Helmet>
        <title>WaseTime - TimeTable</title>
        <meta name="description" content="Create Your Customizable TimeTable at Waseda University." />
        <meta property="og:title" content="WaseTime - TimeTable" />
        <meta property="og:description" content="Create Your Customizable TimeTable at Waseda University." />
        <meta property="og:site_name" content="WaseTime - TimeTable" />
      </Helmet>
      <StyledTimeTable>
        <TimeRowList />
        <DayColumnList />
      </StyledTimeTable>
    </Wrapper>
  );
}

export default TimeTable;
