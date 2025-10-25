import Image from 'next/image';
import Link from 'next/link';
import type { Course } from '@/lib/types';
import { getPlaceholderImage } from '@/lib/placeholder-images';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from './ui/badge';
import { Clock, PlayCircle } from 'lucide-react';

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  const placeholderThumbnail = getPlaceholderImage('course-thumbnail-placeholder');
  
  const thumbnailUrl = course.thumbnailUrl || placeholderThumbnail?.imageUrl;
  const thumbnailAlt = course.title || 'Course thumbnail';

  return (
    <Card className="flex flex-col h-full overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl">
      <CardHeader className="p-0">
        <Link href={`/courses/${course.id}`} className="block">
          {thumbnailUrl && (
            <Image
              src={thumbnailUrl}
              alt={thumbnailAlt}
              width={600}
              height={400}
              className="aspect-video w-full object-cover"
              data-ai-hint="course thumbnail"
            />
          )}
        </Link>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="font-headline text-xl mb-2">
          <Link href={`/courses/${course.id}`} className="hover:text-primary transition-colors">
            {course.title}
          </Link>
        </CardTitle>
        <CardDescription className="line-clamp-3">{course.description}</CardDescription>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex flex-col items-start gap-4">
        <div className="flex items-center text-sm text-muted-foreground">
          <Clock className="h-4 w-4 mr-2" />
          <span>{course.duration}</span>
        </div>
        <div className="flex flex-wrap gap-2">
            {course.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
        </div>
        <Button asChild className="w-full mt-2 bg-primary hover:bg-primary/90">
          <Link href={`/courses/${course.id}`}>
            <PlayCircle className="mr-2 h-4 w-4" /> Watch Now
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
