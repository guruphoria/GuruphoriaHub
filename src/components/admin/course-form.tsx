'use client';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import type { CourseFormData } from '@/lib/types';
import { Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';

const formSchema = z.object({
  title: z.string().min(3, { message: 'Title must be at least 3 characters long.' }),
  description: z.string().min(10, { message: 'Description must be at least 10 characters long.' }),
  instructor: z.string().min(2, { message: "Instructor's name is required." }),
  duration: z.string().min(3, { message: "Please enter a valid duration (e.g., '1h 30m')." }),
  tags: z.string().refine(value => value.split(',').every(tag => tag.trim().length > 0), {
    message: 'Please provide a comma-separated list of tags.',
  }).transform(value => value.split(',').map(tag => tag.trim())),
  videoUrl: z.string().url({ message: 'Please enter a valid YouTube URL.' }),
  thumbnailUrl: z.string().url({ message: 'Please enter a valid image URL for the thumbnail.' }),
});

interface CourseFormProps {
  onSubmit: (data: CourseFormData) => void;
  initialData?: Partial<CourseFormData> & { tags: string[] | string };
}

export function CourseForm({ onSubmit, initialData }: CourseFormProps) {
  const [loading, setLoading] = useState(false);
  
  const defaultValues = {
    title: initialData?.title || '',
    description: initialData?.description || '',
    instructor: initialData?.instructor || '',
    duration: initialData?.duration || '',
    tags: Array.isArray(initialData?.tags) ? initialData.tags.join(', ') : initialData?.tags || '',
    videoUrl: initialData?.videoUrl || '',
    thumbnailUrl: initialData?.thumbnailUrl || '',
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues
  });
  
  useEffect(() => {
    if (initialData) {
      form.reset({
        ...initialData,
        tags: Array.isArray(initialData.tags) ? initialData.tags.join(', ') : initialData.tags,
      } as any);
    }
  }, [initialData, form]);


  const handleFormSubmit = async (data: z.infer<typeof formSchema>) => {
    setLoading(true);
    // The 'tags' field is already transformed by Zod into an array of strings.
    // However, if we need to be extra sure, we can process it again.
    // The schema transformation should be sufficient.
    await onSubmit(data as CourseFormData);
    setLoading(false);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Video Title</FormLabel>
              <FormControl>
                <Input placeholder="e.g., Introduction to Next.js" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Video Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Describe the course content in detail."
                  className="resize-y"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="instructor"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Instructor</FormLabel>
              <FormControl>
                <Input placeholder="e.g., John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="duration"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Video Length</FormLabel>
              <FormControl>
                <Input placeholder="e.g., 2h 15m" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Video Tags</FormLabel>
              <FormControl>
                <Input placeholder="e.g., React, Next.js, Web Development" {...field} />
              </FormControl>
              <FormDescription>
                Please provide a comma-separated list of tags.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="videoUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>YouTube Watch Link</FormLabel>
              <FormControl>
                <Input placeholder="https://www.youtube.com/watch?v=..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="thumbnailUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Video Thumbnail Image URL</FormLabel>
              <FormControl>
                <Input placeholder="https://example.com/image.png" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={loading}>
          {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {initialData ? 'Save Changes' : 'Add Course'}
        </Button>
      </form>
    </Form>
  );
}
