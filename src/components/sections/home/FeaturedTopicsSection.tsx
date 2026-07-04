'use client';

import { Card } from '@/components/ui/card';
import { SectionHeader } from '@/components/common/SectionHeader';
import {
  Brain,
  Cpu,
  Sparkles,
  Globe,
  Cloud,
  Layers,
  Database,
  Terminal,
  Code2,
  Boxes,
  ShieldCheck,
  Lock,
} from 'lucide-react';

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

export const FeaturedTopicsSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#050816] reveal-section">
      <div className="container mx-auto px-6">
        <SectionHeader
            title={<>Explore <span className="text-primary">Featured Topics</span></>}
            description="Master the stack that builds the future of autonomous intelligence."
        />
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
  );
};