'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AddCoursePage() {
  return (
    <div className="container mx-auto px-4 py-32 text-center">
      <h1 className="text-4xl font-headline font-bold mb-4">Admin Access Disabled</h1>
      <p className="text-muted-foreground mb-8">This section of the platform is currently not in use.</p>
      <Button asChild className="rounded-full">
        <Link href="/">Return to Home</Link>
      </Button>
    </div>
  );
}