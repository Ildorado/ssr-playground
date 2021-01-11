export interface Post {
  userId: number;
  id: number;
  body: string;
  title: string;
}

export interface HttpBodyPost {
  userId: number;
  body: string;
  title: string;
}
export interface User {
  name: string;
  email: string;
  website: string;
}
