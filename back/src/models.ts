export type User = {
  id: string
  username: String
}

export type Comment = {
  id: string
  content: String
  user: User
  authorId: String
  authorName: String
  postId: String
}

export type Post = {
  id: string
  content: String
  user: User
  authorId: String
  authorName: String
  comments: Comment[]
  likes: User[]
}
