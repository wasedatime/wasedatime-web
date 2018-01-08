const mongoose = require('mongoose');

const Building = mongoose.model('Building');
const Classroom = mongoose.model('Classroom');
const buildingList = require('../data/buildingList.js');

const fetchBuildingClassrooms = async buildingName => {
  const building = await Building.find({
    name: buildingName
  });
  return building[0] ? building[0].classrooms : building;
};

const fetchOccupiedClassrooms = async (buildingName, day, minutes) => {
  return await Classroom.aggregate(
    { $match: { building: buildingName } },
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
};

module.exports = app => {
  app.get('/api/current/:buildingName', async (req, res) => {
    const buildingName = req.params.buildingName;
    if (buildingList.allBuildings.includes(buildingName)) {
      const date = new Date();
      const day = date.getDay();
      const minutes = date.getHours() * 60 + date.getMinutes();
      try {
        const buildingClassrooms = await fetchBuildingClassrooms(buildingName);
        const occupiedClassrooms = await fetchOccupiedClassrooms(
          buildingName,
          day,
          minutes
        );
        res.send({ date, buildingClassrooms, occupiedClassrooms });
      } catch (err) {
        res.status(500).send('Error while fetching data');
      }
    } else {
      //Requested building is not inside building list
      res.status(404).send('Not found');
    }
  });
};
