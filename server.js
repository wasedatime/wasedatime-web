require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/Course');
require('./models/Classroom');
require('./models/Building');

mongoose.Promise = global.Promise;

mongoose
  .connect(keys.mongoURI, {
    useMongoClient: true
  })
  .then(() => {
    console.log('App starting...');
  })
  .catch(err => {
    console.error('App starting error:', err.stack);
    process.exit(1);
  });

const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

require('./routes/buildingRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
