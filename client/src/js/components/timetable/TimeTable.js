import React from 'react';
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
      <StyledTimeTable>
        <TimeRowList />
        <DayColumnList />
      </StyledTimeTable>
    </Wrapper>
  );
}

export default TimeTable;
