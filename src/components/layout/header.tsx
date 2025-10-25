import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { GraduationCap } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-background/95 sticky top-0 z-50 w-full border-b backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <GraduationCap className="h-7 w-7 text-primary" />
          <span className="text-xl font-headline font-bold">Guruphoria</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <Link
            href="/courses"
            className="text-foreground/60 transition-colors hover:text-foreground/80"
            prefetch={false}
          >
            Courses
          </Link>
          <Link
            href="/about"
            className="text-foreground/60 transition-colors hover:text-foreground/80"
            prefetch={false}
          >
            About
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="outline">Sign In</Button>
        </div>
      </div>
    </header>
  );
}
