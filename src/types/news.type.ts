export interface Comment {
  id: string;
  content: string;

  userName: string;
  userEmail?: string;

  createdAt: string;
}

export interface News {
  id: string;

  title: string;
  slug: string;
  thumbnail: string;

  summary?: string;
  content: string;

  createdAt: string;

  comments: Comment[];
}

/**
 * BACKEND TYPES
 */

export interface BackendComment {
  id: string;
  content: string;

  userName: string;
  userEmail?: string;

  createdAt: string;
}

export interface BackendNews {
  id: string;

  title: string;
  slug: string;
  thumbnail: string;

  summary?: string;
  content: string;

  createdAt: string;

  comments?: BackendComment[];
}