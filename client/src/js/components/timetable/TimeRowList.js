import React from 'react';
import styled from 'styled-components';

import {Wrapper} from '../../styled-components/Wrapper';
import TimeRowItem from './TimeRowItem';

// const ExtendedWrapper = Wrapper.extend`
//   flex-direction: row;
// `
const StyledList = styled('ol')`
  ${'' /* display: flex;
  flex-direction: row; */}
  padding: 0;
  list-style: none;
  list-style-type: none;
  position: sticky;
  ${'' /* z-index: 1030; */}
`;

const TimeRowList = (props) => {
  const times = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00',
                '16:00', '17:00', '18:00', '19:00', '20:00']
  const timeRows = times.map(time => {
    return (
      <TimeRowItem key={time} time={time}></TimeRowItem>
    );
  });
  return (
      <StyledList>
        {timeRows}
      </StyledList>
  )
}

export default TimeRowList;
