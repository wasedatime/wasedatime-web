import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledListItem = styled('li')`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 1.7rem;
`;

const Classroom = styled('div')`
  display: inline-block;
  height: 100%;
  margin: 4px 5px 4px 0px;
  padding: 12px;
  text-decoration: none;
  border-radius: 8px;
  border: none;
`;
const VacantClassroom = styled(Classroom)`
  background-color: #ceffaf;
`;

const OccupiedClassroom = styled(Classroom)`
  background-color: #ffafaf;
`;

const Course = styled('div')`
  display: flex;
  flex: 1 1 150px;
  background-color: #ffafaf;
  margin: 4px 0px 4px 0px;
  padding: 12px;
  text-decoration: none;
  border-radius: 8px;
  border: none;
`;
//TODO we have cases where multiple classes take place in one classroom...
const ClassroomItem = ({ classroom }) => {
  if (typeof classroom.courses !== 'undefined') {
    return (
      <StyledListItem>
        <OccupiedClassroom>{classroom.name}</OccupiedClassroom>
        <Course>
          <div>{classroom.courses.title}</div>
        </Course>
      </StyledListItem>
    );
  } else {
    return (
      <StyledListItem>
        <VacantClassroom>{classroom.name}</VacantClassroom>
      </StyledListItem>
    );
  }
};

export default ClassroomItem;

ClassroomItem.propTypes = {
  classroom: PropTypes.object.isRequired
};
