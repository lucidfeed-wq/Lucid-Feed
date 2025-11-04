import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  faqs: FAQItem[];
}

export function FAQSection({
  title = "FAQ",
  subtitle = "Frequently Asked Questions",
  description,
  faqs,
}: FAQSectionProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="mb-2 block text-sm font-semibold text-primary uppercase tracking-wide">
            {title}
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            {subtitle}
          </h2>
          {description && (
            <p className="text-base text-muted-foreground">
              {description}
            </p>
          )}
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="grid gap-4 md:grid-cols-2 md:gap-6">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: FAQItem) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="rounded-md bg-card p-6 shadow-sm border"
      data-testid="faq-item"
    >
      <button
        className="flex w-full items-start gap-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
        data-testid="faq-button"
      >
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10">
          <ChevronDown
            className={cn(
              "h-5 w-5 text-primary transition-transform duration-200",
              isOpen && "rotate-180"
            )}
          />
        </div>
        <div className="flex-1">
          <h4 className="text-lg font-semibold text-foreground">
            {question}
          </h4>
        </div>
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-200",
          isOpen ? "mt-4 pl-14" : "max-h-0"
        )}
      >
        <p className="text-sm leading-relaxed text-muted-foreground">
          {answer}
        </p>
      </div>
    </div>
  );
}
