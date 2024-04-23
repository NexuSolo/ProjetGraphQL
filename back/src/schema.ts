import gql from "graphql-tag";

export const typeDefs = gql`

  type Query {
    getUser: [User]!
  }

  type User {
    id: ID!
    username: String!
  }

  type Post {
    id: ID!
    content: String!
  }

  type Comment {
    id: ID!
    content: String!
    authorId: ID!
    postId: ID!
  }

  type Mutation {
    createUser(username: String!, password: String!): CreateUserResponse!
    signIn(username: String!, password: String!): SignInResponse!
    createPost(token: String!, content: String!): CreatePostResponse!
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

  type CreatePostResponse {
    code: Int!
    message: String!
    success: Boolean!
    post: Post
  }
`;