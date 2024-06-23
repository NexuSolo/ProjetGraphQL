import { getUser } from "../../modules/auth.js";
import { MutationResolvers } from "../../graphqlgenerate/types.js";

export const deletePost: MutationResolvers['deletePost'] = async (_, {token, postId}, {dataSources}) => {
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

    const post = await dataSources.db.post.findUnique({
        where: {
            id: postId
        }
    })
    if (!post) {
        return {
            code: 403,
            message: 'Post not found',
            success: false,
            post: null,
        }
    }

    if (post.authorId !== user.id) {
        return {
            code: 403,
            message: 'User not authorized',
            success: false,
            post: null,
        }
    }

    const deletePost = await dataSources.db.post.delete({
        where: {
            id: postId
        }
    })

    return {
      code: 201,
      message: 'Post has been deleted',
      success: true,
      post: null
    }
  } catch(e) {
    console.log(`${(e as Error)?.message}`)
    return {
      code: 403,
      message: 'Post has not been deleted',
      success: false,
      post: null,
    }
  }
}