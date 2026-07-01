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
    <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl hover:border-primary/50 bg-[#101828]/50 border-white/5">
      <CardHeader className="p-0">
        <Link href={`/courses/${course.id}`} className="block overflow-hidden">
          {thumbnailUrl && (
            <Image
              src={thumbnailUrl}
              alt={thumbnailAlt}
              width={600}
              height={400}
              className="aspect-video w-full object-cover transition-transform duration-500 hover:scale-105"
              data-ai-hint="course thumbnail"
            />
          )}
        </Link>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="font-headline text-xl mb-3">
          <Link href={`/courses/${course.id}`} className="hover:text-primary transition-colors line-clamp-2">
            {course.title}
          </Link>
        </CardTitle>
        <CardDescription className="line-clamp-3 text-muted-foreground/80 leading-relaxed">{course.description}</CardDescription>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex flex-col items-start gap-5">
        <div className="flex items-center justify-between w-full text-xs text-muted-foreground font-medium uppercase tracking-wider">
          <div className="flex items-center gap-2">
            <Clock className="h-3.5 w-3.5 text-primary" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <PlayCircle className="h-3.5 w-3.5 text-primary" />
            <span>Tutorial</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
            {course.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="outline" className="text-[10px] uppercase border-white/10 bg-white/5">{tag}</Badge>
            ))}
        </div>
        <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white rounded-full font-bold transition-all hover:scale-[1.02]">
          <Link href={`/courses/${course.id}`}>
            Watch Tutorial
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}