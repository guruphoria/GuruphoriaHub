'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { fetchLatestVideos } from '@/lib/youtube';
import { fetchLatestArticles } from '@/lib/medium';
import type { YouTubeVideo, MediumArticle } from '@/lib/types';
import { 
  Search, 
  Sparkles, 
  Youtube, 
  Github, 
  Newspaper, 
  ArrowRight, 
  Clock, 
  BarChart3, 
  BookOpen, 
  Cpu, 
  Code2, 
  Database, 
  Layers,
  Zap,
  PlayCircle,
  ExternalLink,
  Milestone,
  MessageSquare,
  Send,
  Linkedin,
  Twitter,
  Calendar
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [articles, setArticles] = useState<MediumArticle[]>([]);
  const [isLoadingVideos, setIsLoadingVideos] = useState(true);
  const [isLoadingArticles, setIsLoadingArticles] = useState(true);

  useEffect(() => {
    async function loadData() {
      const [latestVideos, latestArticles] = await Promise.all([
        fetchLatestVideos(6),
        fetchLatestArticles(4)
      ]);
      setVideos(latestVideos);
      setArticles(latestArticles);
      setIsLoadingVideos(false);
      setIsLoadingArticles(false);
    }
    loadData();
  }, []);

  const categories = [
    { name: 'Artificial Intelligence', icon: '🤖' },
    { name: 'LLM Engineering', icon: '🧠' },
    { name: 'Agentic AI', icon: '⚡' },
    { name: 'Firebase', icon: '🔥' },
    { name: 'React', icon: '⚛' },
    { name: 'Next.js', icon: '▲' },
    { name: 'Python', icon: '🐍' },
    { name: 'Cloud', icon: '☁' },
    { name: 'Automation', icon: '⚙' },
    { name: 'Software Engineering', icon: '💻' },
    { name: 'Interview Prep', icon: '🎯' },
    { name: 'System Design', icon: '📚' },
  ];

  const trendingItems = [
    { title: 'Build an AI Agent with Genkit', type: 'Tutorial', icon: <Zap className="h-5 w-5" />, date: '2 days ago' },
    { title: 'Next.js 15 & Firebase Auth', type: 'Video', icon: <Youtube className="h-5 w-5" />, date: '4 days ago' },
    { title: 'The Future of LLM Apps', type: 'Article', icon: <Newspaper className="h-5 w-5" />, date: 'Yesterday' },
    { title: 'Agentic Workflow Library', type: 'Open Source', icon: <Github className="h-5 w-5" />, date: '1 week ago' },
  ];

  const roadmaps = [
    { title: 'AI Engineering Roadmap', time: '12 Weeks', diff: 'Advanced', lessons: 48, progress: 0 },
    { title: 'React Mastery', time: '8 Weeks', diff: 'Intermediate', lessons: 32, progress: 0 },
    { title: 'Firebase Complete Guide', time: '4 Weeks', diff: 'Beginner', lessons: 15, progress: 0 },
    { title: 'LLM Engineering', time: '6 Weeks', diff: 'Advanced', lessons: 24, progress: 0 },
    { title: 'Automation with AI', time: '5 Weeks', diff: 'Intermediate', lessons: 20, progress: 0 },
    { title: 'Full Stack Development', time: '16 Weeks', diff: 'Advanced', lessons: 60, progress: 0 },
  ];

  const projects = [
    { title: 'AI Resume Analyzer', desc: 'ATS-friendly resume parser and optimizer.', tech: ['Python', 'Gemini'], diff: 'Hard' },
    { title: 'AI Chatbot Framework', desc: 'Customizable LLM chatbot with memory.', tech: ['Next.js', 'OpenAI'], diff: 'Medium' },
    { title: 'MCP Server Demo', desc: 'Model Context Protocol implementation.', tech: ['Node.js', 'Anthropic'], diff: 'Hard' },
    { title: 'Firebase SaaS Starter', desc: 'The ultimate boilerplate for Firebase.', tech: ['React', 'Firebase'], diff: 'Medium' },
    { title: 'React Admin Dashboard', desc: 'Modern dashboard for data visualization.', tech: ['React', 'Tailwind'], diff: 'Easy' },
    { title: 'Chrome AI Extension', desc: 'Summarize web pages using Local LLM.', tech: ['JS', 'WebGPU'], diff: 'Medium' },
  ];

  const technologies = [
    { name: 'React', desc: 'UI Library' }, { name: 'Next.js', desc: 'Framework' },
    { name: 'Firebase', desc: 'BaaS' }, { name: 'TypeScript', desc: 'Language' },
    { name: 'Node.js', desc: 'Runtime' }, { name: 'Python', desc: 'AI/Data' },
    { name: 'Docker', desc: 'Containers' }, { name: 'Git', desc: 'VCS' },
    { name: 'GitHub', desc: 'Dev Platform' }, { name: 'Gemini', desc: 'AI Model' },
    { name: 'Genkit', desc: 'AI SDK' }, { name: 'MCP', desc: 'Context' },
    { name: 'LLMs', desc: 'Core Tech' }, { name: 'Prompt Eng', desc: 'Optimization' },
    { name: 'ML', desc: 'Algorithms' }, { name: 'System Design', desc: 'Architecture' },
  ];

  return (
    <div className="flex flex-col bg-[#050816] text-white overflow-hidden min-h-screen">
      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
        <div className="container mx-auto max-w-5xl relative z-10 text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-headline font-extrabold tracking-tight">
              Explore <span className="text-gradient">AI, Software Engineering</span> <br /> & Modern Development
            </h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Discover practical YouTube tutorials, GitHub projects, Medium articles, learning paths, and developer resources—all in one place.
            </p>
          </div>

          <div className="relative max-w-2xl mx-auto group">
            <div className="absolute -inset-1 bg-primary/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative flex items-center glass rounded-full px-6 py-2 border-white/10">
              <Search className="text-muted-foreground h-5 w-5 mr-3" />
              <Input 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search AI, React, Firebase, Python, LLMs, Agentic AI..."
                className="bg-transparent border-none focus-visible:ring-0 text-lg h-12"
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button 
                key={cat.name} 
                className="glass px-4 py-2 rounded-full text-sm font-medium border-white/5 hover:border-primary/50 hover:bg-white/5 transition-all flex items-center gap-2"
              >
                <span>{cat.icon}</span> {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <Sparkles className="text-primary h-6 w-6" />
            <h2 className="text-2xl font-bold">Trending This Week</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingItems.map((item, idx) => (
              <Card key={idx} className="glass p-6 group hover:border-primary/50 transition-all bg-[#101828]/50 border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-100 transition-opacity">
                  {item.icon}
                </div>
                <Badge variant="outline" className="mb-4 border-primary/20 text-primary text-[10px] uppercase tracking-wider">
                  {item.type}
                </Badge>
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors leading-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground">{item.date}</p>
                <Button variant="link" className="p-0 h-auto mt-4 text-primary text-xs group">
                  Explore Now <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#050816]">
        <div className="container mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div className="space-y-2">
              <h2 className="text-4xl font-bold">Latest Videos</h2>
              <p className="text-muted-foreground">Deep dive into technical tutorials on YouTube.</p>
            </div>
            <Button variant="ghost" className="hover:text-primary group" asChild>
              <Link href="/courses">View All Tutorials <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" /></Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoadingVideos ? (
              Array.from({ length: 6 }).map((_, i) => (
                <Card key={i} className="glass overflow-hidden bg-[#101828]/50 border-white/5 animate-pulse">
                  <div className="aspect-video bg-white/5" />
                  <div className="p-6 space-y-4">
                    <div className="h-6 bg-white/5 rounded w-3/4" />
                    <div className="flex gap-2">
                      <div className="h-4 bg-white/5 rounded w-16" />
                      <div className="h-4 bg-white/5 rounded w-16" />
                    </div>
                  </div>
                </Card>
              ))
            ) : (
              videos.map((vid) => (
                <Card key={vid.id} className="glass overflow-hidden group bg-[#101828]/50 border-white/5">
                  <div className="relative aspect-video">
                    <Image 
                      src={vid.thumbnail} 
                      alt={vid.title} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      data-ai-hint="video thumbnail"
                    />
                    <div className="absolute bottom-3 right-3 bg-black/80 px-2 py-1 rounded text-[10px] font-bold border border-white/10">{vid.duration}</div>
                    <div className="absolute top-3 left-3 flex gap-2">
                      <Badge className="bg-primary/20 text-primary border-none text-[10px]">Intermediate</Badge>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <h4 className="font-bold text-lg group-hover:text-primary transition-colors line-clamp-2">{vid.title}</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-[10px] border-white/10 text-muted-foreground">AI</Badge>
                      <Badge variant="outline" className="text-[10px] border-white/10 text-muted-foreground">Next.js</Badge>
                    </div>
                    <div className="flex items-center justify-between text-[10px] text-muted-foreground pt-2">
                      <span>{vid.publishedAt} • {vid.viewCount} views</span>
                      <Button asChild variant="outline" size="sm" className="h-8 glass border-white/10">
                        <Link href={vid.videoUrl} target="_blank" rel="noopener noreferrer">
                          <PlayCircle className="mr-2 h-3 w-3" /> Watch
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))
            )}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#101828]/30">
        <div className="container mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">Learning Paths</h2>
            <p className="text-muted-foreground">Structured roadmaps to master complex technologies.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {roadmaps.map((road, idx) => (
              <Card key={idx} className="glass p-8 group hover:-translate-y-2 transition-all bg-[#101828]/50 border-white/5">
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <Milestone className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{road.title}</h3>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase text-muted-foreground">Duration</p>
                    <p className="text-sm font-semibold flex items-center gap-2"><Clock className="h-3 w-3" /> {road.time}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase text-muted-foreground">Difficulty</p>
                    <p className="text-sm font-semibold flex items-center gap-2"><BarChart3 className="h-3 w-3" /> {road.diff}</p>
                  </div>
                </div>
                <div className="space-y-2 mb-8">
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{road.lessons} Lessons</span>
                    <span>0% Complete</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-0 transition-all duration-1000"></div>
                  </div>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 rounded-full font-bold">
                  Start Path
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="container mx-auto text-center max-w-4xl space-y-8">
          <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary mb-4">
            <Send className="h-8 w-8" />
          </div>
          <h2 className="text-4xl font-bold leading-tight">Never Miss a New Tutorial</h2>
          <p className="text-muted-foreground text-lg">Receive updates whenever a new YouTube video, Medium article, project, or AI resource is published.</p>
          <div className="flex flex-col sm:flex-row gap-3 pt-6 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow bg-white/5 border border-white/10 rounded-full px-8 py-3 outline-none focus:border-primary transition-colors text-white"
            />
            <Button className="bg-primary hover:bg-primary/90 rounded-full px-8 py-3 h-auto font-bold neon-glow">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
