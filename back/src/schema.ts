import gql from "graphql-tag";

export const typeDefs = gql`

  type Query {
    getUser: [User]!
  }

  type User {
    id: ID!
    username: String!
  }

  type Mutation {
    createUser(username: String!, password: String!): CreateUserResponse!
    signIn(username: String!, password: String!): SignInResponse!
  }

  type CreateUserResponse {
    code: Int!
    message: String!
    success: Boolean!
    user: User
  }

  type SignInResponse {
    code: Int!
    message: String!
    success: Boolean!
    token: String
    user: User
  }
`;