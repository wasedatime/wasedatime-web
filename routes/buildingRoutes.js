const mongoose = require('mongoose');

const Building = mongoose.model('Building');

module.exports = app => {
  app.get('/api/buildings', async (req, res) => {
    const buildings = await Building.find({}).select({
      name: 1
    });
    res.send(buildings);
  });

  app.get('/api/buildings/:buildingName', async (req, res) => {
    const building = await Building.findOne({
      name: req.params.buildingName
    });
    res.send(building);
  });
};
