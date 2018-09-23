import bodyParser from 'body-parser';
import { ApolloServer, gql } from 'apollo-server-express';
import config from '../config';
import schema from './schema';

const { typeDefs, resolvers } = schema;

export default (app) => {
  const path = '/api/graphql';
  const server = new ApolloServer({ typeDefs, resolvers });
  server.applyMiddleware({ app, path });
};
