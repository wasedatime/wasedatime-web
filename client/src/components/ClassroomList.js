import React from 'react';
import ClassroomItem from './ClassroomItem';

const ClassroomList = props => {
  if (props.classrooms !== 0) {
    const listItems = props.classrooms.map(classroom => {
      return <ClassroomItem key={classroom.id} children={classroom} />;
    });
    return (
      <div>
        <div className="classroomList__title__wrapper">
          <h3 className="classroomList__title">{props.bldgName}</h3>
        </div>
        <div className="classroomList__wrapper">
          <ul className="classroomList">{listItems}</ul>
        </div>
      </div>
    );
  } else {
    return <div />;
  }
};

export default ClassroomList;
