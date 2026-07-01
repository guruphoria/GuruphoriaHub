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
  ArrowRight, 
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
  Users,
  Milestone
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
      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
        <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-8 text-center lg:text-left">
            <Badge variant="outline" className="border-primary/30 text-primary py-1 px-4 text-sm glass uppercase tracking-widest">
              👋 Meet the Founder
            </Badge>
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold leading-[1.1]">
              Empowering the <br />
              <span className="text-gradient">Next Generation</span> <br />
              of Engineers
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Guruphoria is dedicated to helping developers, students, and professionals master Artificial Intelligence, Software Engineering, Web Development, and Modern Technologies through practical, project-based learning.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-8 text-lg font-semibold neon-glow">
                <Link href="/courses">Explore Tutorials</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8 text-lg font-semibold glass border-white/10">
                <Link href="https://www.youtube.com/@guruphoria" target="_blank">
                  <Youtube className="mr-2 h-5 w-5" /> Visit YouTube
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative group max-w-md mx-auto lg:max-w-none">
            <div className="absolute -inset-4 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition duration-1000"></div>
            <div className="relative glass rounded-3xl p-4 overflow-hidden border-white/10 animate-float">
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
      <section className="py-24 px-6 bg-[#050816]">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5 space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold">The Story Behind <br /><span className="text-primary">Guruphoria</span></h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
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
            <div className="lg:col-span-7 relative">
              <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-primary/20 -translate-x-1/2 hidden sm:block"></div>
              <div className="space-y-12">
                {timeline.map((item, idx) => (
                  <div key={idx} className={`relative flex items-center gap-8 ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    <div className="hidden lg:block flex-1 text-right">
                       {idx % 2 === 0 ? null : (
                         <div className="space-y-1">
                            <span className="text-primary font-bold">{item.year}</span>
                            <h4 className="text-xl font-bold">{item.title}</h4>
                            <p className="text-sm text-muted-foreground">{item.desc}</p>
                         </div>
                       )}
                    </div>
                    <div className="relative z-10 w-10 h-10 rounded-full bg-[#101828] border-2 border-primary flex items-center justify-center text-primary font-bold shadow-[0_0_15px_rgba(14,165,255,0.4)]">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                    </div>
                    <div className="flex-1 text-left">
                      {idx % 2 === 0 ? (
                        <div className="space-y-1">
                           <span className="text-primary font-bold">{item.year}</span>
                           <h4 className="text-xl font-bold">{item.title}</h4>
                           <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </div>
                      ) : (
                        <div className="lg:hidden space-y-1">
                           <span className="text-primary font-bold">{item.year}</span>
                           <h4 className="text-xl font-bold">{item.title}</h4>
                           <p className="text-sm text-muted-foreground">{item.desc}</p>
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
      <section className="py-24 px-6 bg-[#101828]/30">
        <div className="container mx-auto grid md:grid-cols-2 gap-8">
          <Card className="glass p-12 space-y-6 bg-gradient-to-br from-primary/10 to-transparent border-primary/20 group hover:border-primary/40 transition-all">
            <div className="bg-primary/20 w-14 h-14 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <Target className="h-8 w-8" />
            </div>
            <h3 className="text-3xl font-bold">Our Mission</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              To empower learners globally by providing practical, project-based education that reflects real-world engineering standards and the latest AI innovations.
            </p>
          </Card>
          <Card className="glass p-12 space-y-6 bg-gradient-to-br from-primary/5 to-transparent border-white/5 group hover:border-primary/40 transition-all">
            <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <Compass className="h-8 w-8" />
            </div>
            <h3 className="text-3xl font-bold">Our Vision</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              To build the world's most comprehensive and accessible AI engineering laboratory where any developer can go from zero to building production-grade autonomous systems.
            </p>
          </Card>
        </div>
      </section>

      {/* What We Teach */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">What We <span className="text-primary">Teach</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Mastering the stack that builds the future.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech) => (
              <Card key={tech.name} className="glass p-6 text-center group hover:border-primary/50 transition-all bg-[#101828]/50 border-white/5 flex flex-col items-center gap-4">
                <div className="text-primary group-hover:scale-110 transition-transform">{tech.icon}</div>
                <div className="font-bold text-xs">{tech.name}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Learn with Guruphoria */}
      <section className="py-24 px-6 bg-[#101828]/20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Industry Experience', desc: 'Direct insights from an active SDE working with modern tech stacks.', icon: <Award /> },
              { title: 'Real-world Projects', desc: 'Every lesson is tied to a tangible project you can add to your portfolio.', icon: <CheckCircle2 /> },
              { title: 'Hands-on Learning', desc: 'No boring slides. Just code, architecture, and live implementation.', icon: <Terminal /> },
              { title: 'Latest AI Tech', desc: 'Stay ahead with tutorials on Gemini, Agentic AI, and LLM orchestration.', icon: <Sparkles /> },
            ].map((feature, idx) => (
              <div key={idx} className="glass p-8 rounded-3xl border-white/5 space-y-4 group hover:bg-white/5 transition-colors">
                <div className="text-primary mb-4">{feature.icon}</div>
                <h4 className="text-xl font-bold">{feature.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-24 px-6 bg-[#050816]">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center space-y-2">
                <div className="flex justify-center text-primary mb-2">{stat.icon}</div>
                <div className="text-4xl font-extrabold text-gradient">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connect With Me */}
      <section className="py-24 px-6 bg-[#101828]/40">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Connect with <span className="text-primary">Me</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'YouTube', icon: <Youtube />, desc: 'Weekly video tutorials and live coding.', link: 'https://www.youtube.com/@guruphoria', color: 'text-[#EA3323]' },
              { name: 'GitHub', icon: <Github />, desc: 'Open source projects and code labs.', link: 'https://github.com/PuneetShivaay', color: 'text-white' },
              { name: 'Medium', icon: <Newspaper />, desc: 'In-depth technical articles and guides.', link: 'https://puneetshivaay.medium.com/', color: 'text-primary' },
              { name: 'LinkedIn', icon: <Linkedin />, desc: 'Professional updates and networking.', link: 'https://in.linkedin.com/company/guruphoria', color: 'text-[#0077B5]' },
              { name: 'Twitter/X', icon: <Twitter />, desc: 'Daily dev tips and tech thoughts.', link: '#', color: 'text-white' },
              { name: 'Email', icon: <Mail />, desc: 'Direct inquiries and collaborations.', link: '#', color: 'text-primary' },
            ].map((social) => (
              <Card key={social.name} className="glass p-8 group hover:border-primary/30 transition-all border-white/5 bg-[#101828]/50">
                <div className={`${social.color} mb-6 group-hover:scale-110 transition-transform`}>{social.icon}</div>
                <h4 className="text-xl font-bold mb-2">{social.name}</h4>
                <p className="text-sm text-muted-foreground mb-6">{social.desc}</p>
                <Button asChild variant="outline" className="w-full glass border-white/10 hover:border-primary/50">
                  <Link href={social.link} target="_blank">Connect</Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-32 px-6 text-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="container mx-auto relative z-10">
          <Sparkles className="h-12 w-12 text-primary/40 mx-auto mb-8" />
          <h2 className="text-3xl md:text-5xl font-headline font-bold italic leading-tight max-w-4xl mx-auto">
            "Technology changes every day. <br />
            Learning should <span className="text-primary underline underline-offset-8">never stop</span>."
          </h2>
          <p className="mt-8 text-muted-foreground font-bold tracking-widest uppercase text-sm">— Puneet Shivaay</p>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <Card className="glass p-12 lg:p-20 relative overflow-hidden text-center max-w-4xl mx-auto rounded-[3rem] bg-[#101828]/60 border-white/10">
            <div className="relative z-10 space-y-8">
              <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary mb-4">
                <Mail className="h-8 w-8" />
              </div>
              <h2 className="text-4xl font-bold leading-tight">Stay Updated with AI</h2>
              <p className="text-muted-foreground text-lg">Join thousands of developers getting exclusive insights on LLMs, Agentic AI, and full-stack engineering.</p>
              
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
