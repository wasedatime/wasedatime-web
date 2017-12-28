require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
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
app.use(helmet());

require('./routes/buildingRoutes')(app);
require('./routes/classroomRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  //serve up production assests
  app.use(express.static('client/build'));
  //serve up index.html if route is unrecognizable
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
