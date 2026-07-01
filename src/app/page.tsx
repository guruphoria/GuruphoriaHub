'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getPlaceholderImage } from '@/lib/placeholder-images';
import { 
  ArrowRight, 
  Youtube, 
  Cpu, 
  Code2, 
  Database, 
  Brain, 
  Zap, 
  Github, 
  ExternalLink,
  Clock,
  Calendar,
  Layers,
  Sparkles,
  Search,
  BookOpen
} from 'lucide-react';

export default function Home() {
  const heroImage = getPlaceholderImage('hero-developer');

  const technologies = [
    { name: 'Agentic AI', icon: <Brain className="h-6 w-6" />, desc: 'Building autonomous agents that can think and act.' },
    { name: 'LLM Engineering', icon: <Cpu className="h-6 w-6" />, desc: 'Optimizing and scaling large language models.' },
    { name: 'Next.js', icon: <Zap className="h-6 w-6" />, desc: 'Production-grade full-stack React applications.' },
    { name: 'Firebase', icon: <Database className="h-6 w-6" />, desc: 'Real-time databases and serverless architecture.' },
    { name: 'Python', icon: <Code2 className="h-6 w-6" />, desc: 'The backbone of modern AI and data science.' },
    { name: 'Automation', icon: <Layers className="h-6 w-6" />, desc: 'Streamlining workflows with intelligent systems.' },
  ];

  const roadmaps = [
    { title: 'AI Engineering Roadmap', time: '12 Weeks', difficulty: 'Advanced', color: 'from-blue-500 to-cyan-400' },
    { title: 'React Developer Roadmap', time: '8 Weeks', difficulty: 'Intermediate', color: 'from-purple-500 to-pink-500' },
    { title: 'Firebase Mastery', time: '4 Weeks', difficulty: 'Beginner', color: 'from-orange-500 to-yellow-500' },
    { title: 'Prompt Engineering', time: '2 Weeks', difficulty: 'Beginner', color: 'from-green-500 to-emerald-400' },
  ];

  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-8">
            <Badge variant="outline" className="border-primary/30 text-primary py-1 px-4 text-sm glass">
              ✨ Redefining Tech Education
            </Badge>
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold leading-[1.1]">
              Master <span className="text-gradient">AI.</span><br />
              Build Software.<br />
              Shape the Future.
            </h1>
            <p className="max-w-xl text-lg text-muted-foreground leading-relaxed">
              Helping developers and students master LLM Engineering, Agentic AI, Firebase, and Modern Web Tech through deep-dive, practical tutorials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-8 text-lg font-semibold neon-glow">
                <Youtube className="mr-2 h-5 w-5" /> Watch on YouTube
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 text-lg font-semibold glass hover:bg-white/5">
                Explore Learning <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition duration-1000"></div>
            <div className="relative glass rounded-3xl p-4 overflow-hidden animate-float">
              {heroImage && (
                <Image
                  src={heroImage.imageUrl}
                  alt="Guruphoria Hero"
                  width={600}
                  height={600}
                  className="rounded-2xl w-full object-cover aspect-square grayscale-[20%] group-hover:grayscale-0 transition duration-500"
                />
              )}
              {/* Decorative AI Graphics */}
              <div className="absolute top-8 right-8 bg-black/80 backdrop-blur-md p-3 rounded-xl border border-white/10 text-xs font-mono space-y-1">
                <div className="text-primary">import &#123; AI &#125; from 'guruphoria'</div>
                <div className="text-green-400">await AI.generate(future)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="w-full py-24 bg-background relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">What You'll <span className="text-primary">Learn</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Deep dive into the most relevant technologies shaping the software industry today.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech) => (
              <Card key={tech.name} className="glass p-8 group hover:border-primary/50 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10 space-y-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    {tech.icon}
                  </div>
                  <h3 className="text-xl font-bold">{tech.name}</h3>
                  <p className="text-muted-foreground text-sm">{tech.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="w-full py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold">Featured Learning <span className="text-primary">Paths</span></h2>
              <p className="text-muted-foreground">Master complex topics with these structured roadmaps.</p>
            </div>
            <Button variant="link" className="text-primary p-0 h-auto">View all roadmaps <ArrowRight className="ml-1 h-4 w-4" /></Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {roadmaps.map((path) => (
              <Card key={path.title} className="glass p-6 group hover:-translate-y-2 transition-transform duration-300">
                <div className={`h-1 w-full bg-gradient-to-r ${path.color} rounded-full mb-6`}></div>
                <h3 className="text-lg font-bold mb-4">{path.title}</h3>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {path.time}</span>
                  <span className="bg-white/5 px-2 py-1 rounded">{path.difficulty}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Content */}
      <section className="w-full py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24">
            {/* YouTube Section */}
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold flex items-center gap-3">
                  <Youtube className="text-red-500 h-8 w-8" /> Latest Videos
                </h2>
                <Button variant="ghost" className="text-sm">Visit Channel</Button>
              </div>
              <div className="grid gap-6">
                {[1, 2].map((i) => (
                  <Card key={i} className="glass overflow-hidden group">
                    <div className="relative aspect-video">
                      <Image 
                        src={`https://picsum.photos/seed/vid${i}/600/400`} 
                        alt="Video Thumbnail" 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                      <div className="absolute bottom-3 right-3 bg-black/80 px-2 py-1 rounded text-[10px] font-bold">14:20</div>
                    </div>
                    <div className="p-4 space-y-2">
                      <h4 className="font-bold line-clamp-2">Building an Agentic AI Framework with Next.js 15 and OpenAI</h4>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> 2 days ago</span>
                        <span>4.2k views</span>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Articles Section */}
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold flex items-center gap-3">
                  <BookOpen className="text-primary h-8 w-8" /> Medium Stories
                </h2>
                <Button variant="ghost" className="text-sm">Read all</Button>
              </div>
              <div className="grid gap-6">
                {[1, 2].map((i) => (
                  <Card key={i} className="glass p-6 flex gap-6 group">
                    <div className="hidden sm:block relative w-32 h-32 rounded-xl overflow-hidden shrink-0">
                      <Image 
                        src={`https://picsum.photos/seed/art${i}/300/300`} 
                        alt="Article Image" 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="space-y-3 flex-grow">
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-none">AI & Engineering</Badge>
                      <h4 className="font-bold text-lg group-hover:text-primary transition-colors">The Future of Software Development: AI Agents and the Death of Coding?</h4>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span>8 min read</span>
                        <span>•</span>
                        <span>Oct 12, 2023</span>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="w-full py-24">
        <div className="container mx-auto px-6">
          <Card className="glass p-12 lg:p-20 relative overflow-hidden text-center max-w-5xl mx-auto rounded-[3rem]">
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/20 rounded-full blur-[100px]"></div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-[100px]"></div>
            
            <div className="relative z-10 space-y-8 max-w-2xl mx-auto">
              <div className="inline-flex p-3 rounded-2xl bg-primary/10 text-primary mb-4">
                <Sparkles className="h-8 w-8" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">Stay Updated with AI & Software Engineering</h2>
              <p className="text-muted-foreground text-lg">Join 10,000+ developers getting exclusive insights on LLMs, Agentic AI, and full-stack development.</p>
              
              <div className="flex flex-col sm:flex-row gap-3 pt-6">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-grow bg-white/5 border border-white/10 rounded-full px-8 py-4 outline-none focus:border-primary transition-colors text-white"
                />
                <Button className="bg-primary hover:bg-primary/90 rounded-full px-10 py-4 h-auto text-lg font-bold">
                  Subscribe Now
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
