'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Youtube, 
  Github, 
  Linkedin, 
  Twitter, 
  Newspaper, 
  Mail, 
  Sparkles, 
  Brain, 
  Cpu, 
  Code2, 
  Database, 
  Zap, 
  Layers, 
  Search, 
  Terminal, 
  Cloud, 
  Target, 
  Compass, 
  CheckCircle2,
  Award,
  Video,
  FileText,
  Users
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { getPlaceholderImage } from '@/lib/placeholder-images';

export default function AboutPage() {
  const profileImage = getPlaceholderImage('hero-developer');

  const timeline = [
    { year: '2018', title: 'Started Learning Programming', desc: 'Dived into the world of C++ and algorithms, building the foundation of logic.' },
    { year: '2020', title: 'Software Development Engineer', desc: 'Started professional career building scalable enterprise applications.' },
    { year: '2021', title: 'Building Real-world Applications', desc: 'Focused on Full Stack development using React, Next.js, and Firebase.' },
    { year: '2022', title: 'Teaching on YouTube', desc: 'Launched Guruphoria to bridge the gap between theory and practical engineering.' },
    { year: '2023', title: 'Creating Guruphoria', desc: 'Evolved into a dedicated platform for AI and Software Engineering excellence.' },
    { year: '2024', title: 'Building an AI Learning Platform', desc: 'Pioneering Agentic AI and LLM Engineering education for the next generation.' },
  ];

  const technologies = [
    { name: 'Artificial Intelligence', icon: <Brain className="h-6 w-6" /> },
    { name: 'Agentic AI', icon: <Cpu className="h-6 w-6" /> },
    { name: 'LLM Engineering', icon: <Sparkles className="h-6 w-6" /> },
    { name: 'React', icon: <Zap className="h-6 w-6" /> },
    { name: 'Next.js', icon: <Layers className="h-6 w-6" /> },
    { name: 'Firebase', icon: <Database className="h-6 w-6" /> },
    { name: 'Python', icon: <Code2 className="h-6 w-6" /> },
    { name: 'Machine Learning', icon: <Sparkles className="h-6 w-6" /> },
    { name: 'Cloud', icon: <Cloud className="h-6 w-6" /> },
    { name: 'Automation', icon: <Terminal className="h-6 w-6" /> },
    { name: 'System Design', icon: <Search className="h-6 w-6" /> },
    { name: 'Software Engineering', icon: <Code2 className="h-6 w-6" /> },
  ];

  const stats = [
    { label: 'YouTube Subscribers', value: '10k+', icon: <Youtube className="h-5 w-5" /> },
    { label: 'Videos Published', value: '50+', icon: <Video className="h-5 w-5" /> },
    { label: 'Projects Built', value: '20+', icon: <Terminal className="h-5 w-5" /> },
    { label: 'Articles Written', value: '30+', icon: <FileText className="h-5 w-5" /> },
    { label: 'Community Members', value: '5k+', icon: <Users className="h-5 w-5" /> },
  ];

  return (
    <div className="flex flex-col bg-[#050816] text-white overflow-hidden min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-16 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <Badge variant="outline" className="border-primary/30 text-primary py-1 px-4 text-[10px] sm:text-xs glass uppercase tracking-widest">
              👋 Meet the Founder
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-headline font-extrabold leading-[1.2] sm:leading-[1.1]">
              Empowering the <br />
              <span className="text-gradient">Next Generation</span> <br />
              of Engineers
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Guruphoria is dedicated to helping developers, students, and professionals master Artificial Intelligence, Software Engineering, Web Development, and Modern Technologies through practical, project-based learning.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-8 text-base sm:text-lg font-semibold neon-glow w-full sm:w-auto">
                <Link href="/courses">Explore Tutorials</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8 text-base sm:text-lg font-semibold glass border-white/10 w-full sm:w-auto">
                <Link href="https://www.youtube.com/@guruphoria" target="_blank">
                  <Youtube className="mr-2 h-5 w-5" /> Visit YouTube
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative group max-w-md mx-auto lg:max-w-none">
            <div className="absolute -inset-4 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition duration-1000"></div>
            <div className="relative glass rounded-3xl p-3 sm:p-4 overflow-hidden border-white/10 animate-float">
              {profileImage && (
                <Image
                  src={profileImage.imageUrl}
                  alt="Puneet Shivaay"
                  width={800}
                  height={800}
                  className="rounded-2xl w-full object-cover aspect-square grayscale-[20%] group-hover:grayscale-0 transition duration-500"
                  data-ai-hint="professional developer"
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* My Story Section */}
      <section className="py-16 sm:py-24 px-6 bg-[#050816]">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5 space-y-6 lg:space-y-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">The Story Behind <br /><span className="text-primary">Guruphoria</span></h2>
              <div className="space-y-4 sm:space-y-6 text-muted-foreground leading-relaxed text-base sm:text-lg">
                <p>
                  My journey started with a simple curiosity about how pixels turned into programs. As a Software Development Engineer, I spent years building complex systems for the industry, but I always felt something was missing: a bridge between high-level theory and real-world execution.
                </p>
                <p>
                  I started sharing my findings on YouTube and Medium, and the response was overwhelming. Developers weren't just looking for "how to code"—they were looking for "how to engineer."
                </p>
                <p>
                  Guruphoria was born out of that need. It's not just a learning platform; it's a lab where we experiment with the latest AI technologies, build real products, and share everything we learn with the community.
                </p>
              </div>
            </div>
            
            {/* Optimized Vertical Timeline */}
            <div className="lg:col-span-7 relative pt-8 lg:pt-0">
              <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px bg-primary/20 -translate-x-1/2"></div>
              <div className="space-y-12">
                {timeline.map((item, idx) => (
                  <div key={idx} className="relative flex items-start lg:items-center gap-8 lg:gap-12 pl-12 lg:pl-0 lg:odd:flex-row lg:even:flex-row-reverse">
                    {/* Content (Desktop Left) */}
                    <div className="hidden lg:block flex-1 text-right group">
                       {idx % 2 !== 0 ? (
                         <div className="space-y-1 opacity-60 group-hover:opacity-100 transition-opacity pr-12">
                            <span className="text-primary font-bold text-lg">{item.year}</span>
                            <h4 className="text-xl font-bold text-white">{item.title}</h4>
                            <p className="text-sm text-muted-foreground max-w-sm ml-auto">{item.desc}</p>
                         </div>
                       ) : null}
                    </div>

                    {/* Dot */}
                    <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 z-10 w-8 h-8 rounded-full bg-[#101828] border-2 border-primary flex items-center justify-center text-primary font-bold shadow-[0_0_15px_rgba(14,165,255,0.4)]">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                    </div>

                    {/* Content (Desktop Right & Mobile) */}
                    <div className="flex-1 text-left group">
                      {idx % 2 === 0 ? (
                        <div className="space-y-1 lg:pl-12">
                           <span className="text-primary font-bold text-lg">{item.year}</span>
                           <h4 className="text-xl font-bold text-white">{item.title}</h4>
                           <p className="text-sm text-muted-foreground max-w-sm">{item.desc}</p>
                        </div>
                      ) : (
                        <div className="lg:hidden space-y-1">
                           <span className="text-primary font-bold text-lg">{item.year}</span>
                           <h4 className="text-xl font-bold text-white">{item.title}</h4>
                           <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </div>
                      )}
                      
                      {/* Desktop specific spacing for the reversed side */}
                      {idx % 2 !== 0 && (
                        <div className="hidden lg:block space-y-1 pl-12 invisible">
                          <span className="text-primary font-bold text-lg">{item.year}</span>
                          <h4 className="text-xl font-bold text-white">{item.title}</h4>
                          <p className="text-sm text-muted-foreground max-w-sm">{item.desc}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 sm:py-24 px-6 bg-[#101828]/30">
        <div className="container mx-auto grid md:grid-cols-2 gap-6 sm:gap-8">
          <Card className="glass p-8 sm:p-12 space-y-6 bg-gradient-to-br from-primary/10 to-transparent border-primary/20 group hover:border-primary/40 transition-all rounded-[2rem]">
            <div className="bg-primary/20 w-12 sm:w-14 h-12 sm:h-14 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <Target className="h-7 w-7 sm:h-8 sm:w-8" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold">Our Mission</h3>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              To empower learners globally by providing practical, project-based education that reflects real-world engineering standards and the latest AI innovations.
            </p>
          </Card>
          <Card className="glass p-8 sm:p-12 space-y-6 bg-gradient-to-br from-primary/5 to-transparent border-white/5 group hover:border-primary/40 transition-all rounded-[2rem]">
            <div className="bg-primary/10 w-12 sm:w-14 h-12 sm:h-14 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <Compass className="h-7 w-7 sm:h-8 sm:w-8" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold">Our Vision</h3>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              To build the world's most comprehensive and accessible AI engineering laboratory where any developer can go from zero to building production-grade autonomous systems.
            </p>
          </Card>
        </div>
      </section>

      {/* What We Teach */}
      <section className="py-16 sm:py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">What We <span className="text-primary">Teach</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">Mastering the stack that builds the future.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
            {technologies.map((tech) => (
              <Card key={tech.name} className="glass p-6 text-center group hover:border-primary/50 transition-all bg-[#101828]/50 border-white/5 flex flex-col items-center gap-3 sm:gap-4 rounded-2xl">
                <div className="text-primary group-hover:scale-110 transition-transform">{tech.icon}</div>
                <div className="font-bold text-[10px] sm:text-xs tracking-tight">{tech.name}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 sm:py-24 px-6 bg-[#050816]">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center space-y-2">
                <div className="flex justify-center text-primary mb-2">{stat.icon}</div>
                <div className="text-3xl sm:text-4xl font-extrabold text-gradient">{stat.value}</div>
                <div className="text-[9px] sm:text-[10px] uppercase tracking-widest text-muted-foreground font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 sm:py-32 px-6 text-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-primary/10 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none"></div>
        <div className="container mx-auto relative z-10">
          <Sparkles className="h-10 sm:h-12 w-10 sm:w-12 text-primary/40 mx-auto mb-6 sm:mb-8" />
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-headline font-bold italic leading-tight max-w-4xl mx-auto px-4">
            "Technology changes every day. <br className="hidden sm:block" />
            Learning should <span className="text-primary underline underline-offset-8">never stop</span>."
          </h2>
          <p className="mt-6 sm:mt-8 text-muted-foreground font-bold tracking-widest uppercase text-xs sm:text-sm">— Puneet Shivaay</p>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 sm:py-24 px-6">
        <div className="container mx-auto">
          <Card className="glass p-8 sm:p-12 lg:p-20 relative overflow-hidden text-center max-w-4xl mx-auto rounded-[2rem] sm:rounded-[3rem] bg-[#101828]/60 border-white/10">
            <div className="relative z-10 space-y-6 sm:space-y-8">
              <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary mb-2 sm:mb-4">
                <Mail className="h-7 w-7 sm:h-8 sm:w-8" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight">Stay Updated with AI</h2>
              <p className="text-muted-foreground text-base sm:text-lg">Join thousands of developers getting exclusive insights on LLMs, Agentic AI, and full-stack engineering.</p>
              
              <div className="flex flex-col sm:flex-row gap-3 pt-4 sm:pt-6 max-w-lg mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-grow bg-white/5 border border-white/10 rounded-full px-6 sm:px-8 py-3 outline-none focus:border-primary transition-colors text-white text-sm sm:text-base"
                />
                <Button className="bg-primary hover:bg-primary/90 rounded-full px-8 py-3 h-12 sm:h-auto font-bold neon-glow text-sm sm:text-base">
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
