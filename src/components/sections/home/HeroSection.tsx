'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { getPlaceholderImage } from '@/lib/placeholder-images';
import { ArrowRight, Zap } from 'lucide-react';

export const HeroSection = () => {
  const creatorImage = getPlaceholderImage('hero-developer');

  return (
    <section className="relative w-full pt-20 pb-16 lg:pt-36 lg:pb-32 overflow-hidden reveal-section">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,_rgba(14,165,255,0.15),transparent_50%),radial-gradient(circle_at_80%_70%,_rgba(14,165,255,0.1),transparent_50%)] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(14,165,255,0.1)_0%,_transparent_70%)] from-primary/10 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        <div className="space-y-10 lg:space-y-12 text-center lg:text-left">
          <Badge variant="outline" className="border-primary/30 text-primary py-1.5 px-6 text-xs sm:text-sm glass uppercase tracking-[0.2em] font-bold animate-in fade-in slide-in-from-left-4 duration-700">
            ✨ Redefining Tech Education
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-headline font-extrabold leading-[1.1] sm:leading-[1.05] animate-in fade-in slide-in-from-left-8 duration-700 delay-100">
            Master AI.<br />
            Build Software.
          </h1>
          <p className="max-w-xl text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mx-auto lg:mx-0 font-medium animate-in fade-in slide-in-from-left-10 duration-700 delay-200">
            Guruphoria is a premier educational laboratory dedicated to building the architects of tomorrow. We empower students and developers to master the complete technological stack—from Artificial Intelligence and Software Engineering to Automation, Cloud, and Web Development—through rigorous, practical learning that translates directly to real-world impact.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-6 pt-4 sm:pt-6 animate-in fade-in slide-in-from-left-12 duration-700 delay-300">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-8 sm:px-10 text-base sm:text-lg font-bold transition-all hover:scale-105 active:scale-95 neon-glow w-full sm:w-auto">
              <Link href="/courses">
                Start Learning
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-8 sm:px-10 text-base sm:text-lg font-bold glass hover:bg-white/5 border-white/10 transition-all hover:scale-105 active:scale-95 w-full sm:w-auto">
              <Link href="/explore">
                Explore Learning Paths <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="relative group perspective-1000 hidden lg:block animate-in fade-in zoom-in-95 duration-1000 delay-400">
          <div className="absolute -inset-8 bg-primary/20 rounded-full blur-[140px] animate-pulse group-hover:bg-primary/30 transition duration-1000"></div>
          
          <div className="relative glass rounded-[2rem] p-4 overflow-hidden animate-float border-white/10 shadow-2xl transition-all duration-700 hover:rotate-1 hover:shadow-primary/20">
            {creatorImage && (
              <Image
                src={creatorImage.imageUrl}
                alt={creatorImage.description}
                width={800}
                height={800}
                priority
                className="rounded-[1.5rem] w-full object-cover aspect-square grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition duration-700"
                data-ai-hint="professional developer"
              />
            )}
            <div className="absolute bottom-8 left-8 right-8 glass-dark p-6 rounded-2xl border-white/10 backdrop-blur-md transition-transform duration-500 group-hover:-translate-y-2">
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
  );
};
