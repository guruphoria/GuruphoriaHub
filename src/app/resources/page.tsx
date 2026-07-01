'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { fetchLatestArticles } from '@/lib/medium';
import type { MediumArticle } from '@/lib/types';
import { 
  Search, 
  Download, 
  Bookmark, 
  Share2, 
  FileText, 
  Zap, 
  Code2, 
  Terminal, 
  Database, 
  Sparkles, 
  Copy, 
  Check, 
  ArrowRight, 
  Cpu, 
  Layout, 
  Globe, 
  Shield, 
  Milestone, 
  ExternalLink,
  MessageSquare,
  Send,
  Github,
  Youtube,
  Newspaper,
  BookOpen,
  Briefcase
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useToast } from '@/hooks/use-toast';

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const { toast } = useToast();
  const [copiedPrompt, setCopiedPrompt] = useState<string | null>(null);
  const [articles, setArticles] = useState<MediumArticle[]>([]);
  const [isLoadingArticles, setIsLoadingArticles] = useState(true);

  useEffect(() => {
    async function loadArticles() {
      const latestArticles = await fetchLatestArticles(3);
      setArticles(latestArticles);
      setIsLoadingArticles(false);
    }
    loadArticles();
  }, []);

  const filterChips = [
    "AI", "React", "Firebase", "Python", "System Design", "Interview", "Resume", "Automation", "Cloud", "Prompt Engineering"
  ];

  const handleCopyPrompt = (prompt: string, id: string) => {
    navigator.clipboard.writeText(prompt);
    setCopiedPrompt(id);
    toast({
      title: "Prompt Copied!",
      description: "The prompt has been copied to your clipboard.",
    });
    setTimeout(() => setCopiedPrompt(null), 2000);
  };

  const featuredResources = [
    { title: "React Cheat Sheet", category: "React", type: "PDF", time: "5 min", id: "res-1" },
    { title: "Firebase Quick Guide", category: "Backend", type: "PDF", time: "8 min", id: "res-2" },
    { title: "Prompt Engineering Handbook", category: "AI", type: "Ebook", time: "15 min", id: "res-3" },
    { title: "LLM Engineering Notes", category: "AI", type: "PDF", time: "12 min", id: "res-4" },
    { title: "Docker Commands Ref", category: "DevOps", type: "Sheet", time: "4 min", id: "res-5" },
    { title: "Git Commands Masterlist", category: "VCS", type: "PDF", time: "6 min", id: "res-6" },
  ];

  const aiPrompts = [
    { id: "p1", title: "Code Refactoring Expert", desc: "Refactor complex functions for readability and performance.", category: "Gemini", diff: "Advanced", prompt: "You are an expert software architect. Refactor the following code to improve its time complexity, readability, and maintainability. Follow SOLID principles and use modern design patterns. [INSERT CODE HERE]" },
    { id: "p2", title: "Unit Test Generator", desc: "Generate comprehensive tests for React components.", category: "ChatGPT", diff: "Medium", prompt: "Generate a comprehensive set of unit tests for this React component using Vitest and React Testing Library. Ensure edge cases and error states are covered. [INSERT COMPONENT CODE]" },
    { id: "p3", title: "System Design Architect", desc: "Brainstorm scalable architectures for new applications.", category: "Claude", diff: "Expert", prompt: "Design a high-level architecture for a real-time collaborative editing tool like Notion. Discuss database choice, WebSocket integration, and scaling strategies for 1M+ concurrent users." },
  ];

  const cheatSheets = [
    { name: "Git Commands", icon: <Github className="h-5 w-5" />, desc: "Branching, merging, rebasing." },
    { name: "Linux Terminal", icon: <Terminal className="h-5 w-5" />, desc: "File management and processes." },
    { name: "Docker & K8s", icon: <Database className="h-5 w-5" />, desc: "Containers and orchestration." },
    { name: "Python for AI", icon: <Cpu className="h-5 w-5" />, desc: "NumPy, Pandas, and PyTorch." },
    { name: "React Hooks", icon: <Code2 className="h-5 w-5" />, desc: "useMemo, useCallback, and more." },
    { name: "TypeScript Types", icon: <Sparkles className="h-5 w-5" />, desc: "Generics, Unions, and Interfaces." },
  ];

  const interviewTracks = [
    { name: "Frontend", count: 120, diff: "Medium", icon: <Layout /> },
    { name: "Backend", count: 95, diff: "Hard", icon: <Database /> },
    { name: "System Design", count: 45, diff: "Expert", icon: <Globe /> },
    { name: "AI/ML", count: 60, diff: "Hard", icon: <Cpu /> },
    { name: "JavaScript", count: 150, diff: "Medium", icon: <Code2 /> },
    { name: "Firebase", count: 30, diff: "Easy", icon: <Zap /> },
  ];

  const roadmaps = [
    { title: "AI Engineer", level: "Advanced", steps: 12, icon: <Sparkles /> },
    { title: "Full Stack Developer", level: "Medium", steps: 15, icon: <Globe /> },
    { title: "Cloud Architect", level: "Expert", steps: 10, icon: <Database /> },
  ];

  const starters = [
    { title: "Next.js 15 Starter", desc: "Premium boilerplate with Tailwind and Auth.", tech: "Next.js" },
    { title: "AI Chatbot Kit", desc: "Complete Gemini + Genkit integration.", tech: "AI" },
    { title: "Firebase SaaS Kit", desc: "Auth, Firestore, and Stripe ready.", tech: "Firebase" },
  ];

  return (
    <div className="flex flex-col bg-[#050816] text-white overflow-hidden min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
        <div className="container mx-auto max-w-5xl relative z-10 text-center space-y-8">
          <div className="space-y-4">
            <Badge variant="outline" className="border-primary/30 text-primary py-1 px-4 text-xs glass uppercase tracking-widest">
              📚 Knowledge Base
            </Badge>
            <h1 className="text-4xl md:text-6xl font-headline font-extrabold tracking-tight">
              Developer <span className="text-gradient">Resources Library</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
              Discover free learning resources, cheat sheets, AI prompts, interview preparation materials, roadmaps, templates, and developer tools curated by Guruphoria.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-8 text-lg font-semibold neon-glow">
              Browse Resources
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 text-lg font-semibold glass hover:bg-white/5 border-white/10">
              Download Popular
            </Button>
          </div>
        </div>
      </section>

      {/* Smart Search */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-4xl">
          <Card className="glass p-8 border-white/5 bg-[#101828]/40">
            <div className="space-y-6">
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search prompts, PDFs, interview questions, roadmaps..."
                  className="bg-black/20 border-white/10 rounded-xl pl-12 py-6 text-sm focus:border-primary/50"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {filterChips.map((chip) => (
                  <button 
                    key={chip}
                    className="text-[10px] bg-white/5 hover:bg-primary/20 text-white border border-white/10 px-4 py-1.5 rounded-full transition-colors"
                  >
                    {chip}
                  </button>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <FileText className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Featured Resources</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredResources.map((res) => (
              <Card key={res.id} className="glass overflow-hidden group bg-[#101828]/50 border-white/5 flex flex-col hover:border-primary/30 transition-all">
                <div className="relative aspect-video">
                  <Image 
                    src={`https://picsum.photos/seed/${res.id}/600/400`} 
                    alt={res.title} 
                    fill 
                    className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500"
                    data-ai-hint="document thumbnail"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary/20 text-primary border-none text-[10px]">{res.type}</Badge>
                </div>
                <div className="p-6 flex-grow space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{res.title}</h3>
                    <div className="flex gap-2">
                      <button className="text-muted-foreground hover:text-white transition-colors"><Bookmark className="h-4 w-4" /></button>
                      <button className="text-muted-foreground hover:text-white transition-colors"><Share2 className="h-4 w-4" /></button>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-[10px] text-muted-foreground">
                    <span className="flex items-center gap-1"><Badge variant="outline" className="border-white/10">{res.category}</Badge></span>
                    <span>{res.time} reading</span>
                  </div>
                  <Button className="w-full bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full h-10">
                    <Download className="mr-2 h-4 w-4" /> Download
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Prompt Library */}
      <section className="py-24 px-6 bg-[#101828]/30">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Sparkles className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">AI Prompt Collection</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiPrompts.map((p) => (
              <Card key={p.id} className="glass p-8 border-white/5 bg-[#0d1117] flex flex-col h-full hover:border-primary/20 transition-all">
                <div className="flex justify-between items-center mb-6">
                  <Badge className="bg-primary/20 text-primary border-none text-[10px]">{p.category}</Badge>
                  <span className="text-[10px] text-muted-foreground">{p.diff}</span>
                </div>
                <h4 className="text-2xl font-bold mb-3">{p.title}</h4>
                <p className="text-sm text-muted-foreground mb-8 leading-relaxed">{p.desc}</p>
                <div className="mt-auto flex gap-3">
                  <Button 
                    onClick={() => handleCopyPrompt(p.prompt, p.id)}
                    className="flex-1 bg-primary/20 text-primary hover:bg-primary/30 border border-primary/20 rounded-full h-11"
                  >
                    {copiedPrompt === p.id ? <Check className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
                    {copiedPrompt === p.id ? "Copied" : "Copy Prompt"}
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full border border-white/10 glass text-muted-foreground hover:text-white">
                    <Bookmark className="h-5 w-5" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cheat Sheets */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12">Developer Cheat Sheets</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cheatSheets.map((sheet, idx) => (
              <Card key={idx} className="glass p-6 group hover:bg-white/5 transition-all border-white/5 flex items-center gap-6">
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  {sheet.icon}
                </div>
                <div className="flex-grow">
                  <h5 className="font-bold text-lg mb-1">{sheet.name}</h5>
                  <p className="text-[10px] text-muted-foreground mb-3">{sheet.desc}</p>
                  <div className="flex gap-4">
                    <button className="text-[10px] text-primary font-bold hover:underline flex items-center gap-1">
                      Download <Download className="h-3 w-3" />
                    </button>
                    <button className="text-[10px] text-muted-foreground hover:text-white flex items-center gap-1">
                      Preview <ArrowRight className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-24 px-6 bg-[#101828]/20">
        <div className="container mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">Latest Technical Guides</h2>
              <p className="text-muted-foreground">Deep dive articles from our Medium engineering blog.</p>
            </div>
            <Button variant="ghost" className="hover:text-primary group" asChild>
              <Link href="https://puneetshivaay.medium.com/" target="_blank">
                View Medium <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {isLoadingArticles ? (
              Array.from({ length: 3 }).map((_, i) => (
                <Card key={i} className="glass overflow-hidden bg-[#101828]/50 border-white/5 animate-pulse">
                  <div className="aspect-video bg-white/5" />
                  <div className="p-6 space-y-4">
                    <div className="h-6 bg-white/5 rounded w-3/4" />
                    <div className="h-4 bg-white/5 rounded w-full" />
                  </div>
                </Card>
              ))
            ) : (
              articles.map((art) => (
                <Card key={art.id} className="glass overflow-hidden group bg-[#101828]/50 border-white/5 hover:border-primary/30 transition-all">
                  <div className="relative aspect-video">
                    <Image 
                      src={art.coverImage} 
                      alt={art.title} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-all duration-500"
                      data-ai-hint="blog cover"
                    />
                    <Badge className="absolute top-4 left-4 bg-primary/20 text-primary border-none text-[10px]">{art.category}</Badge>
                  </div>
                  <div className="p-6 space-y-4 flex flex-col h-full">
                    <h4 className="font-bold text-lg group-hover:text-primary transition-colors line-clamp-2">{art.title}</h4>
                    <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">{art.summary}</p>
                    <div className="mt-auto flex items-center justify-between pt-4">
                      <span className="text-[10px] text-muted-foreground">{art.publishedAt} • {art.readingTime}</span>
                      <Button variant="link" className="p-0 h-auto text-primary text-xs" asChild>
                        <Link href={art.url} target="_blank">Read More</Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Interview Prep */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Ace Your Next Interview</h2>
            <p className="text-muted-foreground">Curated question banks for top engineering roles.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {interviewTracks.map((track, idx) => (
              <Card key={idx} className="glass p-6 text-center group hover:border-primary/50 transition-all bg-[#101828]/50 border-white/5 cursor-pointer flex flex-col items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-xl text-primary group-hover:scale-110 transition-transform">
                  {track.icon}
                </div>
                <div className="space-y-1">
                  <div className="font-bold text-sm">{track.name}</div>
                  <div className="text-[10px] text-muted-foreground">{track.count} Qs • {track.diff}</div>
                </div>
                <Button size="sm" variant="outline" className="w-full h-8 text-[10px] glass border-white/10">Practice</Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmaps */}
      <section className="py-24 px-6 bg-[#101828]/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12">Learning Roadmaps</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {roadmaps.map((road, idx) => (
              <Card key={idx} className="glass p-8 group hover:-translate-y-2 transition-all bg-[#101828]/50 border-white/5">
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <Milestone className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{road.title}</h3>
                <div className="flex items-center gap-6 text-[10px] text-muted-foreground mb-8">
                  <span className="flex items-center gap-1"><Briefcase className="h-3 w-3" /> {road.level}</span>
                  <span>{road.steps} Milestones</span>
                </div>
                <div className="space-y-2 mb-8">
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-0 group-hover:w-[15%] transition-all duration-1000"></div>
                  </div>
                  <div className="flex justify-between text-[10px] text-muted-foreground">
                    <span>Progress</span>
                    <span>0%</span>
                  </div>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 rounded-full font-bold">
                  Start Roadmap
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <Card className="glass p-12 lg:p-20 relative overflow-hidden text-center max-w-4xl mx-auto rounded-[3rem] bg-[#101828]/60 border-white/10">
            <div className="relative z-10 space-y-8">
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
          </Card>
        </div>
      </section>
    </div>
  );
}
