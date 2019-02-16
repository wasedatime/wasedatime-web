require('dotenv').config({ path: '/var/www/.env' });
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const timeout = require('connect-timeout');
const fs = require('fs');

const keys = require('./config/keys');
require('./models/CourseSimplified');
require('./models/Course');
require('./models/Classroom');
require('./models/Building');
require('./models/Stats');

mongoose.Promise = global.Promise;

mongoose
  .connect(keys.mongoURI, { useNewUrlParser: true })
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
require('./routes/statsRoutes')(app);

function haltOnTimedout(req, res, next) {
  if (!req.timedout) next();
}

const sendCustomizedIndexFile = (filePath, title, description) => {
  return function(req, res, next) {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
        res.sendFile(filePath);
      } else {
        data = data.replace(/%TITLE%/g, title);
        data = data.replace(/%DESCRIPTION%/g, description);
        res.send(data);
      }
    });
  };
};

// process.env is read from the .env file on server
if (process.env.NODE_ENV === 'production') {
  //serve up production assests, disable directory indexing
  app.use(express.static('client/build', { index: false }));
  //serve up index.html if route is unrecognizable
  const path = require('path');
  const indexFilePath = path.join(__dirname, 'client', 'build', 'index.html');

  app.get(
    '/',
    sendCustomizedIndexFile(
      indexFilePath,
      'WaseTime',
      'An unofficial app for Syllabus Searching, Classroom Usage Checking, and Shuttle Bus Arrival Time Checking at Waseda University.'
    )
  );

  app.get(
    '/timetable',
    sendCustomizedIndexFile(
      indexFilePath,
      'WaseTime - TimeTable',
      'Create Your Own TimeTable at Waseda University.'
    )
  );

  app.get(
    '/syllabus',
    sendCustomizedIndexFile(
      indexFilePath,
      'WaseTime - Syllabus',
      'Syllabus Searching at Waseda University.'
    )
  );

  app.get(
    '/roomfinder',
    sendCustomizedIndexFile(
      indexFilePath,
      'WaseTime - Classroom Usage',
      'Classroom Usage Checking at Waseda University.'
    )
  );

  app.get(
    '/bus',
    sendCustomizedIndexFile(
      indexFilePath,
      'WaseTime - Bus',
      'Shuttle Bus Arrival Time Checking at Waseda University.'
    )
  );

  app.get(
    '*',
    sendCustomizedIndexFile(
      indexFilePath,
      'WaseTime',
      'An unofficial app for Syllabus Searching, Classroom Usage Checking, and Shuttle Bus Arrival Time Checking at Waseda University.'
    )
  );
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
