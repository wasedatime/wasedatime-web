const mongoose = require('mongoose');

const Building = mongoose.model('Building');

module.exports = app => {
  app.get('/api/buildings', async (req, res) => {
    const buildings = await Building.find({}).select({
      _id: 0,
      'classrooms.id': 0
    });
    res.send(buildings);
  });
  app.get('/api/buildings/:buildingName', async (req, res) => {
    const building = await Building.find({
      name: req.params.buildingName
    }).select({
      _id: 0,
      'classrooms.id': 0
    });
    res.send(building);
  });
};
