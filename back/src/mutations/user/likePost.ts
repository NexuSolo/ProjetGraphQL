import { getUser } from "../../modules/auth.js";
import { MutationResolvers } from "../../types.js";

export const likePost: MutationResolvers['likePost'] = async (_, { token, postId }, { dataSources }) => {
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

        const existingLike = await dataSources.db.post.findUnique({
            where: {
                id: postId
            },
            include: {
                likes: {
                    where: {
                        id: user.id
                    }
                }
            }
        })

        if (existingLike && existingLike.likes.length > 0) {
            const updatedPost = await dataSources.db.post.update({
                where: {
                    id: postId
                },
                data: {
                    likes: {
                        disconnect: {
                            id: user.id
                        }
                    }
                },
                include: {
                    likes: true,
                    comments: true,
                    author: true
                }
            })

            return {
                code: 200,
                message: 'Like has been removed',
                success: true,
                post: {
                    id: updatedPost.id,
                    content: updatedPost.content,
                    authorId: updatedPost.authorId,
                    authorName: updatedPost.authorName,
                    createdAt: updatedPost.createdAt.toISOString(),
                    likes: updatedPost.likes,
                    comments: updatedPost.comments
                }
            }
        }

        const updatedPost = await dataSources.db.post.update({
            where: {
                id: postId
            },
            data: {
                likes: {
                    connect: {
                        id: user.id
                    }
                }
            },
            include: {
                likes: true,
                comments: true
            }
        })

        return {
            code: 201,
            message: 'Post has been liked',
            success: true,
            post: {
                id: updatedPost.id,
                content: updatedPost.content,
                authorId: updatedPost.authorId,
                authorName: updatedPost.authorName,
                createdAt: updatedPost.createdAt.toISOString(),
                likes: updatedPost.likes,
                comments: updatedPost.comments
            }
        }
    } catch (e) {
        return {
            code: 403,
            message: 'Post has not been liked',
            success: false,
            post: null,
        }
    }
}