import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ClassroomItem from './ClassroomItem';
import { Overlay } from '../styled-components/Overlay';
import { WrapperWithBackground } from '../styled-components/Wrapper';

const ExtendedOverlay = Overlay.extend`
  padding: 40px 25px 25px 25px;
`;

const TitleWrapper = styled('div')`
  align-self: flex-start;
  margin-top: 30px;
  margin-left: -40px;
  padding: 3px 10px;
  border-radius: 0px 8px 8px 0px;
  background-color: rgba(0, 0, 0, 0.2);
`;

const Title = styled('h3')`
  margin: 0 0;
  padding-left: 25px;
  font-family: 'Times';
  font-size: 3.2rem;
  font-weight: lighter;
  color: #ffffff;
`;

const Subtitle = styled('h4')`
  margin: 0 0;
  padding-left: 25px;
  font-size: 1.5rem;
  font-weight: lighter;
  color: #ffffff;
`;

const ListWrapper = styled('div')`
  display: flex;
  justify-content: center;
  margin-bottom: 8vh;
`;

const StyledList = styled('ul')`
  padding: 0;
  list-style: none;
  list-style-type: none;
`;

const ClassroomList = ({ buildingName, classrooms, background, date }) => {
  if (date && classrooms !== 0) {
    const { dateString, day, hours, minutes, period } = date;
    const hoursString = hours < 10 ? `0${hours}` : `${hours}`;
    const minutesString = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const periodString =
      /^[1-5]$/.test(day) && /^[1-7]$/.test(period)
        ? `Period ${period}`
        : 'Non-Class Time';
    const listItems = classrooms.map(classroom => {
      return <ClassroomItem key={classroom.id} classroom={classroom} />;
    });
    return (
      <WrapperWithBackground
        background={background}
        backgroundPhone={background}
      >
        <ExtendedOverlay>
          <TitleWrapper>
            <Title>{`Building ${buildingName}`}</Title>
            <Subtitle
            >{`${dateString} ${hoursString}:${minutesString}`}</Subtitle>
            <Subtitle>{periodString}</Subtitle>
          </TitleWrapper>
          <ListWrapper>
            <StyledList>{listItems}</StyledList>
          </ListWrapper>
        </ExtendedOverlay>
      </WrapperWithBackground>
    );
  } else {
    return (
      <WrapperWithBackground
        background={background}
        backgroundPhone={background}
      >
        <ExtendedOverlay />
      </WrapperWithBackground>
    );
  }
};

export default ClassroomList;

ClassroomList.propTypes = {
  date: PropTypes.object,
  buildingName: PropTypes.string.isRequired,
  classrooms: PropTypes.array.isRequired,
  background: PropTypes.string.isRequired
};
