export interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  duration: string;
  publishedAt: string;
  viewCount: string;
}

export interface MediumArticle {
  id: string;
  title: string;
  summary: string;
  coverImage: string;
  readingTime: string;
  publishedAt: string;
  url: string;
  category?: string;
  tags?: string[];
}

export interface GitHubRepository {
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  updatedAt: string;
  url: string;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  url: string;
  type: 'PDF' | 'Website' | 'Video';
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  category: string;
  message: string;
  timestamp: Date;
  status: 'pending' | 'resolved';
}

export interface NewsletterSubscription {
  id: string;
  email: string;
  subscriptionDate: Date;
  sourcePage: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  tags: string[];
  videoUrl: string;
  thumbnailUrl?: string;
}

export type CourseFormData = Omit<Course, 'id'>;