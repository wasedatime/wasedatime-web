const mongoose = require('mongoose');
const keys = require('../../config/keys');

before(done => {
  mongoose
    .connect(keys.mongoURI, {
      useMongoClient: true
    })
    .then(() => {
      console.log('Mongoose test starting...');
      done();
    })
    .catch(err => {
      console.error('Mongoose starting error:', err.stack);
      process.exit(1);
    });
});
