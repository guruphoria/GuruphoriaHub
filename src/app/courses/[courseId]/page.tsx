'use client';
import { notFound, useParams } from 'next/navigation';
import { useDoc, useFirestore, useMemoFirebase } from '@/firebase';
import type { Course } from '@/lib/types';
import { doc } from 'firebase/firestore';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Clock, GraduationCap, Tag, Loader2 } from 'lucide-react';
import { Recommendations } from '@/components/ai/recommendations';

export default function CoursePage() {
  const params = useParams();
  const courseId = params.courseId as string;
  const firestore = useFirestore();

  const courseRef = useMemoFirebase(() => {
      if (!firestore || !courseId) return null;
      return doc(firestore, 'courses', courseId);
  }, [firestore, courseId]);

  const { data: course, isLoading, error } = useDoc<Course>(courseRef);

  if (isLoading) {
    return (
        <div className="container max-w-4xl mx-auto px-4 py-12">
            <div className="flex items-center justify-center h-96">
                <Loader2 className="h-12 w-12 animate-spin text-primary" />
            </div>
        </div>
    );
  }

  if (!course && !isLoading) {
    notFound();
  }

  if(!course) return null;

  const embedUrl = course.videoUrl.replace("watch?v=", "embed/");

  return (
    <div className="container max-w-4xl mx-auto px-4 py-12">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-headline font-bold mb-4">{course.title}</h1>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-muted-foreground text-sm">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4" />
              <span>{course.instructor}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{course.duration}</span>
            </div>
          </div>
        </div>

        <div className="aspect-video w-full overflow-hidden rounded-lg shadow-lg">
          <iframe
            className="w-full h-full"
            src={embedUrl}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <div>
          <h2 className="text-2xl font-headline font-semibold mb-3">About this course</h2>
          <p className="text-foreground/80 leading-relaxed">{course.description}</p>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-3">
              <Tag className="h-5 w-5 text-muted-foreground" />
              <h3 className="text-lg font-headline font-semibold">Tags</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {course.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-sm">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <Separator />

        <Recommendations courseTopic={course.title} currentVideo={course.title} />
      </div>
    </div>
  );
}
