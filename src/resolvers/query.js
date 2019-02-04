const { getUserId } = require('../utils/getUserId');

const Query = {
  me (parent, args, ctx, info) {
    const id = getUserId(ctx)
    return ctx.prisma.user({ id }, info);
  },

  users (parent, args, ctx, info) {
    const id = getUserId(ctx)
    return ctx.prisma.users();
  }
}

module.exports = { Query }
