const mongoose = require('mongoose');

const Course = mongoose.model('Course');

module.exports = app => {
  app.get('/api/courses/:courseId', async (req, res) => {
    const course = await Course.findOne({
      _id: req.params.courseId
    });
    res.send(course);
  });
};
