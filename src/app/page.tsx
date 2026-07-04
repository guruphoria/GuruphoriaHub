'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getPlaceholderImage } from '@/lib/placeholder-images';
import { fetchLatestVideos } from '@/lib/youtube';
import { fetchLatestArticles } from '@/lib/medium';
import { fetchGitHubRepositories } from '@/lib/github';
import type { YouTubeVideo, MediumArticle, GitHubRepository } from '@/lib/types';
import { 
  ArrowRight, 
  Youtube, 
  Cpu, 
  Code2, 
  Database, 
  Brain, 
  Sparkles,
  Search,
  BookOpen,
  Calendar,
  Cloud,
  Terminal,
  ExternalLink,
  Github,
  Star,
  GitFork,
  ChevronRight,
  ShieldCheck,
  Globe,
  Lock,
  Boxes,
  Briefcase
} from 'lucide-react';
import { HeroSection } from '@/components/sections/home/HeroSection';
import { WhyGuruphoriaSection } from '@/components/sections/home/WhyGuruphoriaSection';

export default function Home() {
  const creatorImage = getPlaceholderImage('hero-developer');
  
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [articles, setArticles] = useState<MediumArticle[]>([]);
  const [repos, setRepos] = useState<GitHubRepository[]>([]);
  const [isLoadingVideos, setIsLoadingVideos] = useState(true);
  const [isLoadingArticles, setIsLoadingArticles] = useState(true);
  const [isLoadingRepos, setIsLoadingRepos] = useState(true);

  useEffect(() => {
    async function loadData() {
      const [latestVideos, latestArticles, featuredRepos] = await Promise.all([
        fetchLatestVideos(2),
        fetchLatestArticles(3),
        fetchGitHubRepositories()
      ]);
      setVideos(latestVideos);
      setArticles(latestArticles);
      setRepos(featuredRepos);
      
      setIsLoadingVideos(false);
      setIsLoadingArticles(false);
      setIsLoadingRepos(false);
    }
    loadData();
  }, []);

  const featuredTopics = [
    { name: 'Artificial Intelligence', icon: <Brain />, color: 'text-blue-400' },
    { name: 'LLM Engineering', icon: <Cpu />, color: 'text-cyan-400' },
    { name: 'Agentic AI', icon: <Sparkles />, color: 'text-purple-400' },
    { name: 'Web Development', icon: <Globe />, color: 'text-emerald-400' },
    { name: 'Cloud Computing', icon: <Cloud />, color: 'text-sky-400' },
    { name: 'React & Next.js', icon: <Layers />, color: 'text-indigo-400' },
    { name: 'Firebase', icon: <Database />, color: 'text-orange-400' },
    { name: 'Automation', icon: <Terminal />, color: 'text-rose-400' },
    { name: 'Python', icon: <Code2 />, color: 'text-yellow-400' },
    { name: 'Java', icon: <Boxes />, color: 'text-red-400' },
    { name: 'Docker', icon: <ShieldCheck />, color: 'text-blue-500' },
    { name: 'Kubernetes', icon: <Lock />, color: 'text-blue-600' },
  ];

  return (
    <div className="flex flex-col overflow-hidden bg-[#050816]">
      <HeroSection />

      <WhyGuruphoriaSection />

      {/* Featured Topics Grid */}
      <section className="py-16 sm:py-24 bg-[#050816] reveal-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 sm:mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Explore <span className="text-primary">Featured Topics</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">Master the stack that builds the future of autonomous intelligence.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
            {featuredTopics.map((topic) => (
              <Card key={topic.name} className="glass p-6 sm:p-8 text-center group hover:border-primary/50 transition-all duration-500 bg-[#101828]/50 border-white/5 flex flex-col items-center justify-center gap-3 sm:gap-4 cursor-pointer hover:-translate-y-2 hover:shadow-primary/10">
                <div className={`${topic.color} group-hover:scale-125 transition-transform duration-500`}>
                  {topic.icon && <span className="[&>svg]:w-8 sm:[&>svg]:w-10 [&>svg]:h-8 sm:[&>svg]:h-10">{topic.icon}</span>}
                </div>
                <h3 className="font-bold text-xs sm:text-sm tracking-tight group-hover:text-primary transition-colors">{topic.name}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Open Source Projects */}
      <section className="w-full py-20 sm:py-32 bg-[#050816] reveal-section">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 sm:mb-16 gap-6">
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold flex items-center gap-3">
                <Github className="text-primary h-8 w-8 sm:h-10 sm:w-10" /> Featured Open Source Projects
              </h2>
              <p className="text-muted-foreground text-sm sm:text-lg max-w-2xl">Production-grade frameworks and experimental labs maintained by Guruphoria.</p>
            </div>
            <Button asChild variant="outline" className="rounded-full border-white/10 glass hover:border-primary/50 transition-all font-bold group px-6">
              <Link href="https://github.com/PuneetShivaay" target="_blank" className="flex items-center gap-2">
                View GitHub <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {isLoadingRepos ? (
              Array.from({ length: 3 }).map((_, i) => (
                <Card key={i} className="glass p-8 bg-[#101828]/50 border-white/5 animate-pulse h-64 rounded-[2rem]" />
              ))
            ) : (
              repos.map((repo) => (
                <Card key={repo.name} className="glass p-6 sm:p-8 group hover:border-primary/50 transition-all duration-500 bg-[#101828]/50 border-white/5 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(14,165,255,0.15)] relative overflow-hidden flex flex-col h-full rounded-[2rem]">
                  <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                    <Terminal className="h-32 w-32" />
                  </div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 p-2.5 rounded-xl text-primary group-hover:scale-110 transition-transform">
                          <Code2 className="h-5 w-5" />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold tracking-tight group-hover:text-primary transition-colors truncate max-w-[180px] sm:max-w-none">{repo.name}</h3>
                      </div>
                      <Badge variant="outline" className="text-[9px] border-white/10 text-muted-foreground font-black uppercase px-2 tracking-widest">Public</Badge>
                    </div>
                    
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-8 line-clamp-2 flex-grow">{repo.description}</p>
                    
                    <div className="space-y-6 mt-auto">
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-primary/5 text-primary border-primary/20 text-[10px] font-bold">React</Badge>
                        <Badge className="bg-primary/5 text-primary border-primary/20 text-[10px] font-bold">TypeScript</Badge>
                        <Badge className="bg-primary/5 text-primary border-primary/20 text-[10px] font-bold">Genkit</Badge>
                      </div>

                      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-6 border-t border-white/5">
                        <div className="flex items-center gap-2 text-xs font-bold text-white/60">
                          <span className="w-2 h-2 rounded-full bg-primary" /> {repo.language}
                        </div>
                        <div className="flex items-center gap-1.5 text-xs font-bold text-white/60">
                          <Star className="h-3.5 w-3.5 text-yellow-500 fill-yellow-500" /> {repo.stars}
                        </div>
                        <div className="flex items-center gap-1.5 text-xs font-bold text-white/60">
                          <GitFork className="h-3.5 w-3.5" /> {repo.forks}
                        </div>
                        <div className="flex items-center gap-1.5 text-[10px] text-white/40 ml-auto font-bold uppercase tracking-widest">
                          <Calendar className="h-3 w-3" /> {repo.updatedAt}
                        </div>
                      </div>
                      
                      <Button asChild variant="outline" className="w-full glass border-white/10 hover:bg-primary hover:text-white hover:border-primary rounded-full font-bold transition-all h-12 shadow-lg group-hover:shadow-primary/25">
                        <Link href={repo.url} target="_blank" className="flex items-center justify-center gap-2">
                          View Repository <ExternalLink className="h-4 w-4" />
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

      {/* Our Story Section */}
      <section className="py-20 sm:py-32 bg-[#101828]/20 relative overflow-hidden reveal-section">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-6">
          <div className="glass rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-8 lg:p-16 border-white/5 bg-gradient-to-br from-[#101828]/60 to-transparent">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="relative group max-w-md mx-auto lg:max-w-none w-full">
                <div className="relative glass rounded-3xl p-3 overflow-hidden border-white/10 shadow-2xl transition-transform group-hover:scale-[1.02] hover:shadow-primary/20 duration-500">
                  {creatorImage && (
                    <Image
                      src={creatorImage.imageUrl}
                      alt="Puneet Shivaay"
                      width={600}
                      height={600}
                      className="rounded-2xl w-full object-cover aspect-square grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105 transition duration-700"
                      data-ai-hint="professional developer"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                    <div className="space-y-1">
                      <p className="text-lg sm:text-xl font-bold text-white">Puneet Shivaay</p>
                      <p className="text-xs sm:text-sm text-primary font-bold">SDE & AI Educator</p>
                    </div>
                    <Link href="https://github.com/PuneetShivaay" target="_blank" className="bg-white/10 hover:bg-white/20 p-2 rounded-lg backdrop-blur-md transition-all hover:scale-110 border border-white/10">
                      <Github className="h-5 w-5 text-white" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="space-y-8 lg:space-y-10 text-center lg:text-left">
                <div className="space-y-6">
                  <Badge variant="outline" className="border-primary/30 text-primary py-1 px-4 text-[10px] uppercase tracking-[0.2em] font-bold">Our Story</Badge>
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-headline font-bold leading-tight tracking-tight">Our <span className="text-primary">Story</span></h2>
                  <div className="space-y-4 text-muted-foreground text-base sm:text-lg leading-relaxed font-medium">
                    <p>
                      Guruphoria began in 2020 as a computer education institute with the mission of making technology education accessible.
                    </p>
                    <p>
                      When the pandemic changed the way people learned, Guruphoria evolved from offline classrooms into an online learning platform.
                    </p>
                    <p>
                      Today the mission continues through AI education, Software Engineering, Automation, Cloud Computing and modern web technologies.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-8 justify-center lg:justify-start">
                  <div className="space-y-1 group">
                    <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tighter transition-transform group-hover:scale-110 origin-left">10k+</p>
                    <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-widest font-black">Subscribers</p>
                  </div>
                  <div className="space-y-1 group">
                    <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tighter transition-transform group-hover:scale-110 origin-left">50+</p>
                    <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-widest font-black">Deep Dive Labs</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button asChild size="lg" className="rounded-full bg-primary font-bold transition-all hover:scale-105 active:scale-95 w-full sm:w-auto px-10">
                    <Link href="/about">Read Full Story</Link>
                  </Button>
                  <Button asChild size="lg" variant="ghost" className="rounded-full text-white hover:text-primary transition-all hover:translate-x-1 font-bold w-full sm:w-auto">
                    <Link href="/contact" className="flex items-center justify-center lg:justify-start gap-2">
                      Get in Touch <ChevronRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Blog */}
      <section className="w-full py-20 sm:py-32 bg-[#050816] reveal-section">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-12 sm:mb-16">
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl font-bold flex items-center gap-3">
                <BookOpen className="text-primary h-8 w-8" /> Engineering Blog
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base">Technical deep dives and software architecture insights.</p>
            </div>
            <Button asChild variant="ghost" className="text-xs sm:text-sm font-bold text-muted-foreground hover:text-primary transition-all">
              <Link href="https://puneetshivaay.medium.com/" target="_blank">Read All Stories</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoadingArticles ? (
              Array.from({ length: 3 }).map((_, i) => (
                <Card key={i} className="glass p-8 bg-[#101828]/50 border-white/5 animate-pulse h-48" />
              ))
            ) : (
              articles.map((article) => (
                <Card key={article.id} className="glass p-6 sm:p-8 group hover:border-primary/30 transition-all duration-500 bg-[#101828]/50 border-white/5 hover:-translate-y-2 flex flex-col h-full border-l-4 border-l-transparent hover:border-l-primary">
                  <div className="space-y-6 flex flex-col h-full">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-none text-[10px] uppercase font-black tracking-widest px-3 py-1">
                        {article.category || "Engineering"}
                      </Badge>
                      <div className="flex items-center gap-2 text-[10px] text-muted-foreground font-bold">
                        <Calendar className="h-3 w-3" /> {article.publishedAt}
                      </div>
                    </div>
                    
                    <div className="space-y-3 flex-grow">
                      <h4 className="text-xl sm:text-2xl font-bold group-hover:text-primary transition-colors leading-tight line-clamp-2">
                        {article.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 font-medium opacity-80">
                        {article.summary}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between pt-6 border-t border-white/5">
                      <span className="text-[11px] font-bold text-white/40 uppercase tracking-widest">{article.readingTime} Read</span>
                      <Link href={article.url} target="_blank" className="text-xs font-bold text-primary flex items-center gap-1 group/link">
                        Read Article <ChevronRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </Card>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Premium Newsletter CTA */}
      <section className="w-full py-16 sm:py-24 pb-24 sm:pb-32 reveal-section">
        <div className="container mx-auto px-6">
          <Card className="glass p-8 sm:p-12 lg:p-24 relative overflow-hidden text-center max-w-5xl mx-auto rounded-[2.5rem] sm:rounded-[4rem] bg-gradient-to-br from-[#101828]/80 to-transparent border-white/10 shadow-[0_0_80px_rgba(14,165,255,0.1)] transition-shadow duration-700 hover:shadow-primary/20 group">
            <div className="absolute -top-32 -left-32 w-80 h-80 bg-primary/20 rounded-full blur-[140px] group-hover:bg-primary/30 transition-colors"></div>
            <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-primary/10 rounded-full blur-[140px] group-hover:bg-primary/20 transition-colors"></div>
            
            <div className="relative z-10 space-y-8 sm:space-y-10 max-w-3xl mx-auto">
              <div className="inline-flex p-4 sm:p-5 rounded-3xl bg-primary/10 text-primary mb-2 animate-bounce">
                <Sparkles className="h-8 w-8 sm:h-10 sm:w-10" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-[1.1] tracking-tight group-hover:text-white transition-colors">Stay Ahead in the <br /><span className="text-primary">AI Revolution</span></h2>
              <p className="text-muted-foreground text-base sm:text-lg md:text-xl font-medium leading-relaxed">
                Join 10,000+ engineers receiving curated insights on Agentic AI, system design, and the evolving technical landscape.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4 sm:pt-6 max-w-lg mx-auto">
                <input 
                  type="email" 
                  placeholder="name@email.com" 
                  className="flex-grow bg-white/5 border border-white/10 rounded-full px-6 sm:px-8 py-4 sm:py-5 outline-none focus:border-primary transition-all text-white text-base sm:text-lg font-medium backdrop-blur-md hover:bg-white/10"
                  required
                />
                <Button className="bg-primary hover:bg-primary/90 rounded-full px-8 sm:px-12 py-4 sm:py-5 h-auto text-base sm:text-lg font-bold transition-all hover:scale-105 active:scale-95 neon-glow">
                  Join Now
                </Button>
              </div>
              <p className="text-[10px] text-muted-foreground/60 font-bold uppercase tracking-widest transition-opacity group-hover:opacity-100">Weekly technical deep dives • No spam • Ever</p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
