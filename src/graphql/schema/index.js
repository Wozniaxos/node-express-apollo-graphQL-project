
import fs from 'fs';
import path from 'path';
import { merge } from 'lodash';
import { gql } from 'apollo-server-express';

const Query = gql`
 type Query {
   status: String
 }
`;

const Mutation = `
 type Mutation {
   _empty: String
 }
`;

let resolvers = {
 Query: {
   status: () => 'ok'
 }
};

const typeDefs = [Query, Mutation];

// Read the current directory and load types and resolvers automatically
fs.readdirSync(__dirname)
 .filter(dir => (dir.indexOf('.') < 0))
 .forEach((dir) => {
   const tmp = require(path.join(__dirname, dir)).default; // eslint-disable-line
   resolvers = merge(resolvers, tmp.resolvers);
   typeDefs.push(tmp.types);
 });

export default {
 typeDefs,
 resolvers
};
