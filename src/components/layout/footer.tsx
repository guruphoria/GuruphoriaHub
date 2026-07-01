'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Github, 
  Youtube, 
  Newspaper, 
  Twitter, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Globe, 
  ChevronRight, 
  ArrowRight 
} from 'lucide-react';
import { GuruphoriaLogo } from './logo';
import { getPlaceholderImage } from '@/lib/placeholder-images';

export function Footer() {
  const [year, setYear] = useState(2024);
  const brandLogo = getPlaceholderImage('brand-logo');

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const footerLinks = {
    learning: [
      { name: 'AI Engineering', href: '/explore' },
      { name: 'LLM Mastery', href: '/courses' },
      { name: 'Agentic AI Labs', href: '/projects' },
      { name: 'Full-Stack Labs', href: '/courses' },
    ],
    resources: [
      { name: 'Technical Blog', href: 'https://puneetshivaay.medium.com/' },
      { name: 'GitHub Labs', href: 'https://github.com/PuneetShivaay' },
      { name: 'Cheat Sheets', href: '/resources' },
      { name: 'AI Prompts', href: '/resources' },
    ],
    company: [
      { name: 'About the Founder', href: '/about' },
      { name: 'Contact & Support', href: '/contact' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
    ]
  };

  return (
    <footer className="border-t border-white/5 bg-[#050816] pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-3 group" prefetch={false}>
              <div className="bg-primary/20 p-1.5 rounded-xl group-hover:bg-primary/30 transition-all duration-300 overflow-hidden shadow-2xl">
                {brandLogo ? (
                  <Image 
                    src={brandLogo.imageUrl} 
                    alt="Guruphoria" 
                    width={48} 
                    height={48} 
                    className="h-10 w-10 object-contain rounded-lg"
                  />
                ) : (
                  <GuruphoriaLogo className="h-10 w-10 text-primary" />
                )}
              </div>
              <span className="text-2xl font-headline font-extrabold tracking-tighter uppercase text-white">Guruphoria</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs font-medium">
              Empowering the next generation of engineers through elite, project-based AI and Software Engineering education.
            </p>
            <div className="flex gap-5">
              {[
                { icon: <Github className="w-5 h-5" />, href: 'https://github.com/PuneetShivaay', label: 'GitHub' },
                { icon: <Youtube className="w-5 h-5" />, href: 'https://www.youtube.com/@guruphoria', label: 'YouTube' },
                { icon: <Newspaper className="w-5 h-5" />, href: 'https://puneetshivaay.medium.com/', label: 'Medium' },
                { icon: <Linkedin className="w-5 h-5" />, href: 'https://in.linkedin.com/company/guruphoria', label: 'LinkedIn' },
                { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
              ].map((social) => (
                <Link 
                  key={social.label}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={social.label}
                  className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-8">Learning Tracks</h4>
            <ul className="space-y-4 text-sm font-medium">
              {footerLinks.learning.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                    {link.name} <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-8">Resources</h4>
            <ul className="space-y-4 text-sm font-medium">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                    {link.name} <ExternalLink className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-8">
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-8">Contact</h4>
              <Link href="mailto:guruphoria@gmail.com" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-3 text-sm font-medium group">
                <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                guruphoria@gmail.com
              </Link>
            </div>
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4">Newsletter</h4>
              <p className="text-xs text-muted-foreground font-medium mb-4">Stay updated with latest technical labs.</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs w-full focus:border-primary outline-none transition-colors text-white"
                />
                <button className="bg-primary text-white p-2 rounded-lg hover:scale-105 transition-transform">
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6 text-[10px] text-muted-foreground font-bold uppercase tracking-widest">
            <p>© {year} GURUPHORIA. ALL RIGHTS RESERVED.</p>
            <div className="hidden sm:flex items-center gap-2">
              <Globe className="h-3 w-3" />
              <span>San Francisco • Remote</span>
            </div>
          </div>
          <div className="flex items-center gap-8 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
            <Link href="#" className="hover:text-primary transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms</Link>
            <Link href="#" className="hover:text-primary transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
    </footer>
  );
}