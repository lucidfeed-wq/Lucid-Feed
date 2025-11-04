import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { z } from 'zod';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { apiRequest, queryClient } from '@/lib/queryClient';
import { Plus } from 'lucide-react';

const feedSubmissionSchema = z.object({
  feedUrl: z.string().url('Please enter a valid RSS feed URL'),
  feedName: z.string().min(1, 'Please enter a feed name'),
  category: z.string().min(1, 'Please select a category'),
  sourceType: z.string().min(1, 'Please select a source type'),
  description: z.string().min(10, 'Description must be at least 10 characters').max(500, 'Description must be less than 500 characters'),
});

type FeedSubmissionFormData = z.infer<typeof feedSubmissionSchema>;

const categories = [
  'Medical Journals',
  'Health Communities',
  'Expert Newsletters',
  'Educational Videos',
  'Metabolic Health',
  'Gut Health',
  'Hormone Optimization',
  'Longevity',
  'Science & Research',
  'Other',
];

interface FeedSubmissionDialogProps {
  children?: React.ReactNode;
}

export function FeedSubmissionDialog({ children }: FeedSubmissionDialogProps) {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const form = useForm<FeedSubmissionFormData>({
    resolver: zodResolver(feedSubmissionSchema),
    defaultValues: {
      feedUrl: '',
      feedName: '',
      category: '',
      sourceType: '',
      description: '',
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: FeedSubmissionFormData) => {
      // Add domain field (always 'health' for now)
      return await apiRequest('POST', '/api/feeds/submit', {
        ...data,
        domain: 'health',
      });
    },
    onSuccess: () => {
      toast({
        title: 'Feed submitted successfully',
        description: 'Your feed submission is pending admin approval.',
      });
      queryClient.invalidateQueries({ queryKey: ['/api/feeds'] });
      form.reset();
      setOpen(false);
    },
    onError: (error: Error) => {
      toast({
        title: 'Submission failed',
        description: error.message || 'Failed to submit feed. Please try again.',
        variant: 'destructive',
      });
    },
  });

  const onSubmit = (data: FeedSubmissionFormData) => {
    submitMutation.mutate(data);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children || (
          <Button variant="default" data-testid="button-submit-feed">
            <Plus className="h-4 w-4 mr-2" />
            Submit Feed
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-2xl" data-testid="dialog-submit-feed">
        <DialogHeader>
          <DialogTitle>Submit a New RSS Feed</DialogTitle>
          <DialogDescription>
            Suggest a high-quality RSS feed for the community. Our team will review it for approval.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="feedUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>RSS Feed URL</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://example.com/feed.xml"
                      {...field}
                      data-testid="input-feed-url"
                    />
                  </FormControl>
                  <FormDescription>
                    The URL of the RSS or Atom feed
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="feedName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Feed Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.g., Journal of Metabolic Health"
                      {...field}
                      data-testid="input-feed-name"
                    />
                  </FormControl>
                  <FormDescription>
                    The name or title of the feed
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="sourceType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Source Type</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger data-testid="select-source-type">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="journal">Journal</SelectItem>
                        <SelectItem value="reddit">Reddit</SelectItem>
                        <SelectItem value="substack">Substack</SelectItem>
                        <SelectItem value="youtube">YouTube</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger data-testid="select-feed-category">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe what makes this feed valuable to the community..."
                      className="resize-none min-h-[100px]"
                      {...field}
                      data-testid="input-feed-description"
                    />
                  </FormControl>
                  <FormDescription>
                    Explain why this feed should be included (10-500 characters)
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex items-center justify-end gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={() => setOpen(false)}
                disabled={submitMutation.isPending}
                data-testid="button-cancel-submit"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={submitMutation.isPending}
                data-testid="button-confirm-submit"
              >
                {submitMutation.isPending ? 'Submitting...' : 'Submit for Review'}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
