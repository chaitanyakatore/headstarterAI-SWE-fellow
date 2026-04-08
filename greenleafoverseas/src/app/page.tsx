import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { TrustedBy } from "@/components/TrustedBy";
import { GlobalReach } from "@/components/GlobalReach";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <TrustedBy />
      <Services />
      <GlobalReach />
      <Testimonials />
      <Contact />
    </main>
  );
}
