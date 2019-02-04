const { Query } = require('./query')
const { auth } = require('../mutations/auth')
const { userParameters } = require('../mutations/userParameters')
const { AuthPayload } = require('./authPayload')

module.exports = {
  Query,
  Mutation: {
    ...auth,
    ...userParameters
  },
  AuthPayload
}
