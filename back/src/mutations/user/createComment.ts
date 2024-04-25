import { getUser } from "../../modules/auth.js";
import { MutationResolvers } from "../../types.js";

export const createComment: MutationResolvers['createComment'] = async (_, { token, text, postId }, { dataSources }) => {
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
            },
            include: {
                author: true,
                comments: true,
                likes: true
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

        const createdComment = await dataSources.db.comment.create({
            data: {
                content: text,
                authorName: user.username,
                authorId: user.id,
                postId: postId
            }
        })

        const updatedPost = await dataSources.db.post.update({
            where: {
                id: postId
            },
            data: {
                comments: {
                    connect: {
                        id: createdComment.id
                    }
                }
            },
            include: {
                comments: true,
                likes: true
            }
        })

        return {
            code: 201,
            message: 'Comment has been created',
            success: true,
            post: {
                ...post,
                createdAt: post.createdAt.toISOString(), // convert Date to string
                authorName: post.author.username
            },
            comment: {
                ...createdComment,
                authorName: user.username
            }
        }
    } catch (e) {
        return {
            code: 403,
            message: 'Comment has not been created',
            success: false,
            post: null,
        }
    }
}