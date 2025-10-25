'use client'
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CourseCard } from '@/components/course-card';
import { getPlaceholderImage } from '@/lib/placeholder-images';
import { ArrowRight, BookOpenText, Target } from 'lucide-react';
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { collection, query, limit } from 'firebase/firestore';
import type { Course } from '@/lib/types';

export default function Home() {
  const firestore = useFirestore();
  const heroImage = getPlaceholderImage('hero-image');

  const featuredCoursesQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'courses'), limit(3));
  }, [firestore]);

  const { data: featuredCourses, isLoading } = useCollection<Course>(featuredCoursesQuery);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full bg-primary/5 dark:bg-primary/10">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center px-4 md:px-6 py-24 md:py-32">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold tracking-tighter text-primary-foreground-on-background">
              Unlock Your Potential with Expert-Led Courses
            </h1>
            <p className="max-w-xl text-lg text-muted-foreground">
              Guruphoria is your gateway to mastering new skills. Explore our curated library of courses and start your learning journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/courses">
                  Explore Courses
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                data-ai-hint={heroImage.imageHint}
                width={600}
                height={400}
                className="rounded-xl shadow-2xl aspect-video object-cover"
              />
            )}
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="w-full bg-background">
        <div className="container mx-auto px-4 md:px-6 py-24">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Our Mission</h2>
            <p className="text-lg text-muted-foreground">
              We believe in accessible, high-quality education for everyone. Guruphoria is dedicated to providing engaging and practical courses that empower individuals to achieve their personal and professional goals.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-4xl mx-auto">
            <Card className="p-6 flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-primary/10 mb-4">
                  <BookOpenText className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-headline font-semibold mb-2">Expert-Led Content</h3>
                <p className="text-muted-foreground">Learn from industry professionals with real-world experience and a passion for teaching.</p>
            </Card>
            <Card className="p-6 flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-accent/10 mb-4">
                  <Target className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-headline font-semibold mb-2">Flexible Learning</h3>
                <p className="text-muted-foreground">Our on-demand video courses allow you to learn at your own pace, anytime, anywhere.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="w-full bg-primary/5 dark:bg-primary/10">
        <div className="container mx-auto px-4 md:px-6 py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Featured Courses</h2>
            <p className="text-lg text-muted-foreground mt-2">Get a glimpse of what our platform has to offer.</p>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading && Array.from({ length: 3 }).map((_, i) => (
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
            {featuredCourses?.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="/courses">View All Courses</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

// Custom style for h1 to ensure it's readable on light background
const styles = `
  .text-primary-foreground-on-background {
    color: hsl(var(--foreground));
  }
  .dark .text-primary-foreground-on-background {
    color: hsl(var(--primary-foreground));
  }
`;

// A simple way to inject style without creating a separate CSS file
const StyleInjector = () => <style>{styles}</style>;

// Since Home is a Server Component, we need a client component to inject styles.
// This is a workaround to avoid creating a new file.
const CustomStyles = () => {
  'use client';
  return <StyleInjector />;
};
