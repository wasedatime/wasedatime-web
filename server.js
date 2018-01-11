require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const timeout = require('connect-timeout');

const keys = require('./config/keys');
require('./models/CourseSimplified');
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
app.use(timeout('15s'));
app.use(helmet());
app.use(haltOnTimedout);

require('./routes/buildingRoutes')(app);
require('./routes/classroomRoutes')(app);
require('./routes/courseRoutes')(app);

function haltOnTimedout(req, res, next) {
  if (!req.timedout) next();
}

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
