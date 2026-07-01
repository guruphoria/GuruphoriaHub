
'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Github, Youtube, Newspaper, Search, Menu } from 'lucide-react';
import { useUser } from '@/firebase';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { GuruphoriaLogo } from './logo';
import { getPlaceholderImage } from '@/lib/placeholder-images';

export function Header() {
  const { user } = useUser();
  const brandLogo = getPlaceholderImage('brand-logo');

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
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <Link href="/courses" className="hover:text-primary transition-colors">Learn</Link>
            <Link href="#" className="hover:text-primary transition-colors">Projects</Link>
            <Link href="#" className="hover:text-primary transition-colors">Resources</Link>
            <Link href="/about" className="hover:text-primary transition-colors">About</Link>
            <Link href="#" className="hover:text-primary transition-colors">Contact</Link>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-white">
            <Search className="h-5 w-5" />
          </Button>
          <div className="hidden md:flex items-center gap-2 border-l border-white/10 pl-3">
            <Button variant="ghost" size="icon" asChild className="text-muted-foreground hover:text-white">
              <Link href="https://github.com/PuneetShivaay" target="_blank"><Github className="h-5 w-5" /></Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="text-muted-foreground hover:text-white">
              <Link href="#" target="_blank"><Newspaper className="h-5 w-5" /></Link>
            </Button>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 font-semibold hidden lg:flex">
              <Youtube className="mr-2 h-4 w-4" /> Subscribe
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
          
          <Button variant="ghost" size="icon" className="lg:hidden text-muted-foreground">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
}
