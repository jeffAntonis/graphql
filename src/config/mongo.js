//MONGODB
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:17017/graphqlnode', {
  useNewUrlParser: true,
});

module.exports = mongoose;