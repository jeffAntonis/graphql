const User = require('../models/User');

module.exports = {
  Query: {
    users: () => User.find(),
    user: (_, { id }) => User.findById(id),
    userByEmail: (_, { email }) => User.findOne({ email }),
  },

  Mutation: {
    createUser: (_, { name, email }) => User.create({ name, email }),
  },
};