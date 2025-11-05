import { useLocation } from "wouter";
import { Brain, TrendingUp, Zap, Shield, MessageSquare, BarChart3 } from "lucide-react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/enhanced/HeroSection";
import { FeatureSection } from "@/components/enhanced/FeatureSection";
import { FAQSection } from "@/components/enhanced/FAQSection";
import { PricingCard } from "@/components/enhanced/PricingCard";

export function LandingPage() {
  const [, navigate] = useLocation();

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Summaries",
      description: "Get concise, intelligent summaries of articles, research papers, and discussions powered by advanced AI.",
      color: "#3b82f6",
    },
    {
      icon: TrendingUp,
      title: "Quality Scoring",
      description: "Transparent multi-signal quality assessment combining citation metrics, author credibility, and methodology quality.",
      color: "#10b981",
    },
    {
      icon: Zap,
      title: "Real-time Updates",
      description: "Stay current with daily or weekly digests from journals, YouTube, Reddit, Substack, and more.",
      color: "#f59e0b",
    },
    {
      icon: Shield,
      title: "Curated Sources",
      description: "Content from peer-reviewed journals, trusted experts, and verified community discussions.",
      color: "#8b5cf6",
    },
    {
      icon: MessageSquare,
      title: "AI Chat Assistant",
      description: "Ask questions and get contextual answers with citations from your personalized feed.",
      color: "#ec4899",
    },
    {
      icon: BarChart3,
      title: "Personal Analytics",
      description: "Track your reading patterns and discover new topics aligned with your interests.",
      color: "#14b8a6",
    },
  ];

  const faqs = [
    {
      question: "What makes Lucid Feed different from other news aggregators?",
      answer: "Lucid Feed combines AI-powered curation with transparent quality scoring. We focus on health and wellness content from trusted sources, providing detailed summaries and citations so you can make informed decisions.",
    },
    {
      question: "How does the personalization work?",
      answer: "You select topics and source types during onboarding. Our algorithm then curates content based on your preferences, combining quality scores, recency, and engagement metrics to deliver your personalized digest.",
    },
    {
      question: "What sources do you aggregate from?",
      answer: "We curate from peer-reviewed medical journals, research preprints, YouTube channels, Reddit communities, Substack newsletters, and podcasts—all focused on health, wellness, and medical topics.",
    },
    {
      question: "Can I try it before subscribing?",
      answer: "Yes! Our Free tier provides weekly digests with AI-powered summaries. Upgrade to Premium or Pro for daily updates and advanced features.",
    },
    {
      question: "How are quality scores calculated?",
      answer: "Our quality scoring combines citation metrics (30%), author credibility (25%), methodology quality (25%), community verification (10%), and recency (10%). All scores are transparent and explained.",
    },
    {
      question: "Can I export or share content?",
      answer: "Absolutely! Export your digests in JSON, Markdown, or RSS format. Share individual articles or entire digests with colleagues and friends.",
    },
  ];

  const pricingPlans = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for getting started",
      features: [
        "Weekly personalized digests",
        "AI-powered summaries",
        "Topic customization",
        "Quality scoring",
        "Basic analytics",
      ],
      cta: {
        text: "Get Started Free",
        onClick: () => navigate("/onboarding"),
      },
    },
    {
      name: "Premium",
      price: "$15",
      description: "For dedicated learners",
      features: [
        "Daily personalized digests",
        "Everything in Free",
        "Advanced filtering",
        "AI chat assistant",
        "Priority support",
        "Export to multiple formats",
      ],
      cta: {
        text: "Upgrade to Premium",
        onClick: () => navigate("/onboarding"),
      },
      popular: true,
    },
    {
      name: "Pro",
      price: "$39",
      description: "For professionals",
      features: [
        "Real-time content updates",
        "Everything in Premium",
        "Advanced analytics dashboard",
        "Custom topic tracking",
        "API access",
        "White-label options",
      ],
      cta: {
        text: "Go Pro",
        onClick: () => navigate("/onboarding"),
      },
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <HeroSection
        subtitle="Transform Information Overload Into Clarity"
        title="Your Personalized Intelligence Feed"
        description="Discover curated health and wellness content from trusted sources. Get AI-powered summaries, transparent quality scores, and stay informed with personalized digests."
        primaryCTA={{
          text: "Start Free",
          href: "/onboarding",
        }}
        secondaryCTA={{
          text: "View Demo",
          href: "/discover",
        }}
        stats={[
          { label: "Curated Sources", value: "500+" },
          { label: "Items This Week", value: "950+" },
        ]}
      />


      <FeatureSection
        title="Features"
        subtitle="Everything You Need to Stay Informed"
        description="Powerful features designed to help you discover, understand, and track the content that matters most."
        features={features}
      />

      {/* Pricing Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="mb-2 block text-sm font-semibold text-primary uppercase tracking-wide">
              Pricing
            </span>
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
              Choose Your Plan
            </h2>
            <p className="text-base text-muted-foreground">
              Start free and upgrade as you grow. All plans include AI-powered summaries and quality scoring.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
          </div>
        </div>
      </section>

      <FAQSection
        title="FAQ"
        subtitle="Frequently Asked Questions"
        description="Everything you need to know about Lucid Feed. Can't find the answer you're looking for? Contact our support team."
        faqs={faqs}
      />

      {/* Final CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Ready to Transform Your Content Discovery?
          </h2>
          <p className="mb-8 text-lg opacity-90 max-w-2xl mx-auto">
            Start curating your personalized feed today and stay informed with AI-powered insights.
          </p>
          <button
            onClick={() => navigate("/onboarding")}
            className="inline-flex items-center justify-center rounded-md bg-background px-8 py-3 text-lg font-medium text-primary hover-elevate active-elevate-2"
            data-testid="cta-get-started"
          >
            Get Started Free
          </button>
        </div>
      </section>
    </div>
  );
}
