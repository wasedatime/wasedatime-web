const mongoose = require('mongoose');

const Building = mongoose.model('Building');
const Classroom = mongoose.model('Classroom');

module.exports = app => {
  app.get('/api/current/:buildingName', async (req, res) => {
    const date = new Date();
    const day = date.getDay();
    const minutes = 550; //date.getHours() * 60 + date.getMinutes();
    // const building = await Building.find({
    //   name: req.params.buildingName
    // });

    // const building_classrooms = building[0].classrooms;
    const occupiedClassrooms = await Classroom.aggregate(
      { $match: { building: req.params.buildingName } },
      { $unwind: '$courses' },
      {
        $match: {
          'courses.occurrences.day': day,
          'courses.occurrences.start_time': { $lte: minutes },
          'courses.occurrences.end_time': { $gte: minutes }
        }
      },
      { $project: { name: 1, 'courses.id': 1, 'courses.title': 1 } }
    );
    res.send({ date, occupiedClassrooms });
  });
};
