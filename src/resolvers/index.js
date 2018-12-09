const { Query } = require('./query')
const { auth } = require('../mutations/auth')
const { AuthPayload } = require('./authPayload')

module.exports = {
  Query,
  Mutation: {
    ...auth,
  },
  AuthPayload
}
