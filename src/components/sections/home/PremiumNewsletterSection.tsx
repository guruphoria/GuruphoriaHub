'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

export const PremiumNewsletterSection = () => {
  return (
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
  );
};