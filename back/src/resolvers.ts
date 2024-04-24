import { Resolvers } from "./types.js";
import { createUser } from "./mutations/user/createUser.js";
import { signIn } from "./mutations/user/signIn.js";
import { createPost } from "./mutations/user/createPost.js";
import { likePost } from "./mutations/user/likePost.js";
import { createComment } from "./mutations/user/createComment.js";
import { deletePost } from "./mutations/user/deletePost.js";

export const resolvers: Resolvers = {
  Mutation: {
    createUser,
    signIn,
    createPost,
    likePost,
    createComment,
    deletePost
  },
 };
