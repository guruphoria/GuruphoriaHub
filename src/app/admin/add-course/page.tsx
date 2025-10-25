'use client';
import { CourseForm } from '@/components/admin/course-form';
import { addDocumentNonBlocking } from '@/firebase';
import { useFirestore } from '@/firebase';
import type { CourseFormData } from '@/lib/types';
import { collection } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';

export default function AddCoursePage() {
  const router = useRouter();
  const firestore = useFirestore();
  const { toast } = useToast();

  const handleSubmit = async (data: CourseFormData) => {
    if (!firestore) return;
    const coursesCollection = collection(firestore, 'courses');
    
    try {
      await addDocumentNonBlocking(coursesCollection, data);
      toast({
        title: 'Course Added',
        description: `"${data.title}" has been successfully added.`,
      });
      router.push('/admin');
    } catch (error) {
      console.error('Error adding course:', error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'There was a problem adding the course. Please try again.',
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-headline font-bold mb-8">Add New Course</h1>
        <CourseForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
}
