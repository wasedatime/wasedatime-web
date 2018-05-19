import React from 'react';
import styled from 'styled-components';

import TimeRowItem from './TimeRowItem';

const StyledList = styled('ol')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0;
  list-style: none;
  list-style-type: none;
  position: sticky;
  padding-top: 2rem;
  z-index: 1030;
  left: 0;
`;

const TimeRowList = (props) => {
  const periods = [
    {
      's':'0900', 'e':'1030', 'p':1
    }, {
      's':'1040', 'e':'1210', 'p':2
    }, {
      's':'1300', 'e':'1430', 'p':3
    }, {
      's':'1445', 'e':'1615', 'p':4
    }, {
      's':'1630', 'e':'1800', 'p':5
    }, {
      's':'1815', 'e':'1945', 'p':6
    }, {
      's':'1955', 'e':'2125', 'p':7
    }
  ]
  const timeRows = periods.map(period => {
    return (
      <TimeRowItem key={period.p} period={period}></TimeRowItem>
    );
  });
  return (
      <StyledList>
        {timeRows}
      </StyledList>
  )
}

export default TimeRowList;
