const mongoose = require('mongoose');

const Course = mongoose.model('Course');
const CourseSimplified = mongoose.model('CourseSimplified');

module.exports = app => {
  app.get('/api/courses', async (req, res) => {
    try {
      const courses = await CourseSimplified.find({}).sort({ title: 1 });
      res.send(courses);
    } catch (err) {
      if (!res.headersSent) {
        res.status(500).send('Error while fetching data');
      }
    }
  });

  app.get('/api/courses/:courseId', async (req, res) => {
    try {
      const course = await Course.findOne({
        _id: req.params.courseId
      });
      course ? res.send(course) : res.status(404).send('Not found');
    } catch (err) {
      if (err.name === 'CastError') {
        //Invalid ObjectId
        res.status(404).send('Not found');
      } else {
        if (!res.headersSent) {
          res.status(500).send('Error while fetching data');
        }
      }
    }
  });
};
