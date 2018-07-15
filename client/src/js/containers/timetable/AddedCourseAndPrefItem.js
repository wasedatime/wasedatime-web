import React from 'react';
import { connect } from 'react-redux';
import Alert from 'react-s-alert';

import { removeCourse } from '../../actions/syllabus';

class AddedCourseAndPrefItem extends React.Component {

  handleRemoveCourse = event => {
    event.preventDefault();
    const { course } = this.props;
    this.props.removeCourse(course._id);
    Alert.success('Course removed.', {
      position: 'bottom',
      effect: 'jelly',
    });
  }

  render() {
    const { addedCourseAndPref } = this.props;
    const { course } = addedCourseAndPref;
    return (
      <div>
        {course.title}
      </div>
    );
  }
}

const mapDispatchToProps = {
  removeCourse
};

export default connect(null, mapDispatchToProps)(
  AddedCourseAndPrefItem
);
