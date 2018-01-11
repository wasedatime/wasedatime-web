const mongoose = require('mongoose');

const Building = mongoose.model('Building');
const buildingList = require('../data/buildingList.js');

module.exports = app => {
  app.get('/api/buildings', async (req, res) => {
    try {
      const buildings = await Building.find({})
        .sort({ name: 1 })
        .select({
          name: 1
        });
      res.send(buildings);
    } catch (err) {
      if (!res.headersSent) {
        res.status(500).send('Error while fetching data');
      }
    }
  });

  app.get('/api/buildings/:buildingName', async (req, res) => {
    const buildingName = req.params.buildingName;
    if (buildingList.allBuildings.includes(buildingName)) {
      try {
        const building = await Building.findOne({
          name: buildingName
        });
        res.send(building);
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
