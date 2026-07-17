'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Github, Youtube, Newspaper, Search, Menu } from 'lucide-react';
import { GuruphoriaLogo } from './logo';
import { getPlaceholderImage } from '@/lib/placeholder-images';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Header() {
  const [open, setOpen] = useState(false);
  const brandLogo = getPlaceholderImage('brand-logo');

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Explore', href: '/explore' },
    { name: 'Learn', href: '/courses' },
    { name: 'Projects', href: '/projects' },
    { name: 'Resources', href: '/resources' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <header className="bg-background/80 sticky top-0 z-50 w-full border-b border-white/5 backdrop-blur-md">
      <div className="container mx-auto flex h-16 sm:h-20 items-center justify-between px-6">
        <div className="flex items-center gap-6 lg:gap-10">
          <Link href="/" className="flex items-center gap-2 group" prefetch={false}>
            <div className="bg-primary/20 p-1 rounded-lg group-hover:bg-primary/30 transition-all duration-300 overflow-hidden shrink-0 group-hover:scale-110 active:scale-95">
              {brandLogo ? (
                <Image 
                  src={brandLogo.imageUrl} 
                  alt="Guruphoria" 
                  width={40} 
                  height={40} 
                  className="h-8 w-8 sm:h-10 sm:w-10 object-contain rounded transition-transform group-hover:scale-105"
                />
              ) : (
                <GuruphoriaLogo className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
              )}
            </div>
            <span className="text-lg sm:text-xl font-headline font-bold tracking-tight uppercase hidden xs:block transition-all group-hover:text-primary group-hover:translate-x-1">Guruphoria</span>
          </Link>
          
          <nav className="hidden items-center gap-6 lg:gap-8 text-[13px] lg:text-sm font-medium lg:flex text-muted-foreground">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-primary transition-all duration-300 whitespace-nowrap relative group/link">
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover/link:w-full" />
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-white hidden sm:flex h-9 w-9 transition-all hover:scale-110 active:scale-95">
            <Search className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
          <div className="hidden md:flex items-center gap-1 border-l border-white/10 pl-2">
            <Button variant="ghost" size="icon" asChild className="text-muted-foreground hover:text-white h-9 w-9 transition-all hover:scale-110 active:scale-90 hover:bg-primary/10">
              <Link href="https://github.com/PuneetShivaay" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="text-muted-foreground hover:text-white h-9 w-9 transition-all hover:scale-110 active:scale-90 hover:bg-primary/10">
              <Link href="https://puneetshivaay.medium.com/" target="_blank" rel="noopener noreferrer">
                <Newspaper className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-4 lg:px-6 h-9 font-semibold hidden lg:flex text-xs lg:text-sm transition-all hover:scale-105 active:scale-95 neon-glow group/sub">
              <Link href="https://www.youtube.com/@guruphoria" target="_blank" rel="noopener noreferrer">
                <Youtube className="mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform group-hover/sub:scale-110" /> Subscribe
              </Link>
            </Button>
          </div>
          
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden text-muted-foreground h-9 w-9 transition-transform active:scale-90">
                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#050816] border-white/10 text-white p-0 w-[280px] sm:w-[350px]">
              <SheetHeader className="p-6 border-b border-white/10 text-left">
                <SheetTitle className="text-white flex items-center gap-2">
                  <div className="bg-primary/20 p-1 rounded-lg overflow-hidden shrink-0">
                    {brandLogo ? (
                      <Image 
                        src={brandLogo.imageUrl} 
                        alt="Guruphoria" 
                        width={30} 
                        height={30} 
                        className="h-8 w-8 object-contain rounded"
                      />
                    ) : (
                      <GuruphoriaLogo className="h-8 w-8 text-primary" />
                    )}
                  </div>
                  <span className="text-lg font-headline font-bold uppercase tracking-tight">Guruphoria</span>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col p-6 space-y-6 overflow-y-auto max-h-[calc(100vh-80px)]">
                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <Link 
                      key={link.name} 
                      href={link.href} 
                      onClick={handleLinkClick}
                      className="text-base sm:text-lg font-medium text-muted-foreground hover:text-primary transition-all border-b border-white/5 pb-2 hover:translate-x-2"
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
                <div className="pt-2 space-y-4">
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Connect</p>
                  <div className="flex gap-3">
                    <Button variant="outline" size="icon" asChild className="glass border-white/10 rounded-full h-9 w-9 transition-transform hover:scale-110 active:scale-90" onClick={handleLinkClick}>
                      <Link href="https://github.com/PuneetShivaay" target="_blank">
                        <Github className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="icon" asChild className="glass border-white/10 rounded-full h-9 w-9 transition-transform hover:scale-110 active:scale-90" onClick={handleLinkClick}>
                      <Link href="https://puneetshivaay.medium.com/" target="_blank">
                        <Newspaper className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="icon" asChild className="glass border-white/10 rounded-full h-9 w-9 transition-transform hover:scale-110 active:scale-90" onClick={handleLinkClick}>
                      <Link href="https://www.youtube.com/@guruphoria" target="_blank">
                        <Youtube className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <Button asChild className="w-full bg-primary hover:bg-primary/90 rounded-full font-bold h-11 text-sm transition-all hover:scale-[1.02] active:scale-95 neon-glow" onClick={handleLinkClick}>
                    <Link href="https://www.youtube.com/@guruphoria" target="_blank">
                      <Youtube className="mr-2 h-4 w-4" /> Subscribe on YouTube
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
