'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function RedirectPage() {
  const params = useParams();
  const router = useRouter();

  useEffect(() => {
    if (params.courseId) {
      router.replace(`/courses/view?id=${params.courseId}`);
    } else {
      router.replace('/courses');
    }
  }, [params.courseId, router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#050816] text-white">
      <p className="animate-pulse">Redirecting to tutorial...</p>
    </div>
  );
}
