import React from 'react';
import ClassroomItem from './ClassroomItem';

const ClassroomList = props => {
  if (props.classrooms !== 0) {
    const listItems = props.classrooms.map(classroom => {
      return <ClassroomItem key={classroom.id} children={classroom} />;
    });
    return (
      <div>
        <h3>{props.bldgName}</h3>
        <ul>{listItems}</ul>
      </div>
    );
  } else {
    return <div />;
  }
};

export default ClassroomList;
