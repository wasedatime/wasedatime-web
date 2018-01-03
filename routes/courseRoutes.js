const mongoose = require('mongoose');

const Course = mongoose.model('Course');
const CourseSimplified = mongoose.model('CourseSimplified');

module.exports = app => {
  app.get('/api/courses', async (req, res) => {
    try {
      const courses = await CourseSimplified.find({});
      res.send(courses);
    } catch (err) {
      res.status(500).send('Error while fetching data from database');
    }
  });

  app.get('/api/courses/:courseId', async (req, res) => {
    try {
      const course = await Course.findOne({
        _id: req.params.courseId
      });
      res.send(course);
    } catch (err) {
      if (err.name === 'CastError') {
        //Data was not found
        res.status(200).send({});
      } else {
        res.status(500).send('Error while fetching data from database');
      }
    }
  });
};
