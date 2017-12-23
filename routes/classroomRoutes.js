const mongoose = require('mongoose');

const Building = mongoose.model('Building');
const Classroom = mongoose.model('Classroom');

module.exports = app => {
  app.get('/roomfinder/current/:buildingName', async (req, res) => {
    var date = new Date();
    var day = 1;
    var minutes = 590;
    //var day = date.getDay();
    //var minutes = date.getHours() * 60 + date.getMinutes();
    const classrooms = await Building.find({
      name: req.params.buildingName
    }).select({
      _id: 0,
      'classrooms.id': 0
    });

    const occupied_classrooms = await Classroom.aggregate(
      { $match: { building: req.params.buildingName } },
      { $unwind: '$courses' },
      {
        $match: {
          'courses.occurrences.day': day,
          'courses.occurrences.start_time': { $lte: minutes },
          'courses.occurrences.end_time': { $gte: minutes }
        }
      },
      { $project: { _id: 0, name: 1, 'courses.id': 1, 'courses.title': 1 } }
    );
    res.send({ classrooms, occupied_classrooms });
  });
};
