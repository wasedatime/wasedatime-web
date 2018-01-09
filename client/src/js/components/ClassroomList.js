import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ClassroomItem from './ClassroomItem';
import { WrapperWithBackground } from '../styledComponents/Wrapper';

const Overlay = styled('div')`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  padding: 40px 25px 25px 25px;
  background-color: rgba(0, 0, 0, 0.2);
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
    const { dateString, hours, minutes } = date;
    const listItems = classrooms.map(classroom => {
      return <ClassroomItem key={classroom.id} classroom={classroom} />;
    });
    return (
      <WrapperWithBackground
        background={background}
        backgroundPhone={background}
      >
        <Overlay>
          <TitleWrapper>
            <Title>{`Building ${buildingName}`}</Title>
            <Subtitle>{`${dateString} ${hours}:${minutes}`}</Subtitle>
          </TitleWrapper>
          <ListWrapper>
            <StyledList>{listItems}</StyledList>
          </ListWrapper>
        </Overlay>
      </WrapperWithBackground>
    );
  } else {
    return (
      <WrapperWithBackground
        background={background}
        backgroundPhone={background}
      >
        <Overlay />
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
