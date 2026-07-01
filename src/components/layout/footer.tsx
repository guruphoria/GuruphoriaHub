import Link from 'next/link';
import { GraduationCap, Github, Youtube, Newspaper, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 bg-background pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2" prefetch={false}>
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="text-2xl font-headline font-bold">Guruphoria</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Empowering the next generation of developers through expert-led AI engineering and modern software development education.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Github className="h-5 w-5" /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Youtube className="h-5 w-5" /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Newspaper className="h-5 w-5" /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="h-5 w-5" /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter className="h-5 w-5" /></Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6">Learning</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">AI Engineering</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">LLM Development</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">React & Next.js</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Firebase Mastery</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6">Resources</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">Open Source</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Medium Articles</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Newsletter</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Community</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 gap-4">
          <p className="text-sm text-muted-foreground">© {year} Guruphoria. Built for the future of AI.</p>
        </div>
      </div>
    </footer>
  );
}