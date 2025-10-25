import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getPlaceholderImage } from '@/lib/placeholder-images';
import { Award, Mountain, Users } from 'lucide-react';

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Alex Johnson',
      role: 'Founder & CEO',
      avatarId: 'team-member-1',
    },
    {
      name: 'Maria Garcia',
      role: 'Lead Instructor',
      avatarId: 'team-member-2',
    },
    {
      name: 'Chris Lee',
      role: 'Head of Content',
      avatarId: 'team-member-3',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full bg-primary/5 dark:bg-primary/10">
        <div className="container mx-auto px-4 md:px-6 py-24 md:py-32 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold tracking-tighter">
            About Guruphoria
          </h1>
          <p className="max-w-3xl mx-auto mt-4 text-lg text-muted-foreground">
            We are on a mission to make high-quality education accessible to everyone, everywhere.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full bg-background">
        <div className="container mx-auto px-4 md:px-6 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-headline font-bold">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed">
                Guruphoria was born from a simple idea: learning should be a lifelong adventure, not a chore.
                Frustrated by the lack of engaging, practical, and affordable online courses, our founders set out
                to create a platform that they themselves would love to use.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Since our launch in 2023, we've helped thousands of students from around the globe unlock their
                potential. We believe that by combining expert-led content with a supportive community, we can
                empower anyone to achieve their personal and professional goals.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="https://picsum.photos/seed/about-story/600/400"
                alt="A group of people collaborating around a table"
                data-ai-hint="team collaboration"
                width={600}
                height={400}
                className="rounded-xl shadow-lg aspect-video object-cover"
              />
            </div>
          </div>
        </div>
      </section>

       {/* Mission & Values Section */}
       <section className="w-full bg-primary/5 dark:bg-primary/10">
        <div className="container mx-auto px-4 md:px-6 py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Our Mission & Values</h2>
            <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">
              Our values guide every decision we make and every course we create. They are the foundation of our commitment to you.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-6 flex flex-col items-center text-center">
              <div className="p-3 rounded-full bg-primary/10 mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-headline font-semibold mb-2">Quality</h3>
              <p className="text-muted-foreground">We partner with industry experts to deliver courses that are not only comprehensive but also practical and up-to-date.</p>
            </Card>
            <Card className="p-6 flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-accent/10 mb-4">
                  <Mountain className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-headline font-semibold mb-2">Accessibility</h3>
                <p className="text-muted-foreground">Education should be within everyone's reach. We strive to keep our courses affordable and our platform easy to use for all.</p>
            </Card>
             <Card className="p-6 flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-primary/10 mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-headline font-semibold mb-2">Community</h3>
                <p className="text-muted-foreground">Learning is better together. We foster a supportive community where students and instructors can connect and grow.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="w-full bg-background">
        <div className="container mx-auto px-4 md:px-6 py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Meet the Team</h2>
            <p className="text-lg text-muted-foreground mt-2">The passionate individuals behind Guruphoria.</p>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member) => {
              const avatar = getPlaceholderImage(member.avatarId);
              return (
                <Card key={member.name} className="flex flex-col items-center text-center overflow-hidden">
                  {avatar && (
                    <Image
                      src={avatar.imageUrl}
                      alt={`Avatar of ${member.name}`}
                      data-ai-hint={avatar.imageHint}
                      width={200}
                      height={200}
                      className="aspect-square w-full object-cover"
                    />
                  )}
                  <CardHeader>
                    <CardTitle className="font-headline text-xl">{member.name}</CardTitle>
                    <p className="text-primary">{member.role}</p>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
