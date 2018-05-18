import React from 'react';
import styled from 'styled-components';

import {Wrapper} from '../../styled-components/Wrapper';
import DayColumnItem from './DayColumnItem';

const StyledList = styled('ol')`
  display: flex;
  flex-direction: row;
  flex: 1 0 auto;
  justify-content: space-between;
  padding: 0;
  list-style: none;
  list-style-type: none;
`;

const DayColumnList = (props) => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  const dayColumns = days.map(day => {
    return (
      <DayColumnItem key={day} day={day}></DayColumnItem>
    );
  });
  return (
      <StyledList>
        {dayColumns}
      </StyledList>
  )
}

export default DayColumnList;
