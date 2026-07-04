'use client';
import { CourseCard } from '@/components/cards/course-card';
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import type { Course } from '@/lib/types';
import { collection } from 'firebase/firestore';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, Sparkles } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

export default function CoursesPage() {
  const [search, setSearch] = useState('');
  const firestore = useFirestore();

  const coursesQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return collection(firestore, 'courses');
  }, [firestore]);

  const { data: courses, isLoading } = useCollection<Course>(coursesQuery);

  const filteredCourses = courses?.filter(c => 
    c.title.toLowerCase().includes(search.toLowerCase()) || 
    c.tags.some(t => t.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="flex flex-col bg-[#050816] min-h-screen text-white">
      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
        <div className="container mx-auto max-w-4xl relative z-10 text-center space-y-8">
          <Badge variant="outline" className="border-primary/30 text-primary py-1 px-4 text-xs glass uppercase tracking-widest">
            🎓 Knowledge Hub
          </Badge>
          <h1 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tight">
            Master the <span className="text-gradient">Future</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Project-based tutorials on AI Engineering, LLMs, and Modern Full-Stack Development.
          </p>

          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input 
              placeholder="Search tutorials..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-white/5 border-white/10 rounded-full pl-12 h-14 focus:border-primary/50 text-lg" 
            />
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        <div className="flex items-center gap-2 mb-10">
          <Sparkles className="text-primary h-6 w-6" />
          <h2 className="text-2xl font-bold uppercase tracking-widest text-white/60">Available Labs</h2>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {isLoading ? Array.from({ length: 4 }).map((_, i) => (
               <Card key={i} className="flex flex-col h-full overflow-hidden bg-[#101828]/50 border-white/5 animate-pulse">
                  <div className="aspect-video w-full bg-white/5"></div>
                  <div className="p-6 flex-grow space-y-4">
                      <div className="h-6 w-3/4 bg-white/5 rounded"></div>
                      <div className="h-4 w-full bg-white/5 rounded"></div>
                  </div>
              </Card>
          )) : filteredCourses?.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}
