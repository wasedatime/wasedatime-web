import React from 'react';
import styled from 'styled-components';

import DayColumnItem from './DayColumnItem';

const StyledList = styled('ol')`
  display: flex;
  flex-direction: row;
  flex: 1 0 auto;
  justify-content: space-between;
  padding: 0;
  margin: 0 auto;
  list-style: none;
  list-style-type: none;
`;

const DayColumnList = (props) => {
  const courseMon = [ {
      "title": "Biochemistry",
      "instructor": "NOMURA, Wataru/HOZUMI, Kentaro",
      "occurrences": [
        {
          "day": 1,
          "start_period": "2",
          "end_period": "2",
          "location": "51-07-06"
        }
      ]
    }
  ];
  const courseFri = [ {
      "title": "Fundamental Statistics Thermodynamics",
      "instructor": "HARAYAMA, Takahisa",
      "occurrences": [
          {
              "day": 5,
              "start_period": "2",
              "end_period": "2",
              "location": "54-304"
          }
      ]
    }
  ];
  const courses = {
    "Mon": courseMon,
    "Tue": [],
    "Wed": [],
    "Thu": [],
    "Fri": courseFri,
    "Sat": []
  };
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  // const days = [1, 2, 3, 4, 5, 6];
  const dayColumns = days.map(day => {
    return (
      <DayColumnItem key={day} day={day} courses={courses[day]}></DayColumnItem>
    );
  });
  return (
      <StyledList>
        {dayColumns}
      </StyledList>
  )
}

export default DayColumnList;
