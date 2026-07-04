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
  Zap, 
  Layers,
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
  Boxes
} from 'lucide-react';

export default function Home() {
  const heroImage = getPlaceholderImage('brand-hero');
  const creatorImage = getPlaceholderImage('hero-developer');
  
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [articles, setArticles] = useState<MediumArticle[]>([]);
  const [repos, setRepos] = useState<GitHubRepository[]>([]);
  const [isLoadingVideos, setIsLoadingVideos] = useState(true);
  const [isLoadingArticles, setIsLoadingArticles] = useState(true);
  const [isLoadingRepos, setIsLoadingRepos] = useState(true);

  useEffect(() => {
    async function loadData() {
      const [latestVideos, latestArticles, latestRepos] = await Promise.all([
        fetchLatestVideos(2),
        fetchLatestArticles(2),
        fetchGitHubRepositories(3)
      ]);
      setVideos(latestVideos);
      setArticles(latestArticles);
      setRepos(latestRepos);
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
      {/* Hero Section */}
      <section className="relative w-full pt-20 pb-16 lg:pt-36 lg:pb-32 overflow-hidden">
        {/* Premium Gradient Background */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,_rgba(14,165,255,0.15),transparent_50%),radial-gradient(circle_at_80%_70%,_rgba(14,165,255,0.1),transparent_50%)] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-primary/10 to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
          <div className="space-y-8 lg:space-y-10 text-center lg:text-left">
            <Badge variant="outline" className="border-primary/30 text-primary py-1.5 px-6 text-xs sm:text-sm glass uppercase tracking-[0.2em] font-bold">
              ✨ Redefining Tech Education
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-headline font-extrabold leading-[1.1] sm:leading-[1.05]">
              Master AI.<br />
              Build Software.
            </h1>
            <p className="max-w-xl text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mx-auto lg:mx-0">
              Guruphoria is a premier educational laboratory dedicated to building the architects of tomorrow. We empower students and developers to master the complete technological stack—from Artificial Intelligence and Software Engineering to Automation, Cloud, and Web Development—through rigorous, practical learning that translates directly to real-world impact.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4 sm:pt-6">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-8 sm:px-10 text-base sm:text-lg font-bold transition-all hover:scale-105 neon-glow w-full sm:w-auto">
                <Link href="/courses">
                  Start Learning
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8 sm:px-10 text-base sm:text-lg font-bold glass hover:bg-white/5 border-white/10 transition-all w-full sm:w-auto">
                <Link href="/explore">
                  Explore Learning Paths <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="relative group perspective-1000 hidden lg:block">
            {/* Subtle Animated Glow behind image */}
            <div className="absolute -inset-8 bg-primary/20 rounded-full blur-[140px] animate-pulse group-hover:bg-primary/30 transition duration-1000"></div>
            
            {/* Image container with soft floating animation */}
            <div className="relative glass rounded-[2rem] p-4 overflow-hidden animate-float border-white/10 shadow-2xl transition-all duration-700 hover:rotate-1">
              {heroImage && (
                <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  width={800}
                  height={800}
                  priority
                  className="rounded-[1.5rem] w-full object-cover aspect-square grayscale-[20%] group-hover:grayscale-0 transition duration-700"
                />
              )}
              <div className="absolute bottom-8 left-8 right-8 glass-dark p-6 rounded-2xl border-white/10 backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-xs text-primary font-bold uppercase tracking-widest">Active Session</p>
                    <p className="text-lg font-bold">AI Agent Orchestration</p>
                  </div>
                  <div className="h-10 w-10 bg-primary/20 rounded-full flex items-center justify-center text-primary animate-pulse">
                    <Zap className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Topics Grid */}
      <section className="py-16 sm:py-24 bg-[#050816]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 sm:mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Explore <span className="text-primary">Featured Topics</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">Master the stack that builds the future of autonomous intelligence.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
            {featuredTopics.map((topic) => (
              <Card key={topic.name} className="glass p-6 sm:p-8 text-center group hover:border-primary/50 transition-all duration-500 bg-[#101828]/50 border-white/5 flex flex-col items-center justify-center gap-3 sm:gap-4 cursor-pointer hover:-translate-y-2">
                <div className={`${topic.color} group-hover:scale-125 transition-transform duration-500`}>
                  {topic.icon && <span className="[&>svg]:w-8 sm:[&>svg]:w-10 [&>svg]:h-8 sm:[&>svg]:h-10">{topic.icon}</span>}
                </div>
                <h3 className="font-bold text-xs sm:text-sm tracking-tight">{topic.name}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Founder Section */}
      <section className="py-20 sm:py-32 bg-[#101828]/20 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="container mx-auto px-6">
          <div className="glass rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-8 lg:p-16 border-white/5 bg-gradient-to-br from-[#101828]/60 to-transparent">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="relative group max-w-md mx-auto lg:max-w-none w-full">
                <div className="relative glass rounded-3xl p-3 overflow-hidden border-white/10 shadow-2xl transition-transform group-hover:scale-[1.02] duration-500">
                  {creatorImage && (
                    <Image
                      src={creatorImage.imageUrl}
                      alt="Puneet Shivaay"
                      width={600}
                      height={600}
                      className="rounded-2xl w-full object-cover aspect-square grayscale-[10%] group-hover:grayscale-0 transition duration-700"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                    <div className="space-y-1">
                      <p className="text-lg sm:text-xl font-bold text-white">Puneet Shivaay</p>
                      <p className="text-xs sm:text-sm text-primary font-bold">SDE & AI Educator</p>
                    </div>
                    <Link href="https://github.com/PuneetShivaay" target="_blank" className="bg-white/10 hover:bg-white/20 p-2 rounded-lg backdrop-blur-md transition-colors border border-white/10">
                      <Github className="h-5 w-5 text-white" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
                <div className="space-y-4">
                  <Badge className="bg-primary/10 text-primary border-none text-[10px] uppercase tracking-widest px-4 py-1">Meet the Founder</Badge>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">Bridging the Gap Between <span className="text-primary">Theory & Production</span></h2>
                  <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                    As a Software Development Engineer, I spent years building scalable enterprise systems. I founded Guruphoria to provide the elite engineering education I wish I had—focused on real-world implementation, Agentic AI, and system architecture.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-8 justify-center lg:justify-start">
                  <div className="space-y-1">
                    <p className="text-2xl sm:text-3xl font-bold text-white">10k+</p>
                    <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-widest font-bold">Subscribers</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-2xl sm:text-3xl font-bold text-white">50+</p>
                    <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-widest font-bold">Deep Dive Labs</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button asChild size="lg" className="rounded-full bg-primary font-bold transition-all hover:scale-105 w-full sm:w-auto">
                    <Link href="/about">Read My Story</Link>
                  </Button>
                  <Button asChild size="lg" variant="ghost" className="rounded-full text-white hover:text-primary transition-colors font-bold w-full sm:w-auto">
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

      {/* Featured Content Sections (Latest Videos & Articles) */}
      <section className="w-full py-16 sm:py-24 bg-[#050816]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* YouTube Section */}
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3">
                  <Youtube className="text-[#EA3323] h-6 w-6 sm:h-8 sm:w-8" /> Latest Labs
                </h2>
                <Button asChild variant="ghost" className="text-xs sm:text-sm font-bold text-muted-foreground hover:text-primary transition-colors">
                  <Link href="https://www.youtube.com/@guruphoria" target="_blank">View Channel</Link>
                </Button>
              </div>
              <div className="grid gap-6">
                {isLoadingVideos ? (
                  Array.from({ length: 2 }).map((_, i) => (
                    <Card key={i} className="glass overflow-hidden bg-[#101828]/50 border-white/5 animate-pulse">
                      <div className="aspect-video bg-white/5" />
                      <div className="p-6 space-y-3">
                        <div className="h-6 bg-white/5 rounded w-3/4" />
                        <div className="h-4 bg-white/5 rounded w-1/2" />
                      </div>
                    </Card>
                  ))
                ) : (
                  videos.map((video) => (
                    <Card key={video.id} className="glass overflow-hidden group bg-[#101828]/50 border-white/5 hover:border-primary/30 transition-all duration-500">
                      <div className="relative aspect-video">
                        <Image 
                          src={video.thumbnail} 
                          alt={video.title} 
                          fill 
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-colors"></div>
                        <div className="absolute bottom-4 right-4 bg-black/80 px-2 py-1 rounded text-[10px] font-bold border border-white/10">{video.duration}</div>
                      </div>
                      <div className="p-4 sm:p-6 space-y-3">
                        <h4 className="font-bold text-base sm:text-lg line-clamp-2 group-hover:text-primary transition-colors leading-snug">{video.title}</h4>
                        <div className="flex items-center gap-4 text-[10px] sm:text-xs text-muted-foreground font-medium">
                          <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {video.publishedAt}</span>
                          <span>{video.viewCount} views</span>
                        </div>
                        <Button asChild variant="outline" size="sm" className="w-full mt-2 glass border-white/10 hover:bg-white/5 font-bold rounded-full">
                          <Link href={video.videoUrl} target="_blank">Watch Now</Link>
                        </Button>
                      </div>
                    </Card>
                  ))
                )}
              </div>
            </div>

            {/* Articles Section */}
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3">
                  <BookOpen className="text-primary h-6 w-6 sm:h-8 sm:w-8" /> Engineering Blog
                </h2>
                <Button asChild variant="ghost" className="text-xs sm:text-sm font-bold text-muted-foreground hover:text-primary transition-colors">
                  <Link href="https://puneetshivaay.medium.com/" target="_blank">Read All Stories</Link>
                </Button>
              </div>
              <div className="grid gap-6">
                {isLoadingArticles ? (
                  Array.from({ length: 2 }).map((_, i) => (
                    <Card key={i} className="glass p-6 flex gap-6 bg-[#101828]/50 border-white/5 animate-pulse">
                      <div className="w-32 h-32 bg-white/5 rounded-xl shrink-0" />
                      <div className="space-y-3 flex-grow">
                        <div className="h-4 bg-white/5 rounded w-1/4" />
                        <div className="h-6 bg-white/5 rounded w-3/4" />
                        <div className="h-4 bg-white/5 rounded w-1/2" />
                      </div>
                    </Card>
                  ))
                ) : (
                  articles.map((article) => (
                    <Card key={article.id} className="glass p-4 sm:p-6 flex flex-col sm:flex-row gap-4 sm:gap-6 group bg-[#101828]/50 border-white/5 hover:border-primary/30 transition-all duration-500">
                      <div className="relative w-full sm:w-32 h-40 sm:h-32 rounded-xl overflow-hidden shrink-0 border border-white/5">
                        <Image 
                          src={article.coverImage} 
                          alt={article.title} 
                          fill 
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                      <div className="space-y-3 flex-grow flex flex-col">
                        <Badge variant="secondary" className="bg-primary/10 text-primary border-none text-[10px] uppercase font-bold w-fit px-3">
                          {article.category}
                        </Badge>
                        <h4 className="font-bold text-lg sm:text-xl group-hover:text-primary transition-colors leading-tight line-clamp-2">
                          {article.title}
                        </h4>
                        <div className="flex items-center justify-between mt-auto pt-2">
                          <div className="flex items-center gap-4 text-[10px] text-muted-foreground font-medium">
                            <span>{article.readingTime} read</span>
                            <span>{article.publishedAt}</span>
                          </div>
                          <Button asChild variant="link" className="p-0 h-auto text-primary font-bold hover:no-underline text-xs">
                            <Link href={article.url} target="_blank" className="flex items-center gap-1 group/btn">
                              Read Article <ChevronRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GitHub Projects Section */}
      <section className="w-full py-16 sm:py-24 bg-[#101828]/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 sm:mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Open Source <span className="text-primary">Labs</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">Production-grade tools and experimental AI frameworks available for everyone.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {isLoadingRepos ? (
              Array.from({ length: 3 }).map((_, i) => (
                <Card key={i} className="glass p-8 bg-[#101828]/50 border-white/5 animate-pulse">
                  <div className="w-12 h-12 rounded-xl bg-white/5 mb-6" />
                  <div className="h-8 bg-white/5 rounded w-3/4 mb-4" />
                  <div className="h-4 bg-white/5 rounded w-full mb-8" />
                  <div className="flex gap-4">
                    <div className="flex-1 h-10 bg-white/5 rounded" />
                    <div className="flex-1 h-10 bg-white/5 rounded" />
                  </div>
                </Card>
              ))
            ) : (
              repos.map((repo) => (
                <Card key={repo.name} className="glass p-6 sm:p-8 group hover:border-primary/50 transition-all duration-500 bg-[#101828]/50 border-white/5 hover:-translate-y-2">
                  <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary mb-6 transition-transform group-hover:rotate-6">
                    <Code2 className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 line-clamp-1">{repo.name}</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm mb-6 line-clamp-2 leading-relaxed">{repo.description}</p>
                  <div className="flex flex-wrap gap-3 sm:gap-4 mb-8">
                    <Badge variant="outline" className="text-[10px] border-white/10 text-muted-foreground font-bold px-3">{repo.language}</Badge>
                    <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-muted-foreground font-medium">
                      <Star className="h-3.5 w-3.5 text-yellow-500 fill-yellow-500" /> {repo.stars}
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-muted-foreground font-medium">
                      <GitFork className="h-3.5 w-3.5" /> {repo.forks}
                    </div>
                  </div>
                  <div className="flex gap-3 sm:gap-4">
                    <Button asChild variant="outline" size="sm" className="flex-1 glass border-white/10 hover:bg-white/5 font-bold rounded-full text-xs">
                      <Link href={repo.url} target="_blank">
                        <Github className="mr-2 h-4 w-4" /> Code
                      </Link>
                    </Button>
                    <Button size="sm" className="flex-1 bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20 font-bold rounded-full text-xs">
                      <ExternalLink className="mr-2 h-4 w-4" /> Demo
                    </Button>
                  </div>
                </Card>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Premium Newsletter CTA */}
      <section className="w-full py-16 sm:py-24 pb-24 sm:pb-32">
        <div className="container mx-auto px-6">
          <Card className="glass p-8 sm:p-12 lg:p-24 relative overflow-hidden text-center max-w-5xl mx-auto rounded-[2.5rem] sm:rounded-[4rem] bg-gradient-to-br from-[#101828]/80 to-transparent border-white/10 shadow-[0_0_80px_rgba(14,165,255,0.1)]">
            <div className="absolute -top-32 -left-32 w-80 h-80 bg-primary/20 rounded-full blur-[140px]"></div>
            <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-primary/10 rounded-full blur-[140px]"></div>
            
            <div className="relative z-10 space-y-8 sm:space-y-10 max-w-3xl mx-auto">
              <div className="inline-flex p-4 sm:p-5 rounded-3xl bg-primary/10 text-primary mb-2 animate-bounce">
                <Sparkles className="h-8 w-8 sm:h-10 sm:w-10" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-[1.1] tracking-tight">Stay Ahead in the <br /><span className="text-primary">AI Revolution</span></h2>
              <p className="text-muted-foreground text-base sm:text-lg md:text-xl font-medium leading-relaxed">
                Join 10,000+ engineers receiving curated insights on Agentic AI, system design, and the evolving technical landscape.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4 sm:pt-6 max-w-lg mx-auto">
                <input 
                  type="email" 
                  placeholder="name@email.com" 
                  className="flex-grow bg-white/5 border border-white/10 rounded-full px-6 sm:px-8 py-4 sm:py-5 outline-none focus:border-primary/50 transition-colors text-white text-base sm:text-lg font-medium backdrop-blur-md"
                  required
                />
                <Button className="bg-primary hover:bg-primary/90 rounded-full px-8 sm:px-12 py-4 sm:py-5 h-auto text-base sm:text-lg font-bold transition-all hover:scale-105 neon-glow">
                  Join Now
                </Button>
              </div>
              <p className="text-[10px] text-muted-foreground/60 font-bold uppercase tracking-widest">Weekly technical deep dives • No spam • Ever</p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
