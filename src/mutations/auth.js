const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const _secondsFromNow = seconds => {
  return Math.floor(Date.now() / 1000) + seconds;
}

const auth = {
  async signup(parent, args, ctx, info) {
    const password = await bcrypt.hash(args.password, 10)
    const user = await ctx.prisma.createUser({ ...args, password })

    return {
      token: jwt.sign({ userId: user.id }, process.env.JWT_SECRET),
      user,
    }
  },

  async login(parent, { email, password }, ctx, info) {
    const user = await ctx.prisma.user({ email })
    if (!user) {
      throw new Error(`No such user found for email: ${email}`)
    }

    const valid = await bcrypt.compare(password, user.password)
    if (!valid) {
      throw new Error('Invalid password')
    }

    return {
      token: jwt.sign({ exp:_secondsFromNow(3600) , userId: user.id }, process.env.JWT_SECRET),
      user,
    }
  },
}

module.exports = { auth }
