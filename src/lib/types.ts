export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  tags: string[];
  videoUrl: string;
  thumbnailUrl: string;
}

export type CourseFormData = Omit<Course, 'id'>;
