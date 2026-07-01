import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { initializeFirebase } from '@/firebase';
import type { Course } from '@/lib/types';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Recommendations } from '@/components/ai/recommendations';
import { 
  Clock, 
  GraduationCap, 
  ChevronRight, 
  Youtube, 
  Code, 
  CheckCircle2
} from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

/**
 * @fileOverview The course viewer page.
 * Uses generateStaticParams to pre-build course pages for performance and SEO.
 */

export async function generateStaticParams() {
  try {
    const { firestore } = initializeFirebase();
    const coursesCol = collection(firestore, 'courses');
    const coursesSnapshot = await getDocs(coursesCol);
    
    return coursesSnapshot.docs.map(doc => ({
      courseId: doc.id,
    }));
  } catch (error) {
    console.error('Error in generateStaticParams:', error);
    return [];
  }
}

async function getCourse(id: string) {
  try {
    const { firestore } = initializeFirebase();
    const courseRef = doc(firestore, 'courses', id);
    const courseSnap = await getDoc(courseRef);
    
    if (!courseSnap.exists()) return null;
    return { ...courseSnap.data(), id: courseSnap.id } as Course;
  } catch (error) {
    console.error('Error fetching course:', error);
    return null;
  }
}

interface PageProps {
  params: Promise<{ courseId: string }>;
}

export default async function CoursePage({ params }: PageProps) {
  const { courseId } = await params;
  const course = await getCourse(courseId);

  if (!course) {
    notFound();
  }

  const videoUrl = course.videoUrl || '';
  const videoId = videoUrl.includes('v=') 
    ? videoUrl.split('v=')[1]?.split('&')[0] 
    : videoUrl.split('/').pop() || '';
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="min-h-screen bg-[#050816] text-white pb-20">
      <div className="container mx-auto px-6 py-8">
        <nav className="flex items-center gap-3 text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="h-3 w-3 text-primary" />
          <Link href="/courses" className="hover:text-primary transition-colors">Tutorials</Link>
          <ChevronRight className="h-3 w-3 text-primary" />
          <span className="text-white/40 truncate max-w-[150px] sm:max-w-none">{course.title}</span>
        </nav>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-12">
            <div className="space-y-8">
              <div className="aspect-video w-full overflow-hidden rounded-3xl glass border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative">
                <iframe
                  className="w-full h-full"
                  src={embedUrl}
                  title={course.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="space-y-6">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-headline font-extrabold leading-tight tracking-tight">
                  {course.title}
                </h1>

                <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground bg-white/5 p-5 rounded-2xl border border-white/5">
                  <div className="flex items-center gap-2 pr-4 border-r border-white/10">
                    <GraduationCap className="h-4 w-4 text-primary" />
                    <span className="font-bold text-white/80">{course.instructor}</span>
                  </div>
                  <div className="flex items-center gap-2 pr-4 border-r border-white/10">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="font-bold text-white/80">{course.duration}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {course.tags?.map(tag => (
                      <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary border-none text-[9px] font-black uppercase tracking-widest px-3 py-1">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <Button asChild className="bg-[#EA3323] hover:bg-[#EA3323]/90 text-white rounded-full px-8 h-12 font-bold text-lg">
                    <Link href={course.videoUrl} target="_blank">
                      <Youtube className="h-6 w-6 mr-2" /> Watch on YouTube
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            <section className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-1.5 h-8 bg-primary rounded-full shadow-[0_0_15px_rgba(14,165,255,0.5)]"></div>
                <h2 className="text-3xl font-bold">About this Tutorial</h2>
              </div>
              <Card className="glass p-10 rounded-[2rem] border-white/5 bg-[#101828]/40 space-y-8 leading-relaxed text-muted-foreground text-lg">
                <p>{course.description}</p>
                <div className="grid md:grid-cols-2 gap-10 pt-6 border-t border-white/5">
                  <div className="space-y-4">
                    <h3 className="text-white font-bold flex items-center gap-3 text-xl">
                      <Code className="h-6 w-6 text-primary" /> Prerequisites
                    </h3>
                    <ul className="text-sm space-y-3">
                      <li className="flex items-start gap-2">
                        <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0"></div>
                        <span>Understanding of Modern Tech Stack</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                        <span>Basic Programming Knowledge</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </section>
          </div>

          <div className="lg:col-span-4 space-y-10">
            <Recommendations courseTopic={course.title} currentVideo={course.title} />
          </div>
        </div>
      </div>
    </div>
  );
}
