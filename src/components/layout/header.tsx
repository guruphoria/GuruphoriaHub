'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Github, Youtube, Newspaper, Search, Menu, X } from 'lucide-react';
import { useUser } from '@/firebase';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
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
  const { user } = useUser();
  const brandLogo = getPlaceholderImage('brand-logo');

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Explore', href: '/explore' },
    { name: 'Learn', href: '/courses' },
    { name: 'Projects', href: '/projects' },
    { name: 'Resources', href: '/resources' },
    { name: 'About', href: '/about' },
  ];

  return (
    <header className="bg-background/80 sticky top-0 z-50 w-full border-b border-white/5 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center gap-2 group" prefetch={false}>
            <div className="bg-primary/20 p-1 rounded-lg group-hover:bg-primary/30 transition-colors overflow-hidden">
              {brandLogo ? (
                <Image 
                  src={brandLogo.imageUrl} 
                  alt="Guruphoria" 
                  width={40} 
                  height={40} 
                  className="h-10 w-10 object-contain rounded"
                />
              ) : (
                <GuruphoriaLogo className="h-10 w-10 text-primary" />
              )}
            </div>
            <span className="text-xl font-headline font-bold tracking-tight uppercase">Guruphoria</span>
          </Link>
          
          <nav className="hidden items-center gap-8 text-sm font-medium lg:flex text-muted-foreground">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-primary transition-colors">
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-white hidden sm:flex">
            <Search className="h-5 w-5" />
          </Button>
          <div className="hidden md:flex items-center gap-2 border-l border-white/10 pl-3">
            <Button variant="ghost" size="icon" asChild className="text-muted-foreground hover:text-white">
              <Link href="https://github.com/PuneetShivaay" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="text-muted-foreground hover:text-white">
              <Link href="https://puneetshivaay.medium.com/" target="_blank" rel="noopener noreferrer">
                <Newspaper className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 font-semibold hidden lg:flex">
              <Link href="https://www.youtube.com/@guruphoria" target="_blank" rel="noopener noreferrer">
                <Youtube className="mr-2 h-4 w-4" /> Subscribe
              </Link>
            </Button>
          </div>
          
          {user && (
            <Link href="/admin">
              <Avatar className="h-9 w-9 border border-primary/20">
                <AvatarImage src={user.photoURL ?? ''} />
                <AvatarFallback className="bg-primary/10 text-primary">{user.displayName?.[0] || 'G'}</AvatarFallback>
              </Avatar>
            </Link>
          )}
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden text-muted-foreground">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#050816] border-white/10 text-white p-0">
              <SheetHeader className="p-6 border-b border-white/10 text-left">
                <SheetTitle className="text-white flex items-center gap-2">
                  <div className="bg-primary/20 p-1 rounded-lg overflow-hidden">
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
              <div className="flex flex-col p-6 space-y-6">
                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <Link 
                      key={link.name} 
                      href={link.href} 
                      className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors border-b border-white/5 pb-2"
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
                <div className="pt-6 space-y-4">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Connect</p>
                  <div className="flex gap-4">
                    <Button variant="outline" size="icon" asChild className="glass border-white/10 rounded-full h-10 w-10">
                      <Link href="https://github.com/PuneetShivaay" target="_blank">
                        <Github className="h-5 w-5" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="icon" asChild className="glass border-white/10 rounded-full h-10 w-10">
                      <Link href="https://puneetshivaay.medium.com/" target="_blank">
                        <Newspaper className="h-5 w-5" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="icon" asChild className="glass border-white/10 rounded-full h-10 w-10">
                      <Link href="https://www.youtube.com/@guruphoria" target="_blank">
                        <Youtube className="h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                  <Button asChild className="w-full bg-primary hover:bg-primary/90 rounded-full font-bold">
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
