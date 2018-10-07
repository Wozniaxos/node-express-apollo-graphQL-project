
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
const foundOnlyModuleFolders = fs.readdirSync(__dirname)
 .filter(dir => {
   const isFolder = dir.indexOf('.') < 0;
   return isFolder
})
 foundOnlyModuleFolders.forEach((dir) => {
   const modulePath = path.join(__dirname, dir)
   const currentModule = require(modulePath).default; // eslint-disable-line
   resolvers = merge(resolvers, currentModule.resolvers);
   typeDefs.push(currentModule.types);
 });

export default {
 typeDefs,
 resolvers
};
