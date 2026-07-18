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
import { Badge } from '@/components/ui/badge';
import { Clock, PlayCircle } from 'lucide-react';

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  const placeholderThumbnail = getPlaceholderImage('course-thumbnail-placeholder');
  
  const thumbnailUrl = course.thumbnailUrl || placeholderThumbnail?.imageUrl;
  const thumbnailAlt = course.title || 'Course thumbnail';

  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(14,165,255,0.15)] hover:border-primary/50 bg-[#101828]/50 border-white/5 group">
      <CardHeader className="p-0">
        <Link href={`/courses/${course.id}`} className="block overflow-hidden relative">
          {thumbnailUrl && (
            <Image
              src={thumbnailUrl}
              alt={thumbnailAlt}
              width={600}
              height={400}
              className="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-110"
              data-ai-hint="course thumbnail"
            />
          )}
          <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
        </Link>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="font-headline text-xl mb-3">
          <Link href={`/courses/${course.id}`} className="group-hover:text-primary transition-colors line-clamp-2 duration-300">
            {course.title}
          </Link>
        </CardTitle>
        <CardDescription className="line-clamp-3 text-muted-foreground/80 leading-relaxed group-hover:text-muted-foreground transition-colors">{course.description}</CardDescription>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex flex-col items-start gap-5">
        <div className="flex items-center justify-between w-full text-xs text-muted-foreground font-medium uppercase tracking-wider">
          <div className="flex items-center gap-2 group-hover:text-primary transition-colors">
            <Clock className="h-3.5 w-3.5 text-primary animate-pulse" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-2 group-hover:text-primary transition-colors">
            <PlayCircle className="h-3.5 w-3.5 text-primary" />
            <span>Tutorial</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
            {course.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="outline" className="text-[10px] uppercase border-white/10 bg-white/5 transition-all group-hover:border-primary/30 group-hover:bg-primary/5 group-hover:text-white">{tag}</Badge>
            ))}
        </div>
        <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white rounded-full font-bold transition-all hover:scale-[1.05] active:scale-95 shadow-lg group-hover:shadow-primary/25">
          <Link href={`/courses/${course.id}`}>
            Watch Tutorial
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}