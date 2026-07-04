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
  const resolvedParams = await params;
  const courseId = resolvedParams.courseId;
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
    <div className="min-h-screen bg-[#050816] text-white pb-16 sm:pb-20">
      {/* Mobile-friendly Breadcrumbs */}
      <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-8">
        <nav className="flex items-center gap-2 sm:gap-3 text-[9px] sm:text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] overflow-x-auto whitespace-nowrap scrollbar-hide">
          <Link href="/" className="hover:text-primary transition-colors shrink-0">Home</Link>
          <ChevronRight className="h-3 w-3 text-primary shrink-0" />
          <Link href="/courses" className="hover:text-primary transition-colors shrink-0">Tutorials</Link>
          <ChevronRight className="h-3 w-3 text-primary shrink-0" />
          <span className="text-white/40 truncate max-w-[120px] sm:max-w-none">{course.title}</span>
        </nav>
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-8 sm:space-y-12">
            <div className="space-y-6 sm:space-y-8">
              {/* Responsive Video Container */}
              <div className="aspect-video w-full overflow-hidden rounded-2xl sm:rounded-3xl glass border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative">
                <iframe
                  className="w-full h-full"
                  src={embedUrl}
                  title={course.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-headline font-extrabold leading-tight tracking-tight px-1">
                  {course.title}
                </h1>

                {/* Info Bar - Wrap on mobile */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 text-[11px] sm:text-xs text-muted-foreground bg-white/5 p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-white/5">
                  <div className="flex items-center gap-2 sm:pr-4 sm:border-r border-white/10">
                    <GraduationCap className="h-4 w-4 text-primary shrink-0" />
                    <span className="font-bold text-white/80">{course.instructor}</span>
                  </div>
                  <div className="flex items-center gap-2 sm:pr-4 sm:border-r border-white/10">
                    <Clock className="h-4 w-4 text-primary shrink-0" />
                    <span className="font-bold text-white/80">{course.duration}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1 sm:pt-0">
                    {course.tags?.map(tag => (
                      <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary border-none text-[8px] sm:text-[9px] font-black uppercase tracking-widest px-2 sm:px-3 py-1">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4 pt-2">
                  <Button asChild className="bg-[#EA3323] hover:bg-[#EA3323]/90 text-white rounded-full px-6 sm:px-8 h-10 sm:h-12 font-bold text-sm sm:text-lg w-full sm:w-auto transition-transform hover:scale-105">
                    <Link href={course.videoUrl} target="_blank">
                      <Youtube className="h-5 w-5 sm:h-6 sm:w-6 mr-2" /> Watch on YouTube
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* About Section */}
            <section className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-3 sm:gap-4 px-1">
                <div className="w-1 sm:w-1.5 h-6 sm:h-8 bg-primary rounded-full shadow-[0_0_15px_rgba(14,165,255,0.5)]"></div>
                <h2 className="text-2xl sm:text-3xl font-bold">About this Tutorial</h2>
              </div>
              <Card className="glass p-6 sm:p-10 rounded-2xl sm:rounded-[2rem] border-white/5 bg-[#101828]/40 space-y-6 sm:space-y-8 leading-relaxed text-muted-foreground text-sm sm:text-lg">
                <p>{course.description}</p>
                
                {/* Responsive Grid inside Content */}
                <div className="grid sm:grid-cols-2 gap-8 sm:gap-10 pt-6 border-t border-white/5">
                  <div className="space-y-3 sm:space-y-4">
                    <h3 className="text-white font-bold flex items-center gap-2 sm:gap-3 text-lg sm:text-xl">
                      <Code className="h-5 w-5 sm:h-6 sm:w-6 text-primary" /> Prerequisites
                    </h3>
                    <ul className="text-xs sm:text-sm space-y-2 sm:space-y-3">
                      <li className="flex items-start gap-2">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0"></div>
                        <span>Understanding of Modern Tech Stack</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>Basic Programming Knowledge</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </section>
          </div>

          {/* Sidebar Area - Stacks on mobile */}
          <div className="lg:col-span-4 space-y-8 sm:space-y-10">
            <Recommendations courseTopic={course.title} currentVideo={course.title} />
          </div>
        </div>
      </div>
    </div>
  );
}
