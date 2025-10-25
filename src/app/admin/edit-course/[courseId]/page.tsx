'use client';
import { CourseForm } from '@/components/admin/course-form';
import { setDocumentNonBlocking, useDoc, useFirestore, useMemoFirebase } from '@/firebase';
import { Course, CourseFormData } from '@/lib/types';
import { doc } from 'firebase/firestore';
import { useParams, useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

export default function EditCoursePage() {
  const router = useRouter();
  const params = useParams();
  const courseId = params.courseId as string;
  const firestore = useFirestore();
  const { toast } = useToast();

  const courseRef = useMemoFirebase(() => {
    if (!firestore || !courseId) return null;
    return doc(firestore, 'courses', courseId);
  }, [firestore, courseId]);

  const { data: course, isLoading } = useDoc<Course>(courseRef);

  const handleSubmit = async (data: CourseFormData) => {
    if (!firestore || !courseId) return;

    try {
        const docRef = doc(firestore, 'courses', courseId);
        await setDocumentNonBlocking(docRef, data, { merge: true });
        toast({
            title: 'Course Updated',
            description: `"${data.title}" has been successfully updated.`,
        });
        router.push('/admin');
    } catch (error) {
        console.error('Error updating course:', error);
        toast({
            variant: 'destructive',
            title: 'Error',
            description: 'There was a problem updating the course. Please try again.',
        });
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!course) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold">Course not found</h2>
        <p className="text-muted-foreground mt-2">The course you are trying to edit does not exist.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-headline font-bold mb-8">Edit Course</h1>
        <CourseForm
          onSubmit={handleSubmit}
          initialData={course}
        />
      </div>
    </div>
  );
}
