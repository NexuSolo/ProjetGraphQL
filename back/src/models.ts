export type User = {
  id: string
  username: String
}

export type Comment = {
  id: string
  content: String
  user: User
}

export type Post = {
  id: string
  content: String
  user: User
  comments: Comment[]
  likes: User[]
}
