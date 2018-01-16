const mongoose = require('mongoose');

const Building = mongoose.model('Building');
const ClassroomAll = mongoose.model('ClassroomAll');
const ClassroomMon = mongoose.model('ClassroomMon');
const ClassroomTue = mongoose.model('ClassroomTue');
const ClassroomWed = mongoose.model('ClassroomWed');
const ClassroomThur = mongoose.model('ClassroomThur');
const ClassroomFri = mongoose.model('ClassroomFri');
const buildingList = require('../data/buildingList.js');

const dayToClassroomModelMap = {
  1: ClassroomMon,
  2: ClassroomTue,
  3: ClassroomWed,
  4: ClassroomThur,
  5: ClassroomFri
};

function between(value, min, max) {
  return value >= min && value <= max;
}

function converTotalMinutesToPeriod(totalMinutes) {
  if (between(totalMinutes, 540, 630)) return 1;
  else if (between(totalMinutes, 640, 730)) return 2;
  else if (between(totalMinutes, 780, 870)) return 3;
  else if (between(totalMinutes, 885, 975)) return 4;
  else if (between(totalMinutes, 990, 1080)) return 5;
  else if (between(totalMinutes, 1095, 1185)) return 6;
  else if (between(totalMinutes, 1195, 1285)) return 7;
  else {
    return -1;
  }
}

const fetchBuildingClassrooms = async buildingName => {
  const building = await Building.find({
    name: buildingName
  });
  return building[0] ? building[0].classrooms : building;
};

const fetchOccupiedClassrooms = async (buildingName, day, period) => {
  const isWeekday = /^[1-5]$/.test(day);
  const isClassTime = /^[1-7]$/.test(period);
  if (isWeekday && isClassTime) {
    const targetClassroom = dayToClassroomModelMap[day];
    return await targetClassroom.aggregate(
      { $match: { building: buildingName } },
      { $unwind: '$courses' },
      {
        $match: {
          'courses.occurrences.start_period': { $lte: period },
          'courses.occurrences.end_period': { $gte: period }
        }
      },
      { $project: { name: 1, 'courses.id': 1, 'courses.title': 1 } }
    );
  }
  return [];
};

module.exports = app => {
  app.get('/api/current/:buildingName', async (req, res) => {
    const buildingName = req.params.buildingName;
    if (buildingList.allBuildings.includes(buildingName)) {
      const now = new Date();
      const dateString = now.toDateString();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const day = now.getDay();
      const totalMinutes = hours * 60 + minutes;
      const period = converTotalMinutesToPeriod(totalMinutes);
      try {
        const buildingClassrooms = await fetchBuildingClassrooms(buildingName);
        const occupiedClassrooms = await fetchOccupiedClassrooms(
          buildingName,
          day,
          period
        );
        res.send({
          date: { dateString, day, hours, minutes, period },
          buildingClassrooms,
          occupiedClassrooms
        });
      } catch (err) {
        if (!res.headersSent) {
          res.status(500).send('Error while fetching data');
        }
      }
    } else {
      //Requested building is not inside building list
      res.status(404).send('Not found');
    }
  });
};
