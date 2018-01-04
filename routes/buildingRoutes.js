const mongoose = require('mongoose');

const Building = mongoose.model('Building');
const buildingList = require('../api/buildingList.js');

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
      res.status(500).send('Error while fetching data from database');
    }
  });

  app.get('/api/buildings/:buildingName', async (req, res) => {
    try {
      if (buildingList.allBldgs.includes(req.params.buildingName)) {
        const building = await Building.findOne({
          name: req.params.buildingName
        });
        res.send(building);
      } else {
        res.status(404).send("Sorry can't find that!");
      }
    } catch (err) {
      res.status(500).send('Error while fetching data from database');
    }
  });
};
