const { getUserId } = require('../utils/getUserId');

const userParameters = {
  async setMinimalRate(parent, args, ctx, info) {
    const id = getUserId(ctx);
    const updatedUser = ctx.prisma.updateUser({ id }, {
      minimalRate: args.minimalRate
    });
    return updatedUser
  },

  async addCinema(parent, args, ctx, info) {
    const id = getUserId(ctx);
    const updatedUser = ctx.prisma.updateUser({ id }, {
      cinemas: this.cinemas.push(args.cinema)
    });
    return updatedUser
  },

  async blockGenre(parent, args, ctx, info) {
    const id = getUserId(ctx);
    const { blockedGenres } = await ctx.prisma.user({ id });
    blockedGenres.push(args.genre);

    const updatedUser = ctx.prisma.updateUser({
      where: { id },
      data: { blockedGenres }
    });
    return updatedUser
  },
}

module.exports = { userParameters }
