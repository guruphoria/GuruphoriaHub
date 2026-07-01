'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="container mx-auto px-4 py-32 text-center">
      <h1 className="text-4xl font-headline font-bold mb-4">Login Disabled</h1>
      <p className="text-muted-foreground mb-8">Authentication is currently restricted.</p>
      <Button asChild className="rounded-full">
        <Link href="/">Return to Home</Link>
      </Button>
    </div>
  );
}
