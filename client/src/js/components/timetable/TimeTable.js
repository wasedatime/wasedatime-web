import React from 'react';
import styled from 'styled-components';

import { WrapperWithBackground } from '../../styled-components/Wrapper';
import { Overlay } from '../../styled-components/Overlay';
import background from '../../../img/home_background.jpg';
import backgroundPhone from '../../../img/home_background-phone.jpg';
import TimeRowList from './TimeRowList';
import DayColumnList from './DayColumnList';

const ExtendedOverlay = Overlay.extend`
  ${'' /* align-items: center; */}
  padding: 0 0px;
`;

const StyledTimeTable = styled('div')`
  display: flex;
  flex-direction: row;
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
