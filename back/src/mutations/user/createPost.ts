import { getUser } from "../../modules/auth.js";
import { MutationResolvers } from "../../types.js";

export const createPost: MutationResolvers['createPost'] = async (_, {token, content}, {dataSources}) => {
  try {
    const user = getUser(token);
    if (!user) {
      return {
        code: 403,
        message: 'User not authenticated',
        success: false,
        post: null,
        }
    }
    const createdPost = await dataSources.db.post.create({
      data: {
        content: content,
        authorId: user.id,
      }
    })

    return {
      code: 201,
      message: 'Post has been created',
      success: true,
      post: {
        id: createdPost.id,
        content: createdPost.content,
        authorId: createdPost.authorId,
        createdAt: createdPost.createdAt.toISOString(),
        likes: [],
        comments: []
      }
    }
  } catch(e) {
    return {
      code: 403,
      message: 'Post has not been created',
      success: false,
      post: null,
    }
  }
}