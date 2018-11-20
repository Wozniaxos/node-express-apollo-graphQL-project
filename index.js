const { prisma } = require('./generated/prisma-client')
const { GraphQLServer } = require('graphql-yoga')

const resolvers = {
  Query: {
    users(root, args, context) {
      return context.prisma.users()
    }
  },
  Mutation: {
    createUser(root, args, context) {
      return context.prisma.createUser({
          name: args.name,
          email: args.email
        },
      )
    },
    updateUser(root, args, context) {
      return context.prisma.updateUser({
        data: {
          name: args.newname,
          email: args.email,
        },
          where: {
            name: args.username
          }
        },
      )
    }
  }
}

const server = new GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers,
  context: {
    prisma
  },
})
server.start(() => console.log('Server is running on http://localhost:4000'))
