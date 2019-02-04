module.exports = {
        typeDefs: /* GraphQL */ `type AggregateCinema {
  count: Int!
}

type AggregateMovie {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Cinema {
  name: String!
  movies(where: MovieWhereInput, orderBy: MovieOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Movie!]
}

type CinemaConnection {
  pageInfo: PageInfo!
  edges: [CinemaEdge]!
  aggregate: AggregateCinema!
}

input CinemaCreateInput {
  name: String!
  movies: MovieCreateManyWithoutCinemasInput
}

input CinemaCreateManyWithoutMoviesInput {
  create: [CinemaCreateWithoutMoviesInput!]
  connect: [CinemaWhereUniqueInput!]
}

input CinemaCreateWithoutMoviesInput {
  name: String!
}

type CinemaEdge {
  node: Cinema!
  cursor: String!
}

enum CinemaOrderByInput {
  name_ASC
  name_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CinemaPreviousValues {
  name: String!
}

input CinemaScalarWhereInput {
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [CinemaScalarWhereInput!]
  OR: [CinemaScalarWhereInput!]
  NOT: [CinemaScalarWhereInput!]
}

type CinemaSubscriptionPayload {
  mutation: MutationType!
  node: Cinema
  updatedFields: [String!]
  previousValues: CinemaPreviousValues
}

input CinemaSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CinemaWhereInput
  AND: [CinemaSubscriptionWhereInput!]
  OR: [CinemaSubscriptionWhereInput!]
  NOT: [CinemaSubscriptionWhereInput!]
}

input CinemaUpdateInput {
  name: String
  movies: MovieUpdateManyWithoutCinemasInput
}

input CinemaUpdateManyDataInput {
  name: String
}

input CinemaUpdateManyMutationInput {
  name: String
}

input CinemaUpdateManyWithoutMoviesInput {
  create: [CinemaCreateWithoutMoviesInput!]
  delete: [CinemaWhereUniqueInput!]
  connect: [CinemaWhereUniqueInput!]
  disconnect: [CinemaWhereUniqueInput!]
  update: [CinemaUpdateWithWhereUniqueWithoutMoviesInput!]
  upsert: [CinemaUpsertWithWhereUniqueWithoutMoviesInput!]
  deleteMany: [CinemaScalarWhereInput!]
  updateMany: [CinemaUpdateManyWithWhereNestedInput!]
}

input CinemaUpdateManyWithWhereNestedInput {
  where: CinemaScalarWhereInput!
  data: CinemaUpdateManyDataInput!
}

input CinemaUpdateWithoutMoviesDataInput {
  name: String
}

input CinemaUpdateWithWhereUniqueWithoutMoviesInput {
  where: CinemaWhereUniqueInput!
  data: CinemaUpdateWithoutMoviesDataInput!
}

input CinemaUpsertWithWhereUniqueWithoutMoviesInput {
  where: CinemaWhereUniqueInput!
  update: CinemaUpdateWithoutMoviesDataInput!
  create: CinemaCreateWithoutMoviesInput!
}

input CinemaWhereInput {
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  movies_every: MovieWhereInput
  movies_some: MovieWhereInput
  movies_none: MovieWhereInput
  AND: [CinemaWhereInput!]
  OR: [CinemaWhereInput!]
  NOT: [CinemaWhereInput!]
}

input CinemaWhereUniqueInput {
  name: String
}

scalar Long

type Movie {
  title: String
  rate: Int
  genres: [String!]!
  description: String
  image: String
  cinemas(where: CinemaWhereInput, orderBy: CinemaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Cinema!]
}

type MovieConnection {
  pageInfo: PageInfo!
  edges: [MovieEdge]!
  aggregate: AggregateMovie!
}

input MovieCreategenresInput {
  set: [String!]
}

input MovieCreateInput {
  title: String
  rate: Int
  genres: MovieCreategenresInput
  description: String
  image: String
  cinemas: CinemaCreateManyWithoutMoviesInput
}

input MovieCreateManyWithoutCinemasInput {
  create: [MovieCreateWithoutCinemasInput!]
  connect: [MovieWhereUniqueInput!]
}

input MovieCreateWithoutCinemasInput {
  title: String
  rate: Int
  genres: MovieCreategenresInput
  description: String
  image: String
}

type MovieEdge {
  node: Movie!
  cursor: String!
}

enum MovieOrderByInput {
  title_ASC
  title_DESC
  rate_ASC
  rate_DESC
  description_ASC
  description_DESC
  image_ASC
  image_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type MoviePreviousValues {
  title: String
  rate: Int
  genres: [String!]!
  description: String
  image: String
}

input MovieScalarWhereInput {
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  rate: Int
  rate_not: Int
  rate_in: [Int!]
  rate_not_in: [Int!]
  rate_lt: Int
  rate_lte: Int
  rate_gt: Int
  rate_gte: Int
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  image: String
  image_not: String
  image_in: [String!]
  image_not_in: [String!]
  image_lt: String
  image_lte: String
  image_gt: String
  image_gte: String
  image_contains: String
  image_not_contains: String
  image_starts_with: String
  image_not_starts_with: String
  image_ends_with: String
  image_not_ends_with: String
  AND: [MovieScalarWhereInput!]
  OR: [MovieScalarWhereInput!]
  NOT: [MovieScalarWhereInput!]
}

type MovieSubscriptionPayload {
  mutation: MutationType!
  node: Movie
  updatedFields: [String!]
  previousValues: MoviePreviousValues
}

input MovieSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MovieWhereInput
  AND: [MovieSubscriptionWhereInput!]
  OR: [MovieSubscriptionWhereInput!]
  NOT: [MovieSubscriptionWhereInput!]
}

input MovieUpdategenresInput {
  set: [String!]
}

input MovieUpdateInput {
  title: String
  rate: Int
  genres: MovieUpdategenresInput
  description: String
  image: String
  cinemas: CinemaUpdateManyWithoutMoviesInput
}

input MovieUpdateManyDataInput {
  title: String
  rate: Int
  genres: MovieUpdategenresInput
  description: String
  image: String
}

input MovieUpdateManyMutationInput {
  title: String
  rate: Int
  genres: MovieUpdategenresInput
  description: String
  image: String
}

input MovieUpdateManyWithoutCinemasInput {
  create: [MovieCreateWithoutCinemasInput!]
  delete: [MovieWhereUniqueInput!]
  connect: [MovieWhereUniqueInput!]
  disconnect: [MovieWhereUniqueInput!]
  update: [MovieUpdateWithWhereUniqueWithoutCinemasInput!]
  upsert: [MovieUpsertWithWhereUniqueWithoutCinemasInput!]
  deleteMany: [MovieScalarWhereInput!]
  updateMany: [MovieUpdateManyWithWhereNestedInput!]
}

input MovieUpdateManyWithWhereNestedInput {
  where: MovieScalarWhereInput!
  data: MovieUpdateManyDataInput!
}

input MovieUpdateWithoutCinemasDataInput {
  title: String
  rate: Int
  genres: MovieUpdategenresInput
  description: String
  image: String
}

input MovieUpdateWithWhereUniqueWithoutCinemasInput {
  where: MovieWhereUniqueInput!
  data: MovieUpdateWithoutCinemasDataInput!
}

input MovieUpsertWithWhereUniqueWithoutCinemasInput {
  where: MovieWhereUniqueInput!
  update: MovieUpdateWithoutCinemasDataInput!
  create: MovieCreateWithoutCinemasInput!
}

input MovieWhereInput {
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  rate: Int
  rate_not: Int
  rate_in: [Int!]
  rate_not_in: [Int!]
  rate_lt: Int
  rate_lte: Int
  rate_gt: Int
  rate_gte: Int
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  image: String
  image_not: String
  image_in: [String!]
  image_not_in: [String!]
  image_lt: String
  image_lte: String
  image_gt: String
  image_gte: String
  image_contains: String
  image_not_contains: String
  image_starts_with: String
  image_not_starts_with: String
  image_ends_with: String
  image_not_ends_with: String
  cinemas_every: CinemaWhereInput
  cinemas_some: CinemaWhereInput
  cinemas_none: CinemaWhereInput
  AND: [MovieWhereInput!]
  OR: [MovieWhereInput!]
  NOT: [MovieWhereInput!]
}

input MovieWhereUniqueInput {
  title: String
}

type Mutation {
  createCinema(data: CinemaCreateInput!): Cinema!
  updateCinema(data: CinemaUpdateInput!, where: CinemaWhereUniqueInput!): Cinema
  updateManyCinemas(data: CinemaUpdateManyMutationInput!, where: CinemaWhereInput): BatchPayload!
  upsertCinema(where: CinemaWhereUniqueInput!, create: CinemaCreateInput!, update: CinemaUpdateInput!): Cinema!
  deleteCinema(where: CinemaWhereUniqueInput!): Cinema
  deleteManyCinemas(where: CinemaWhereInput): BatchPayload!
  createMovie(data: MovieCreateInput!): Movie!
  updateMovie(data: MovieUpdateInput!, where: MovieWhereUniqueInput!): Movie
  updateManyMovies(data: MovieUpdateManyMutationInput!, where: MovieWhereInput): BatchPayload!
  upsertMovie(where: MovieWhereUniqueInput!, create: MovieCreateInput!, update: MovieUpdateInput!): Movie!
  deleteMovie(where: MovieWhereUniqueInput!): Movie
  deleteManyMovies(where: MovieWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  cinema(where: CinemaWhereUniqueInput!): Cinema
  cinemas(where: CinemaWhereInput, orderBy: CinemaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Cinema]!
  cinemasConnection(where: CinemaWhereInput, orderBy: CinemaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CinemaConnection!
  movie(where: MovieWhereUniqueInput!): Movie
  movies(where: MovieWhereInput, orderBy: MovieOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Movie]!
  moviesConnection(where: MovieWhereInput, orderBy: MovieOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MovieConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  cinema(where: CinemaSubscriptionWhereInput): CinemaSubscriptionPayload
  movie(where: MovieSubscriptionWhereInput): MovieSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  email: String!
  password: String!
  name: String!
  minimalRate: Int
  blockedGenres: [String!]!
  cinemas: [String!]!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateblockedGenresInput {
  set: [String!]
}

input UserCreatecinemasInput {
  set: [String!]
}

input UserCreateInput {
  email: String!
  password: String!
  name: String!
  minimalRate: Int
  blockedGenres: UserCreateblockedGenresInput
  cinemas: UserCreatecinemasInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  name_ASC
  name_DESC
  minimalRate_ASC
  minimalRate_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  password: String!
  name: String!
  minimalRate: Int
  blockedGenres: [String!]!
  cinemas: [String!]!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateblockedGenresInput {
  set: [String!]
}

input UserUpdatecinemasInput {
  set: [String!]
}

input UserUpdateInput {
  email: String
  password: String
  name: String
  minimalRate: Int
  blockedGenres: UserUpdateblockedGenresInput
  cinemas: UserUpdatecinemasInput
}

input UserUpdateManyMutationInput {
  email: String
  password: String
  name: String
  minimalRate: Int
  blockedGenres: UserUpdateblockedGenresInput
  cinemas: UserUpdatecinemasInput
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  minimalRate: Int
  minimalRate_not: Int
  minimalRate_in: [Int!]
  minimalRate_not_in: [Int!]
  minimalRate_lt: Int
  minimalRate_lte: Int
  minimalRate_gt: Int
  minimalRate_gte: Int
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    