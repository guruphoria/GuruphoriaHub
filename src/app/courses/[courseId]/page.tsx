'use client';

import { notFound, useParams } from 'next/navigation';
import { useDoc, useFirestore, useMemoFirebase, useCollection } from '@/firebase';
import type { Course } from '@/lib/types';
import { doc, collection } from 'firebase/firestore';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Clock, 
  GraduationCap, 
  Tag, 
  Loader2, 
  ChevronRight, 
  Youtube, 
  Share2, 
  Bookmark, 
  Github, 
  ExternalLink, 
  Code, 
  Download, 
  FileText, 
  Newspaper,
  MessageSquare,
  Send,
  Sparkles,
  CheckCircle2,
  PlayCircle,
  Eye,
  Milestone,
  ArrowRight
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function CoursePage() {
  const params = useParams();
  const courseId = params.courseId as string;
  const firestore = useFirestore();
  const [aiQuery, setAiQuery] = useState('');

  const courseRef = useMemoFirebase(() => {
      if (!firestore || !courseId) return null;
      return doc(firestore, 'courses', courseId);
  }, [firestore, courseId]);

  const { data: course, isLoading } = useDoc<Course>(courseRef);

  const coursesQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return collection(firestore, 'courses');
  }, [firestore]);

  const { data: relatedCourses } = useCollection<Course>(coursesQuery);

  if (isLoading) {
    return (
        <div className="flex items-center justify-center min-h-screen bg-[#050816]">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
        </div>
    );
  }

  if (!course && !isLoading) {
    notFound();
  }

  if(!course) return null;

  const embedUrl = course.videoUrl.replace("watch?v=", "embed/");
  const filteredRelated = relatedCourses?.filter(c => c.id !== course.id).slice(0, 6) || [];

  return (
    <div className="min-h-screen bg-[#050816] text-white pb-20">
      {/* Breadcrumb */}
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
          
          {/* Main Content (Left) */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Video Hero */}
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
                  <div className="flex items-center gap-2">
                    <Eye className="h-4 w-4" />
                    <span>4.2k Views</span>
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

            {/* Overview */}
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

            {/* Checklist */}
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

            {/* Resources */}
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
                    <Button variant="link" className="p-0 h-auto text-primary text-xs flex items-center gap-2 group">
                      Explore <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Card>
                ))}
              </div>
            </section>

            {/* Medium Guide */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold">Read the Complete Guide</h2>
              <Card className="glass overflow-hidden group bg-[#101828]/50 border-white/5 flex flex-col md:flex-row">
                <div className="relative w-full md:w-64 h-48 md:h-auto shrink-0">
                  <Image 
                    src={`https://picsum.photos/seed/guide-${courseId}/600/400`} 
                    alt="Guide Cover" 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    data-ai-hint="blog image"
                  />
                </div>
                <div className="p-8 space-y-4 flex-grow">
                  <Badge variant="outline" className="border-primary/30 text-primary text-[10px] uppercase">Detailed Blog</Badge>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors leading-tight">Mastering {course.title}: A Deep Dive into Implementation</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">This comprehensive guide covers everything from setting up your environment to advanced optimization strategies for your AI agents.</p>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs text-muted-foreground flex items-center gap-2"><Newspaper className="h-4 w-4" /> 12 min read</span>
                    <Button className="bg-white/5 hover:bg-white/10 text-white rounded-full px-6">
                      Read on Medium
                    </Button>
                  </div>
                </div>
              </Card>
            </section>

            {/* Comments */}
            <section className="space-y-6 pt-10">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <MessageSquare className="h-6 w-6 text-primary" /> Discussion
                </h2>
                <div className="text-sm text-muted-400">12 Comments</div>
              </div>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <Avatar className="h-10 w-10 border border-white/10">
                    <AvatarFallback className="bg-primary/20 text-primary">ME</AvatarFallback>
                  </Avatar>
                  <div className="flex-grow space-y-3">
                    <textarea 
                      placeholder="Share your thoughts or ask a question..." 
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm outline-none focus:border-primary/50 transition-colors min-h-[100px] resize-none"
                    />
                    <div className="flex justify-end">
                      <Button className="bg-primary text-white rounded-full px-6">Post Comment</Button>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  {[1, 2].map(i => (
                    <div key={i} className="flex gap-4">
                      <Avatar className="h-10 w-10 border border-white/10">
                        <AvatarImage src={`https://picsum.photos/seed/user-${i}/100/100`} />
                        <AvatarFallback>U{i}</AvatarFallback>
                      </Avatar>
                      <div className="flex-grow space-y-2">
                        <div className="flex items-center gap-3">
                          <span className="font-bold text-sm">DevExplorer_{i}</span>
                          <span className="text-[10px] text-muted-foreground">3 hours ago</span>
                        </div>
                        <p className="text-sm text-foreground/80 leading-relaxed">
                          This tutorial is exactly what I needed. The explanation of the {course.title.split(' ')[0]} architecture was super clear. Can you share more about the deployment phase?
                        </p>
                        <div className="flex items-center gap-4 pt-1">
                          <button className="text-[10px] text-muted-foreground hover:text-primary transition-colors">Like</button>
                          <button className="text-[10px] text-muted-foreground hover:text-primary transition-colors">Reply</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar Content (Right) */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* AI Widget */}
            <Card className="glass border-primary/20 bg-primary/5 overflow-hidden sticky top-24">
              <div className="bg-primary/10 p-6 border-b border-white/5">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <h3 className="font-bold text-lg">Ask Guruphoria AI</h3>
                </div>
                <p className="text-xs text-muted-foreground">Ask questions specifically related to this lesson.</p>
              </div>
              <div className="p-6 space-y-6">
                <div className="space-y-2">
                  <p className="text-[10px] uppercase text-muted-foreground font-bold tracking-widest">Example Queries</p>
                  <div className="flex flex-wrap gap-2">
                    {["Explain MCP", "How Gemini works?", "RAG vs Agentic AI", "Why Firebase?"].map(p => (
                      <button 
                        key={p} 
                        onClick={() => setAiQuery(p)}
                        className="text-[10px] bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1.5 rounded-full transition-colors"
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <Input 
                    value={aiQuery}
                    onChange={(e) => setAiQuery(e.target.value)}
                    placeholder="Ask anything about this lesson..."
                    className="bg-black/20 border-white/10 rounded-xl pl-4 pr-12 py-6 text-sm"
                  />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 text-primary hover:text-white transition-colors">
                    <Send className="h-5 w-5" />
                  </button>
                </div>

                <div className="text-[10px] text-center text-muted-foreground italic">
                  Powered by Gemini 1.5 & Genkit
                </div>
              </div>
            </Card>

            {/* Downloads */}
            <section className="space-y-4">
              <h3 className="font-bold text-lg px-2">Resources</h3>
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
                        <div className="text-sm font-semibold">{item.title}</div>
                        <div className="text-[10px] text-muted-foreground uppercase">{item.type} • {item.size}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </section>

            {/* Next Step */}
            <section className="space-y-4">
              <h3 className="font-bold text-lg px-2">Next Learning Step</h3>
              <Card className="glass p-6 bg-gradient-to-br from-primary/10 to-transparent border-primary/20 relative overflow-hidden">
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center gap-3 text-xs font-bold text-primary">
                    <Milestone className="h-4 w-4" /> RECOMMENDED PATH
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary/40"></div>
                      <span className="text-xs text-muted-foreground line-through">Currently Watching</span>
                    </div>
                    <div className="w-px h-6 bg-primary/20 ml-1"></div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(14,165,255,0.8)]"></div>
                      <span className="text-sm font-bold">Advanced Agent Orchestration</span>
                    </div>
                    <div className="w-px h-6 bg-primary/20 ml-1"></div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-white/10"></div>
                      <span className="text-sm text-muted-foreground">Production Deployment Lab</span>
                    </div>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 rounded-full font-bold mt-4">
                    Continue Learning
                  </Button>
                </div>
              </Card>
            </section>
          </div>
        </div>

        {/* Continue Learning Grid */}
        <section className="py-24 space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-4">
            <div className="space-y-2">
              <h2 className="text-4xl font-bold">Continue Learning</h2>
              <p className="text-muted-foreground">Related tutorials to master the {course.title.split(' ')[0]} ecosystem.</p>
            </div>
            <Button variant="ghost" className="hover:text-primary group">
              View All Tutorials <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRelated.map((vid, idx) => (
              <Card key={idx} className="glass overflow-hidden group bg-[#101828]/50 border-white/5">
                <div className="relative aspect-video">
                  <Image 
                    src={vid.thumbnailUrl || `https://picsum.photos/seed/related-${vid.id}/600/400`} 
                    alt={vid.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    data-ai-hint="tutorial thumbnail"
                  />
                  <div className="absolute bottom-3 right-3 bg-black/80 px-2 py-1 rounded text-[10px] font-bold border border-white/10">{vid.duration}</div>
                  <div className="absolute top-3 left-3 flex gap-2">
                    <Badge className="bg-primary/20 text-primary border-none text-[10px]">Intermediate</Badge>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <h4 className="font-bold text-lg group-hover:text-primary transition-colors line-clamp-2">{vid.title}</h4>
                  <div className="flex flex-wrap gap-2">
                    {vid.tags.slice(0, 2).map(t => <Badge key={t} variant="outline" className="text-[10px] border-white/10 text-muted-foreground">{t}</Badge>)}
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-muted-foreground pt-2">
                    <span>Oct 24 • 4.2k views</span>
                    <Button asChild variant="outline" size="sm" className="h-8 glass border-white/10">
                      <Link href={`/courses/${vid.id}`}>
                        <PlayCircle className="mr-2 h-3 w-3" /> Watch
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-24">
          <Card className="glass p-12 lg:p-20 relative overflow-hidden text-center max-w-5xl mx-auto rounded-[3rem] bg-[#101828]/60 border-white/10">
            <div className="relative z-10 space-y-8 max-w-2xl mx-auto">
              <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary mb-4">
                <Sparkles className="h-8 w-8" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">Join the Inner Circle</h2>
              <p className="text-muted-foreground text-lg">Get the latest AI engineering updates and exclusive tutorial resources directly in your inbox.</p>
              
              <div className="flex flex-col sm:flex-row gap-3 pt-6">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-grow bg-white/5 border border-white/10 rounded-full px-8 py-4 outline-none focus:border-primary transition-colors text-white text-lg"
                />
                <Button className="bg-primary hover:bg-primary/90 rounded-full px-10 py-4 h-auto text-lg font-bold neon-glow">
                  Subscribe
                </Button>
              </div>
            </div>
          </Card>
        </section>

      </div>
    </div>
  );
}
