import React from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import About from './components/About';

function App() {
  return (
    <div className="bg-background min-h-screen text-gray-900 selection:bg-primary/20 selection:text-primary py-12 md:py-20">
      <main className="max-w-4xl mx-auto px-6 md:px-8">
        <Hero />
        <Experience />
        <Projects />
        <About />
      </main>
    </div>
  );
}

export default App;
