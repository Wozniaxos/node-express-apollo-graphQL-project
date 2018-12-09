const { getUserId } = require('../utils/getUserId');

const Query = {
  me (parent, args, ctx, info) {
    const id = getUserId(ctx)
    return ctx.db.query.user({ where: { id } }, info);
  }
}

module.exports = { Query }
