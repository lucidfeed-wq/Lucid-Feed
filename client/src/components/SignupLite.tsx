import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function SignupLite() {
  const [email, setEmail] = useState('');
  const [ok, setOk] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setOk(null);

    try {
      // Capture UTM parameters from URL
      const searchParams = new URLSearchParams(window.location.search);
      const utm = {
        source: searchParams.get('utm_source') || 'direct',
        medium: searchParams.get('utm_medium') || 'web',
        campaign: searchParams.get('utm_campaign') || 'site'
      };

      const res = await fetch('/webhooks/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email, 
          segment: 'newsletter',
          utm 
        })
      });

      setOk(res.ok);
      
      if (res.ok) {
        setEmail(''); // Clear form on success
      }
    } catch (error) {
      console.error('Newsletter signup error:', error);
      setOk(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={submit} className="flex flex-col sm:flex-row gap-2 w-full max-w-md">
      <Input
        type="email"
        required
        placeholder="you@work.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1"
        disabled={loading}
        data-testid="input-newsletter-email"
      />
      <Button 
        type="submit" 
        disabled={loading}
        data-testid="button-newsletter-submit"
      >
        {loading ? 'Subscribing...' : 'Subscribe'}
      </Button>
      {ok === true && (
        <span className="text-sm text-primary" data-testid="text-newsletter-success">
          Thanks — check your inbox.
        </span>
      )}
      {ok === false && (
        <span className="text-sm text-destructive" data-testid="text-newsletter-error">
          Oops, try again.
        </span>
      )}
    </form>
  );
}
