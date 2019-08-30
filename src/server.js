const { GraphQLServer } = require('graphql-yoga');
const jwt = require('jsonwebtoken');
const resolvers = require('./resolvers');
const typeDefs = require('./typeDefs');

const db = require('./config/db');

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start(({ port }) => {
  console.log(`Servidor rodando na porta ${port}`);
});