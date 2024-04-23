export type User = {
  id: string
  username: String
  authoredPosts: Post[]
  likedPosts: Post[]
  comments: Comment[]
}

export type Comment = {
  id: string
  content: String
  user: User
  authorId: String
  postId: String
}

export type Post = {
  id: string
  content: String
  user: User
  authorId: String
  comments: Comment[]
  likes: User[]
}
