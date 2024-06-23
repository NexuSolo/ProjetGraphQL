export const createUser = `mutation CreateUser($username: String!, $password: String!) {
  createUser(username: $username, password: $password) {
    code
    message
    success
    user {
      id
      username
    }
  }
}`

export const signIn = `mutation SignIn($username: String!, $password: String!) {
  signIn(username: $username, password: $password) {
    code
    message
    success
    token
    user {
      id
      username
    }
  }
}`

export const createPost = `mutation CreatePost($token: String!, $content: String!) {
  createPost(token: $token, content: $content) {
    code
    message
    success
    post {
      id
      content
      authorId
      authorName
      createdAt
    }
  }
}`

export const likePost = `mutation LikePost($token: String!, $postId: ID!) {
  likePost(token: $token, postId: $postId) {
    code
    message
    success
    post {
      id
      content
      authorId
      authorName
      createdAt
      likes {
        id
        username
      }
    }
  }
}`

export const editPost = `mutation EditPost($token: String!, $postId: ID!, $newContent: String!) {
  editPost(token: $token, postId: $postId, newContent: $newContent) {
    code
    message
    success
    post {
      id
      content
    }
  }
}`

export const createComment = `mutation CreateComment($token: String!, $text: String!, $postId: ID!) {
  createComment(token: $token, text: $text, postId: $postId) {
    code
    message
    success
    comment {
      postId
      authorId
      authorName
      content
      id
    }
  }
}`