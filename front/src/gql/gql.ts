/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation CreateUser($username: String!, $password: String!) {\n  createUser(username: $username, password: $password) {\n    code\n    message\n    success\n    user {\n      id\n      username\n    }\n  }\n}\n\nmutation SignIn($username: String!, $password: String!) {\n  signIn(username: $username, password: $password) {\n    code\n    message\n    success\n    token\n    user {\n      id\n      username\n    }\n  }\n}\n\nmutation CreatePost($token: String!, $content: String!) {\n  createPost(token: $token, content: $content) {\n    code\n    message\n    success\n    post {\n      id\n      content\n      authorId\n      authorName\n      createdAt\n    }\n  }\n}\n\nmutation LikePost($token: String!, $postId: ID!) {\n  likePost(token: $token, postId: $postId) {\n    code\n    message\n    success\n    post {\n      id\n      content\n      authorId\n      authorName\n      createdAt\n      likes {\n        id\n        username\n      }\n    }\n  }\n}\n\nmutation EditPost($token: String!, $postId: ID!, $newContent: String!) {\n  editPost(token: $token, postId: $postId, newContent: $newContent) {\n    code\n    message\n    success\n    post {\n      id\n      content\n    }\n  }\n}": types.CreateUserDocument,
    "query GetUser {\n  getUser {\n    id\n    username\n  }\n}\n\nquery GetPosts {\n  getPosts {\n    id\n    createdAt\n    content\n    authorId\n    authorName\n    likes {\n      id\n      username\n    }\n    comments {\n      id\n      content\n      authorId\n      authorName\n      postId\n    }\n  }\n}\n\nquery GetPost($postId: ID!) {\n  getPost(postId: $postId) {\n    id\n    createdAt\n    content\n    authorId\n    authorName\n    likes {\n      id\n      username\n    }\n    comments {\n      id\n      content\n      authorId\n      authorName\n      postId\n    }\n  }\n}\n\nquery GetPostsOrderByLikes {\n  getPostsOrderByLikes {\n    authorId\n    authorName\n    content\n    createdAt\n    id\n    comments {\n      authorId\n      authorName\n      content\n      id\n    }\n    likes {\n      username\n      id\n    }\n  }\n}\n\nquery GetPostsOrderByAuthorName {\n  getPostsOrderByAuthorName {\n    authorId\n    authorName\n    content\n    createdAt\n    id\n    comments {\n      authorId\n      authorName\n      content\n      id\n    }\n    likes {\n      username\n      id\n    }\n  }\n}": types.GetUserDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateUser($username: String!, $password: String!) {\n  createUser(username: $username, password: $password) {\n    code\n    message\n    success\n    user {\n      id\n      username\n    }\n  }\n}\n\nmutation SignIn($username: String!, $password: String!) {\n  signIn(username: $username, password: $password) {\n    code\n    message\n    success\n    token\n    user {\n      id\n      username\n    }\n  }\n}\n\nmutation CreatePost($token: String!, $content: String!) {\n  createPost(token: $token, content: $content) {\n    code\n    message\n    success\n    post {\n      id\n      content\n      authorId\n      authorName\n      createdAt\n    }\n  }\n}\n\nmutation LikePost($token: String!, $postId: ID!) {\n  likePost(token: $token, postId: $postId) {\n    code\n    message\n    success\n    post {\n      id\n      content\n      authorId\n      authorName\n      createdAt\n      likes {\n        id\n        username\n      }\n    }\n  }\n}\n\nmutation EditPost($token: String!, $postId: ID!, $newContent: String!) {\n  editPost(token: $token, postId: $postId, newContent: $newContent) {\n    code\n    message\n    success\n    post {\n      id\n      content\n    }\n  }\n}"): (typeof documents)["mutation CreateUser($username: String!, $password: String!) {\n  createUser(username: $username, password: $password) {\n    code\n    message\n    success\n    user {\n      id\n      username\n    }\n  }\n}\n\nmutation SignIn($username: String!, $password: String!) {\n  signIn(username: $username, password: $password) {\n    code\n    message\n    success\n    token\n    user {\n      id\n      username\n    }\n  }\n}\n\nmutation CreatePost($token: String!, $content: String!) {\n  createPost(token: $token, content: $content) {\n    code\n    message\n    success\n    post {\n      id\n      content\n      authorId\n      authorName\n      createdAt\n    }\n  }\n}\n\nmutation LikePost($token: String!, $postId: ID!) {\n  likePost(token: $token, postId: $postId) {\n    code\n    message\n    success\n    post {\n      id\n      content\n      authorId\n      authorName\n      createdAt\n      likes {\n        id\n        username\n      }\n    }\n  }\n}\n\nmutation EditPost($token: String!, $postId: ID!, $newContent: String!) {\n  editPost(token: $token, postId: $postId, newContent: $newContent) {\n    code\n    message\n    success\n    post {\n      id\n      content\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetUser {\n  getUser {\n    id\n    username\n  }\n}\n\nquery GetPosts {\n  getPosts {\n    id\n    createdAt\n    content\n    authorId\n    authorName\n    likes {\n      id\n      username\n    }\n    comments {\n      id\n      content\n      authorId\n      authorName\n      postId\n    }\n  }\n}\n\nquery GetPost($postId: ID!) {\n  getPost(postId: $postId) {\n    id\n    createdAt\n    content\n    authorId\n    authorName\n    likes {\n      id\n      username\n    }\n    comments {\n      id\n      content\n      authorId\n      authorName\n      postId\n    }\n  }\n}\n\nquery GetPostsOrderByLikes {\n  getPostsOrderByLikes {\n    authorId\n    authorName\n    content\n    createdAt\n    id\n    comments {\n      authorId\n      authorName\n      content\n      id\n    }\n    likes {\n      username\n      id\n    }\n  }\n}\n\nquery GetPostsOrderByAuthorName {\n  getPostsOrderByAuthorName {\n    authorId\n    authorName\n    content\n    createdAt\n    id\n    comments {\n      authorId\n      authorName\n      content\n      id\n    }\n    likes {\n      username\n      id\n    }\n  }\n}"): (typeof documents)["query GetUser {\n  getUser {\n    id\n    username\n  }\n}\n\nquery GetPosts {\n  getPosts {\n    id\n    createdAt\n    content\n    authorId\n    authorName\n    likes {\n      id\n      username\n    }\n    comments {\n      id\n      content\n      authorId\n      authorName\n      postId\n    }\n  }\n}\n\nquery GetPost($postId: ID!) {\n  getPost(postId: $postId) {\n    id\n    createdAt\n    content\n    authorId\n    authorName\n    likes {\n      id\n      username\n    }\n    comments {\n      id\n      content\n      authorId\n      authorName\n      postId\n    }\n  }\n}\n\nquery GetPostsOrderByLikes {\n  getPostsOrderByLikes {\n    authorId\n    authorName\n    content\n    createdAt\n    id\n    comments {\n      authorId\n      authorName\n      content\n      id\n    }\n    likes {\n      username\n      id\n    }\n  }\n}\n\nquery GetPostsOrderByAuthorName {\n  getPostsOrderByAuthorName {\n    authorId\n    authorName\n    content\n    createdAt\n    id\n    comments {\n      authorId\n      authorName\n      content\n      id\n    }\n    likes {\n      username\n      id\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;