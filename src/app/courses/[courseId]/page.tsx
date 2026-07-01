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
  Share2, 
  Bookmark, 
  Github, 
  ExternalLink, 
  Code, 
  Download, 
  FileText, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

/**
 * @fileOverview The primary course viewer page.
 * Refactored to a Server Component to support static generation (generateStaticParams).
 */

export async function generateStaticParams() {
  const { firestore } = initializeFirebase();
  const coursesCol = collection(firestore, 'courses');
  const coursesSnapshot = await getDocs(coursesCol);
  return coursesSnapshot.docs.map(doc => ({
    courseId: doc.id,
  }));
}

async function getCourse(id: string) {
  const { firestore } = initializeFirebase();
  const courseRef = doc(firestore, 'courses', id);
  const courseSnap = await getDoc(courseRef);
  if (!courseSnap.exists()) return null;
  return { ...courseSnap.data(), id: courseSnap.id } as Course;
}

export default async function CoursePage({ params }: { params: Promise<{ courseId: string }> }) {
  const { courseId } = await params;
  const course = await getCourse(courseId);

  if (!course) {
    notFound();
  }

  const embedUrl = course.videoUrl.replace("watch?v=", "embed/");

  return (
    <div className="min-h-screen bg-[#050816] text-white pb-20">
      <div className="container mx-auto px-6 py-6">
        <nav className="flex items-center gap-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link href="/explore" className="hover:text-primary transition-colors">Explore</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-white/60">Tutorials</span>
          <ChevronRight className="h-3 w-3" />
          <span className="text-primary truncate max-w-[200px] sm:max-w-none">{course.title}</span>
        </nav>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-12">
            <div className="space-y-6">
              <div className="aspect-video w-full overflow-hidden rounded-2xl glass border-white/10 shadow-2xl relative">
                <iframe
                  className="w-full h-full"
                  src={embedUrl}
                  title={course.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <h1 className="text-3xl md:text-4xl font-headline font-bold leading-tight">{course.title}</h1>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="glass border-white/10 rounded-full h-9">
                      <Share2 className="h-4 w-4 mr-2" /> Share
                    </Button>
                    <Button variant="outline" size="sm" className="glass border-white/10 rounded-full h-9">
                      <Bookmark className="h-4 w-4 mr-2" /> Save
                    </Button>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground bg-white/5 p-4 rounded-xl border border-white/5">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4 text-primary" />
                    <span>{course.instructor}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {course.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary border-none text-[10px] uppercase">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <Button asChild className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 font-bold">
                    <Link href={course.videoUrl} target="_blank">
                      <Youtube className="h-5 w-5 mr-2" /> Watch on YouTube
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-8 bg-primary rounded-full"></div>
                <h2 className="text-2xl font-bold">About this Tutorial</h2>
              </div>
              <div className="glass p-8 rounded-2xl border-white/5 space-y-6 leading-relaxed text-muted-foreground">
                <p>{course.description}</p>
                
                <div className="grid md:grid-cols-2 gap-8 pt-4">
                  <div className="space-y-3">
                    <h3 className="text-white font-semibold flex items-center gap-2">
                      <Code className="h-4 w-4 text-primary" /> Prerequisites
                    </h3>
                    <ul className="text-sm list-disc list-inside space-y-1">
                      <li>Basic JavaScript/TypeScript</li>
                      <li>Node.js installed</li>
                      <li>Firebase project setup</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-white font-semibold flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" /> Estimated Time
                    </h3>
                    <p className="text-sm">Approximately {course.duration} for content + 2 hours for practice.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold">What You'll Learn</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Understand Agentic AI Concepts",
                  "Build Scalable AI Workflows",
                  "Connect Gemini & Anthropic APIs",
                  "Real-time Firebase Integration",
                  "Secure Deployment Strategies",
                  "Advanced Prompt Engineering"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5 group hover:border-primary/50 transition-colors">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="text-sm text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold">Project Resources</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: "GitHub Repository", icon: <Github />, desc: "Complete source code with documentation.", link: "https://github.com/PuneetShivaay" },
                  { title: "Live Demo", icon: <ExternalLink />, desc: "See the final application in action.", link: "#" },
                  { title: "API References", icon: <Code />, desc: "Documentation for all integrated services.", link: "#" },
                  { title: "Documentation", icon: <FileText />, desc: "Step-by-step written tutorial guide.", link: "#" }
                ].map((res, idx) => (
                  <Card key={idx} className="glass p-6 group hover:border-primary/50 transition-all bg-[#101828]/50 border-white/5">
                    <div className="bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                      {res.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-2">{res.title}</h3>
                    <p className="text-xs text-muted-foreground mb-4">{res.desc}</p>
                    <Button variant="link" asChild className="p-0 h-auto text-primary text-xs flex items-center gap-2 group">
                      <Link href={res.link} className="flex items-center">
                        Explore <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform ml-2" />
                      </Link>
                    </Button>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          <div className="lg:col-span-4 space-y-8">
            <Recommendations courseTopic={course.title} currentVideo={course.title} />

            <section className="space-y-4">
              <h3 className="font-bold text-lg px-2 text-white">Resources</h3>
              <div className="space-y-3">
                {[
                  { title: "Presentation Slides", type: "PDF", size: "2.4 MB" },
                  { title: "Project Assets", type: "ZIP", size: "15.8 MB" },
                  { title: "Cheat Sheet", type: "PDF", size: "1.1 MB" },
                  { title: "Prompt Pack", type: "JSON", size: "0.4 MB" }
                ].map((item, idx) => (
                  <button key={idx} className="w-full glass p-4 rounded-xl flex items-center justify-between group hover:bg-white/5 border-white/5 transition-all">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white/5 rounded-lg text-muted-foreground group-hover:text-primary transition-colors">
                        <Download className="h-4 w-4" />
                      </div>
                      <div className="text-left">
                        <div className="text-sm font-semibold text-white">{item.title}</div>
                        <div className="text-[10px] text-muted-foreground uppercase">{item.type} • {item.size}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}