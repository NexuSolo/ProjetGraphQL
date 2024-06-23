export const getPosts = `query GetPosts {
  getPosts {
    id
    createdAt
    content
    authorId
    authorName
    likes {
      id
      username
    }
    comments {
      id
      content
      authorId
      authorName
      postId
    }
  }
}`;

export const getPost = `query GetPost($postId: ID!) {
  getPost(postId: $postId) {
    id
    createdAt
    content
    authorId
    authorName
    likes {
      id
      username
    }
    comments {
      id
      content
      authorId
      authorName
      postId
    }
  }
}`

export const getPostsOrderByLikes = `query GetPostsOrderByLikes {
    getPostsOrderByLikes {
        authorId
        authorName
        content
        createdAt
        id
        comments {
            authorId
            authorName
            content
            id
        }
        likes {
            username
            id
        }
    }
}`

export const GetPostsOrderByAuthorName = `query GetPostsOrderByAuthorName {
    getPostsOrderByAuthorName {
        authorId
        authorName
        content
        createdAt
        id
        comments {
            authorId
            authorName
            content
            id
        }
        likes {
            username
            id
        }
    }
}`