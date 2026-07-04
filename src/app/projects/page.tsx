'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { fetchGitHubRepositories } from '@/lib/github';
import type { GitHubRepository } from '@/lib/types';
import { 
  Search, 
  Github, 
  ExternalLink, 
  Code2, 
  Cpu, 
  Database, 
  Globe, 
  Layers, 
  Zap, 
  Star, 
  GitFork, 
  Clock, 
  BarChart3, 
  ArrowRight, 
  Terminal, 
  Sparkles,
  Layout,
  Settings,
  Shield,
  Smartphone,
  Workflow,
  CheckCircle2,
  FileText,
  Youtube,
  Newspaper
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [repos, setRepos] = useState<GitHubRepository[]>([]);
  const [isLoadingRepos, setIsLoadingRepos] = useState(true);

  useEffect(() => {
    async function loadData() {
      const featuredRepos = await fetchGitHubRepositories();
      setRepos(featuredRepos);
      setIsLoadingRepos(false);
    }
    loadData();
  }, []);

  const featuredProjects = [
    {
      title: 'AI Resume Analyzer',
      desc: 'ATS-friendly resume parser and optimizer using Gemini 1.5 Pro to help candidates land more interviews.',
      image: 'https://picsum.photos/seed/tech-resume/800/500',
      tech: ['Next.js', 'Firebase', 'Gemini AI', 'Tailwind'],
      diff: 'Advanced',
      time: '12 Hours',
    },
    {
      title: 'Agentic Chatbot Framework',
      desc: 'A customizable framework for building autonomous agents that can perform tool-calling and memory management.',
      image: 'https://picsum.photos/seed/tech-agent/800/500',
      tech: ['React', 'Genkit', 'Node.js', 'TypeScript'],
      diff: 'Expert',
      time: '20 Hours',
    },
    {
      title: 'Real-time Analytics Dashboard',
      desc: 'Production-ready dashboard visualizing real-time metrics with high-performance charts and Firebase integration.',
      image: 'https://picsum.photos/seed/tech-dashboard/800/500',
      tech: ['Next.js', 'Firebase', 'Recharts', 'Clerk'],
      diff: 'Intermediate',
      time: '8 Hours',
    }
  ];

  const categories = [
    { name: 'AI Applications', icon: <Sparkles />, desc: 'Generative AI and LLM integrated apps.', count: 12 },
    { name: 'Web Development', icon: <Layout />, desc: 'Modern Full-Stack web applications.', count: 24 },
    { name: 'Automation', icon: <Workflow />, desc: 'Scripts and systems to automate tasks.', count: 8 },
    { name: 'Developer Tools', icon: <Terminal />, desc: 'Libraries and tools for engineers.', count: 5 },
    { name: 'Firebase Projects', icon: <Database />, desc: 'Deep dives into Firebase services.', count: 15 },
    { name: 'Chrome Extensions', icon: <Smartphone />, desc: 'Browser-based productivity tools.', count: 4 },
  ];

  const workflow = [
    { step: '01', title: 'Idea', desc: 'Defining the core problem and user needs.' },
    { step: '02', title: 'Architecture', desc: 'Designing data models and system flow.' },
    { step: '03', title: 'Development', desc: 'Building with a modular, scalable tech stack.' },
    { step: '04', title: 'Deployment', desc: 'Automating CI/CD and production rollout.' },
  ];

  const filteredRepos = repos.filter(repo => 
    repo.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    repo.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col bg-[#050816] text-white overflow-hidden min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
        <div className="container mx-auto max-w-4xl relative z-10 space-y-8">
          <Badge variant="outline" className="border-primary/30 text-primary py-1 px-4 text-xs glass uppercase tracking-widest">
            🚀 Portfolio of Excellence
          </Badge>
          <h1 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tight">
            Build Real <span className="text-gradient">Projects.</span><br />
            Learn Real Engineering.
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Explore production-ready AI, Full Stack, Firebase, React, Automation, and Software Engineering projects built for learning and real-world applications.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-8 text-lg font-semibold neon-glow">
              <Link href="https://github.com/PuneetShivaay" target="_blank">
                <Github className="mr-2 h-5 w-5" /> View GitHub
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 text-lg font-semibold glass hover:bg-white/5 border-white/10">
              Browse Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <Card className="glass p-8 border-white/5 bg-[#101828]/40">
            <div className="flex flex-col lg:flex-row gap-6 items-end lg:items-center">
              <div className="flex-grow w-full relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search projects by technology or name..."
                  className="bg-black/20 border-white/10 rounded-xl pl-12 py-6 text-sm focus:border-primary/50"
                />
              </div>
              <div className="flex flex-wrap gap-3">
                {['AI', 'React', 'Firebase', 'Next.js', 'Python'].map(f => (
                  <Badge key={f} className="bg-white/5 hover:bg-primary/20 text-white border-white/10 cursor-pointer px-4 py-1.5 rounded-full transition-colors">
                    {f}
                  </Badge>
                ))}
                <div className="border-l border-white/10 h-8 mx-2 hidden lg:block"></div>
                <Badge variant="outline" className="border-primary/30 text-primary">Advanced</Badge>
              </div>
            </div>
            <div className="mt-4 text-xs text-muted-foreground">Showing {repos.length} active projects across {categories.length} categories</div>
          </Card>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 px-6 bg-[#050816]">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div className="space-y-2">
              <h2 className="text-4xl font-bold">Featured Projects</h2>
              <p className="text-muted-foreground">End-to-end applications designed for technical mastery.</p>
            </div>
            <Button variant="ghost" className="hover:text-primary group">
              View All Labs <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((proj, idx) => (
              <Card key={idx} className="glass overflow-hidden group bg-[#101828]/50 border-white/5 flex flex-col h-full hover:border-primary/30 transition-all">
                <div className="relative aspect-video">
                  <Image 
                    src={proj.image} 
                    alt={proj.title} 
                    fill 
                    className="object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    data-ai-hint="code development"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary/20 text-primary border-none text-[10px] uppercase">{proj.diff}</Badge>
                  </div>
                </div>
                <div className="p-8 flex-grow space-y-4">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{proj.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">{proj.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {proj.tech.map(t => <Badge key={t} variant="secondary" className="bg-white/5 text-[10px]">{t}</Badge>)}
                  </div>
                  <div className="flex items-center gap-4 text-[10px] text-muted-foreground pt-2">
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {proj.time}</span>
                    <span className="flex items-center gap-1"><BarChart3 className="h-3 w-3" /> Complex</span>
                  </div>
                </div>
                <div className="p-8 pt-0 flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1 glass border-white/10 hover:bg-white/5 rounded-full">
                    <Github className="mr-2 h-4 w-4" /> Code
                  </Button>
                  <Button size="sm" className="flex-1 bg-primary/20 text-primary hover:bg-primary/30 border border-primary/20 rounded-full">
                    <ExternalLink className="mr-2 h-4 w-4" /> Demo
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-24 px-6 bg-[#101828]/20">
        <div className="container mx-auto">
          <div className="mb-16 text-center lg:text-left">
            <h2 className="text-4xl font-bold mb-4">Project Categories</h2>
            <p className="text-muted-foreground">Find inspiration in specific engineering tracks.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, idx) => (
              <Card key={idx} className="glass p-8 group hover:bg-primary/5 transition-all border-white/5 relative overflow-hidden">
                <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  {cat.icon}
                </div>
                <h4 className="text-xl font-bold mb-2">{cat.name}</h4>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{cat.desc}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-primary">{cat.count} Projects</span>
                  <Button variant="ghost" size="sm" className="p-0 h-auto text-primary hover:bg-transparent">
                    Explore <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Source */}
      <section className="py-24 px-6 bg-[#050816]">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-16">
            <Github className="h-8 w-8 text-white" />
            <h2 className="text-4xl font-bold">Open Source & GitHub</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {isLoadingRepos ? (
              Array.from({ length: 3 }).map((_, i) => (
                <Card key={i} className="glass p-8 border-white/5 bg-[#0d1117] animate-pulse">
                  <div className="h-6 bg-white/5 rounded w-1/2 mb-4" />
                  <div className="h-4 bg-white/5 rounded w-full mb-2" />
                  <div className="h-4 bg-white/5 rounded w-3/4 mb-8" />
                  <div className="flex gap-4">
                    <div className="h-4 bg-white/5 rounded w-16" />
                    <div className="h-4 bg-white/5 rounded w-16" />
                  </div>
                </Card>
              ))
            ) : (
              filteredRepos.map((repo) => (
                <Card key={repo.name} className="glass p-8 border-white/5 hover:border-white/20 transition-all bg-[#0d1117]">
                  <div className="flex justify-between items-start mb-4">
                    <Link href={repo.url} target="_blank" className="text-primary font-bold text-xl hover:underline truncate mr-4">{repo.name}</Link>
                    <Badge variant="outline" className="border-white/10 text-[10px] text-muted-foreground">Public</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-8 line-clamp-2 leading-relaxed">{repo.description}</p>
                  <div className="flex items-center gap-6 text-[10px] text-muted-foreground">
                    <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-primary"></span> {repo.language}</div>
                    <div className="flex items-center gap-1.5"><Star className="h-3 w-3" /> {repo.stars}</div>
                    <div className="flex items-center gap-1.5"><GitFork className="h-3 w-3" /> {repo.forks}</div>
                    <div className="ml-auto">Updated {repo.updatedAt}</div>
                  </div>
                </Card>
              ))
            )}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline" className="rounded-full border-white/10 glass hover:bg-white/5">
              <Link href="https://github.com/PuneetShivaay" target="_blank">View More on GitHub</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="py-24 px-6 bg-[#101828]/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold">The Engineering Workflow</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">A standardized approach to building production-grade software projects.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflow.map((w, idx) => (
              <div key={idx} className="relative space-y-4 group">
                <div className="text-8xl font-black text-white/5 absolute -top-8 -left-4 pointer-events-none group-hover:text-primary/10 transition-colors">{w.step}</div>
                <div className="relative z-10 space-y-4 pl-4 border-l-2 border-primary/20 group-hover:border-primary transition-colors py-4">
                  <h4 className="text-2xl font-bold text-primary">{w.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Tech Stack */}
      <section className="py-24 px-6 bg-[#050816]">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">The Guruphoria Tech Stack</h2>
            <p className="text-muted-foreground">The modern tools and frameworks used to power our projects.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: 'React', icon: <Zap className="h-5 w-5" /> },
              { name: 'Next.js', icon: <Layers className="h-5 w-5" /> },
              { name: 'Firebase', icon: <Database className="h-5 w-5" /> },
              { name: 'Gemini', icon: <Sparkles className="h-5 w-5" /> },
              { name: 'Python', icon: <Code2 className="h-5 w-5" /> },
              { name: 'Node.js', icon: <Terminal className="h-5 w-5" /> },
              { name: 'Docker', icon: <Shield className="h-5 w-5" /> },
              { name: 'TypeScript', icon: <Settings className="h-5 w-5" /> },
              { name: 'Genkit', icon: <Cpu className="h-5 w-5" /> },
              { name: 'Tailwind', icon: <Layout className="h-5 w-5" /> },
              { name: 'GitHub', icon: <Github className="h-5 w-5" /> },
              { name: 'Vercel', icon: <Globe className="h-5 w-5" /> },
            ].map((tech) => (
              <Card key={tech.name} className="glass p-6 text-center group hover:border-primary/50 transition-all bg-[#101828]/50 border-white/5 cursor-pointer flex flex-col items-center justify-center gap-3">
                <div className="text-primary group-hover:scale-110 transition-transform">{tech.icon}</div>
                <div className="font-bold text-xs">{tech.name}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-[#050816] text-center">
        <div className="container mx-auto max-w-3xl space-y-8">
          <h2 className="text-5xl font-bold">Start Building Today</h2>
          <p className="text-muted-foreground text-lg">Learn by creating production-ready applications with Guruphoria.</p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-10 text-lg font-bold">
              <Link href="/courses">Explore Tutorials</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-10 text-lg font-bold glass border-white/10">
              <Link href="https://github.com/PuneetShivaay" target="_blank">View GitHub</Link>
            </Button>
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
              <h2 className="text-4xl font-bold leading-tight">Never Miss a New Project</h2>
              <p className="text-muted-foreground text-lg">Receive updates whenever a new open-source repository or project lab is published.</p>
              
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
