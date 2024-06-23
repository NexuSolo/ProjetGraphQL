export type User = {
  id: string
  username: string
  password: string
}

export type Comment = {
  id: string
  content: string
  user: User
  authorId: string
  authorName: string
  postId: string
}

export type Post = {
  id: string
  content: string
  user: User
  authorId: string
  authorName: string
  comments: Comment[]
  likes: User[]
}
