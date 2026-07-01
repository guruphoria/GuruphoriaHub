import { redirect } from 'next/navigation';

/**
 * @fileOverview Redirects legacy unified viewer links to the new static dynamic routes.
 */
export default function LegacyCourseViewRedirect({ searchParams }: { searchParams: { id?: string } }) {
  if (searchParams.id) {
    redirect(`/courses/${searchParams.id}`);
  }
  redirect('/courses');
}
