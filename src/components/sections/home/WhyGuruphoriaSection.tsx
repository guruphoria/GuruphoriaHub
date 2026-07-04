'use client';

import { Card } from '@/components/ui/card';
import { Code2, Briefcase, Sparkles } from 'lucide-react';

export const WhyGuruphoriaSection = () => {
  const features = [
    {
      title: "Learn by Building",
      desc: "Build real-world AI, software engineering and cloud projects instead of only learning theory.",
      icon: <Code2 className="h-7 w-7" />
    },
    {
      title: "Industry Experience",
      desc: "Learn concepts inspired by practical software engineering, automation and production systems.",
      icon: <Briefcase className="h-7 w-7" />
    },
    {
      title: "Always Up To Date",
      desc: "Stay ahead with the latest AI, LLMs, Agentic AI, Cloud and Web technologies.",
      icon: <Sparkles className="h-7 w-7" />
    }
  ];

  return (
    <section className="py-20 sm:py-32 bg-[#050816] relative overflow-hidden reveal-section">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 sm:mb-24 space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Why Learn with <span className="text-primary">Guruphoria?</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">Practical technology education built around real-world engineering.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {features.map((item, idx) => (
            <Card key={idx} className="glass p-8 sm:p-10 group hover:border-primary/50 transition-all duration-500 bg-[#101828]/50 border-white/5 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(14,165,255,0.1)] rounded-[2rem]">
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{item.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
