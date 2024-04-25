import gql from "graphql-tag";

export const typeDefs = gql`

  type Query {
    getUser: [User]!
    getPosts: [Post]!
  }

  type User {
    id: ID!
    username: String!
  }

  type Post {
    id: ID!
    content: String!
    createdAt: String!
    authorId: ID!
    likes: [User]!
    comments: [Comment]!
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
    likePost(token: String!, postId: ID!): CreatePostResponse!
    createComment(token: String!, text: String!, postId: ID!): CreateCommentResponse!
    deletePost(token: String!, postId: ID!): CreatePostResponse!
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

  type CreateCommentResponse {
    code: Int!
    message: String!
    success: Boolean!
    post: Post
    comment: Comment
  }
`;