'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { getPlaceholderImage } from '@/lib/placeholder-images';
import { Github, ChevronRight } from 'lucide-react';

export const OurStorySection = () => {
  const creatorImage = getPlaceholderImage('hero-developer');

  return (
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
  );
};