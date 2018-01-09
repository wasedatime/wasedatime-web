import React from 'react';
import styled from 'styled-components';

import { WrapperWithBackground } from '../styledComponents/Wrapper';
import { Overlay } from '../styledComponents/Overlay';
import background from '../../img/home_background-sm.jpg';
import backgroundPhone from '../../img/home_background-phone.jpg';

const WasedaNishiwasedaBusUri =
  'https://www.waseda.jp/fsci/assets/uploads/2017/06/2017waseda-nishiwaseda-shuttle-bus-timetable.pdf';

const ExtendedOverlay = Overlay.extend`
  align-items: center;
  padding: 0 25px;
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

const InfoWrapper = styled('div')`
  flex: 1 0 500px;
  transform: translate(0, 14vh);
  @media screen and (max-width: 430px) {
    transform: translate(0, 11vh);
  }
`;

const StyledAnchor = styled('a')`
  color: rgba(255, 255, 255, 1);
  text-align: center;
  text-decoration: none;
  font-size: 2rem;
  font-weight: 330;
`;

const StyledHeading = styled('h1')`
  font-family: Times;
  font-size: 4rem;
  font-weight: 400;
  color: #000000;
  @media screen and (max-width: 430px) {
    font-size: 3.8rem;
  }
`;

const Bus = () => {
  return (
    <WrapperWithBackground
      background={background}
      backgroundPhone={backgroundPhone}
    >
      <ExtendedOverlay>
        <Banner>More features coming soon!!</Banner>
        <InfoWrapper>
          <StyledHeading>Official Link</StyledHeading>
          <StyledAnchor href={WasedaNishiwasedaBusUri} target="_blank">
            2017-2018 Waseda-Nishiwaseda Bus Schedule
          </StyledAnchor>
        </InfoWrapper>
      </ExtendedOverlay>
    </WrapperWithBackground>
  );
};

export default Bus;
