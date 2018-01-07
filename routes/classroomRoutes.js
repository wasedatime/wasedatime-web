const mongoose = require('mongoose');

const Building = mongoose.model('Building');
const Classroom = mongoose.model('Classroom');

module.exports = app => {
  app.get('/api/current/:buildingName', async (req, res) => {
    try {
      const date = new Date();
      const day = date.getDay();
      const minutes = date.getHours() * 60 + date.getMinutes();
      const building = await Building.find({
        name: req.params.buildingName
      });

      const buildingClassrooms = building[0].classrooms;
      const occupiedClassrooms = await Classroom.aggregate(
        { $match: { building: req.params.buildingName } },
        { $unwind: '$courses' },
        {
          $match: {
            'courses.occurrences.day': day,
            'courses.occurrences.start_time': { $lte: minutes },
            'courses.occurrences.end_time': { $gt: minutes }
          }
        },
        { $project: { name: 1, 'courses.id': 1, 'courses.title': 1 } }
      );
      res.send({ date, buildingClassrooms, occupiedClassrooms });
    } catch (err) {
      res.status(500).send('Error while fetching data from database');
    }
  });
};
