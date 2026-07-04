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
import { FeaturedTopicsSection } from '@/components/sections/home/FeaturedTopicsSection';
import { PremiumNewsletterSection } from '@/components/sections/home/PremiumNewsletterSection';
import { OurStorySection } from '@/components/sections/home/OurStorySection';

export default function Home() {
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

  return (
    <div className="flex flex-col overflow-hidden bg-[#050816]">
      <HeroSection />

      <WhyGuruphoriaSection />

      <FeaturedTopicsSection />

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

      <OurStorySection />

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

      <PremiumNewsletterSection />
    </div>
  );
}
