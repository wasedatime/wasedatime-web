import React from 'react';
import styled from 'styled-components';

import { WrapperWithBackground } from '../../styled-components/Wrapper';
import { Overlay } from '../../styled-components/Overlay';
import TimeRowList from './TimeRowList';
import DayColumnList from './DayColumnList';

const ExtendedOverlay = Overlay.extend`
  ${'' /* align-items: center; */}
  background-color: rgba(0, 0, 0, 0);
  padding: 0 0px;
`;

const StyledTimeTable = styled('div')`
  display: flex;
  flex-direction: row;
  flex: 1 0 auto;
`

 const TimeTable = () => {
  return (
    <WrapperWithBackground
      // background={background}
      // backgroundPhone={backgroundPhone}
    >
      <ExtendedOverlay id="timetable-overlay">
        <StyledTimeTable>
          <TimeRowList />
          <DayColumnList />
        </StyledTimeTable>
      </ExtendedOverlay>
    </WrapperWithBackground>
  );
}

export default TimeTable;
