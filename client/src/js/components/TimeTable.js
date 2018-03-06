import React from 'react';
import styled from 'styled-components';

import { media } from '../utils/styledComponents';
import { WrapperWithBackground } from '../styled-components/Wrapper';
import { Overlay } from '../styled-components/Overlay';
import background from '../../img/home_background.jpg';
import backgroundPhone from '../../img/home_background-phone.jpg';

const ExtendedOverlay = Overlay.extend`
  align-items: center;
  padding: 0 15px;
`;

const Banner = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: fixed;
  height: 36px;
  width: 100%;
  background-color: #777777;
  color: white;
  z-index: 1030;
`;

class TimeTable extends React.Component {
  render() {
    return (
      <WrapperWithBackground
        background={background}
        backgroundPhone={backgroundPhone}
      >
        <ExtendedOverlay id="timetable-overlay">
          <Banner>Time Table coming soon!! (Hopefully...)</Banner>
        </ExtendedOverlay>
      </WrapperWithBackground>
    );
  }
}

export default TimeTable;
