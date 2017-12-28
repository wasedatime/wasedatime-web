const mongoose = require('mongoose');

const Building = mongoose.model('Building');
const buildingList = require('../api/buildingList.js');

module.exports = app => {
  app.get('/api/buildings', async (req, res) => {
    const buildings = await Building.find({}).select({
      name: 1
    });
    res.send(buildings);
  });

  app.get('/api/buildings/:buildingName', async (req, res) => {
    if (buildingList.allBldgs.includes(req.params.buildingName)) {
      const building = await Building.findOne({
        name: req.params.buildingName
      });
      res.send(building);
    } else {
      res.status(404).send("Sorry can't find that!");
    }
  });
};
