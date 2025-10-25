'use client';
import { CourseCard } from '@/components/course-card';
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import type { Course } from '@/lib/types';
import { collection } from 'firebase/firestore';
import { Card } from '@/components/ui/card';

export default function CoursesPage() {
  const firestore = useFirestore();

  const coursesQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return collection(firestore, 'courses');
  }, [firestore]);

  const { data: courses, isLoading } = useCollection<Course>(coursesQuery);

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">All Courses</h1>
        <p className="text-lg text-muted-foreground mt-2">Find your next learning adventure.</p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {isLoading && Array.from({ length: 4 }).map((_, i) => (
             <Card key={i} className="flex flex-col h-full overflow-hidden">
                <div className="aspect-video w-full bg-muted animate-pulse"></div>
                <div className="p-6 flex-grow space-y-4">
                    <div className="h-6 w-3/4 bg-muted animate-pulse rounded"></div>
                    <div className="h-4 w-full bg-muted animate-pulse rounded"></div>
                    <div className="h-4 w-1/2 bg-muted animate-pulse rounded"></div>
                </div>
                <div className="p-6 pt-0">
                     <div className="h-10 w-full bg-muted animate-pulse rounded"></div>
                </div>
            </Card>
        ))}
        {courses?.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
