import { Resolvers } from "./types.js";
import { createUser } from "./mutations/user/createUser.js";
import { signIn } from "./mutations/user/signIn.js";
import { createPost } from "./mutations/user/createPost.js";
import { likePost } from "./mutations/user/likePost.js";
import { createComment } from "./mutations/user/createComment.js";
import { deletePost } from "./mutations/user/deletePost.js";
import db from "./datasources/db.js";

export const resolvers: Resolvers = {
  Query: {
    getUser: async () => {
      const users = await db.user.findMany();
      return users;
    },
    getPosts: async () => {
      const posts = await db.post.findMany({
        include: {
          author: true,
          likes: true,
          comments: true,
        },
      });
      return posts.map(post => ({
        ...post,
        createdAt: post.createdAt.toISOString(),
        likes: post.likes
      }));
    },
    getPost: async (_: any, { postId }: any) => {
      const post = await db.post.findUnique({
        where: {
          id: postId
        },
        include: {
          author: true,
          likes: true,
          comments: true,
        },
      });
      if (!post) {
        throw new Error('Post not found');
      }
      return {
        ...post,
        createdAt: post.createdAt.toISOString(),
        likes: post.likes
      };
    },
  },

  Mutation: {
    createUser,
    signIn,
    createPost,
    likePost,
    createComment,
    deletePost
  },
 };
