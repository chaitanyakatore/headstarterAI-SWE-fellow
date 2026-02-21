"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "Greenleaf Overseas completely streamlined our supply chain. Their team navigated complex customs regulations flawlessly, saving us weeks of delay.",
    name: "Sarah Jenkins",
    title: "Operations Director, TechFlow Ltd.",
  },
  {
    quote:
      "From ocean freight to secure warehousing, the level of transparency and reliability they offer is unmatched in the global logistics industry.",
    name: "Michael Chen",
    title: "CEO, Global Imports Co.",
  },
  {
    quote:
      "A truly reliable partner for our cross-border expansions. Expanding into European markets felt effortless thanks to their expert guidance.",
    name: "Elena Rodriguez",
    title: "Head of Supply Chain, Vertex Retail",
  },
  {
    quote:
      "Their 24/7 support means I never have to worry about where my shipments are. A stellar team of import/export professionals.",
    name: "David Smith",
    title: "Founder, Peak Performance Gear",
  },
  {
    quote:
      "Cost-effective, secure, and incredibly fast. The transition from our previous freight forwarder to Greenleaf was seamless and profitable.",
    name: "Amara Okonjo",
    title: "Managing Partner, AfroEuro Trade",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-background overflow-hidden border-t border-border">
      <div className="container px-4 md:px-6 mx-auto mb-12 text-center">
        <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
          Trusted Worldwide
        </div>
        <h2 className="text-3xl font-bold tracking-tighter md:text-5xl">
          What Our Partners Say
        </h2>
        <p className="max-w-[800px] text-muted-foreground md:text-xl mx-auto mt-4">
          We build lasting relationships based on trust, efficiency, and proven results across continents.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center relative w-full pt-8">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="normal"
        />
      </div>
    </section>
  );
}
