const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Issue-Track');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error in connecting to MongoDB'));

db.once('open', () => {
  console.log('Successfully Connected to Database :: MongoDB');
});

module.export = db;
