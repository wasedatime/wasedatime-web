const mongoose = require('mongoose');

const Stats = mongoose.model('Stats');

module.exports = app => {
  app.get('/api/stats', async (req, res) => {
    try {
      const stats = await Stats.findOne();
      res.send(stats);
    } catch (err) {
      if (!res.headersSent) {
        res.status(500).send('Error while fetching data');
      }
    }
  });
}
