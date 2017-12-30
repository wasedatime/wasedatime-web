import React from 'react';

const getLocation = (building, classroom) => {
  if (building == '-1') {
    return `others-${classroom}`;
  } else {
    return `${building}-${classroom}`;
  }
};

const getKey = (day, start_period, location) => {
  return `${day}-${start_period}-${location}`;
};

const CoursePage = ({ coursePage }) => {
  const links = coursePage.links.map(link => {
    return (
      <li key={link.school}>
        <a href={link.link}>{link.school}</a>
      </li>
    );
  });

  const occurrences = coursePage.occurrences.map(occurrence => {
    const location = getLocation(occurrence.building, occurrence.classroom);
    const key = getKey(occurrence.day, occurrence.start_period, location);
    return (
      <li key={key}>
        <div>{`Day: ${occurrence.day}`}</div>
        <div>{`Time: ${occurrence.start_period} to ${
          occurrence.end_period
        } period`}</div>
        <div>{`Location: ${location}`}</div>
      </li>
    );
  });
  return (
    <div className="courseDetail__wrapper">
      <h2>{coursePage.title}</h2>
      <div>{`Code: ${coursePage.code}`}</div>
      <div>{`Instructor: ${coursePage.instructor}`}</div>
      <div>{`Year: ${coursePage.year}`}</div>
      <div>{`Term: ${coursePage.term}`}</div>
      <div>
        <div>Occurrences: </div>
        <ul>{occurrences}</ul>
      </div>
      <div>
        <div>More details on official syllabus database</div>
        <ul>{links}</ul>
      </div>
    </div>
  );
};

export default CoursePage;
