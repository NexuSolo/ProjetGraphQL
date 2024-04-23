import { Resolvers } from "./types.js";
import { createUser } from "./mutations/user/createUser.js";
import { signIn } from "./mutations/user/signIn.js";
import { createPost } from "./mutations/user/createPost.js";

export const resolvers: Resolvers = {
  Mutation: {
    createUser,
    signIn,
    createPost,
  },
 };
