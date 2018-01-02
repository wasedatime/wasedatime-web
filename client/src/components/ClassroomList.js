import React from 'react';
import styled from 'styled-components';

import ClassroomItem from './ClassroomItem';
import PropTypes from 'prop-types';

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  background-image: url(${props => props.backgroundUrl});
  background-position: center, center;
  background-size: cover;
  background-repeat: no-repeat;
`;

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

const ListWrapper = styled('div')`
  display: flex;
  justify-content: center;
  margin-bottom: 8vh;
`;

const StyledList = styled('ul')`
  text-align: center;
  padding: 0;
  list-style: none;
  list-style-type: none;
`;

const ClassroomList = props => {
  if (props.classrooms !== 0) {
    const listItems = props.classrooms.map(classroom => {
      return <ClassroomItem key={classroom.id} classroom={classroom} />;
    });
    return (
      <Wrapper backgroundUrl={props.backgroundUrl}>
        <Overlay>
          <TitleWrapper>
            <Title>{`Building ${props.bldgName}`}</Title>
          </TitleWrapper>
          <ListWrapper>
            <StyledList>{listItems}</StyledList>
          </ListWrapper>
        </Overlay>
      </Wrapper>
    );
  } else {
    return <div />;
  }
};

export default ClassroomList;

ClassroomList.propTypes = {
  bldgName: PropTypes.string.isRequired,
  classrooms: PropTypes.array.isRequired,
  backgroundUrl: PropTypes.string.isRequired
};
