import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import BlogsAndPersonal from "@/components/BlogsAndPersonal";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 sm:px-10 py-16 sm:py-24 flex flex-col gap-16 sm:gap-24">
      <Hero />
      <Experience />
      <Projects />
      <BlogsAndPersonal />
      <About />
      <Footer />
    </main>
  );
}
