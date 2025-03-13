export interface Post {
  id: number;
  userId: number;
  title: string;
  content: string;
  createdAt: string;
  userNames: string;
  comments?: { id: number; content: string; userId: number }[];
}
