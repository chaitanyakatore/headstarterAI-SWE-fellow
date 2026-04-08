"use client";

import { useState } from "react";
import projects from "@/data/projects.json";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
      <div className="bg-purple-accent/5 rounded-2xl p-8 sm:p-12 relative overflow-hidden">
        <h2 className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-8">
          Here are my projects <span className="font-mono text-purple-accent/60 ml-2 font-normal">/ プロジェクト</span>
        </h2>
        
        <div className="flex flex-col gap-12 sm:gap-16">
          {displayedProjects.map((project, idx) => (
            <div key={idx} className="flex gap-6 group">
              {/* Minimal SVG Icon Placeholder */}
               <div className="hidden sm:flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100/80 mt-1 flex-shrink-0 group-hover:bg-purple-accent/10 transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-500 group-hover:text-purple-accent transition-colors">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              
              <div className="flex flex-col flex-1">
                <div className="flex items-baseline flex-wrap gap-3 mb-2">
                  <h3 className="text-xl font-semibold text-neutral-900">
                    {project.title}
                  </h3>
                  {project.type === "Open Source" ? (
                    <span className="inline-block px-3 py-1 rounded-full bg-purple-accent/10 border border-purple-accent/20 text-xs font-semibold tracking-wider uppercase text-purple-accent shadow-sm">
                      Open Source / オープンソース
                    </span>
                  ) : (
                    <span className="hidden sm:inline-block text-sm text-neutral-400">
                      {project.type}
                    </span>
                  )}
                </div>
                
                <p className="text-neutral-600 leading-relaxed mb-4 max-w-2xl text-base sm:text-lg">
                  {project.description}
                </p>
                
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-purple-accent font-medium hover:underline underline-offset-4 w-max transition-all"
                >
                  View project &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>

        {projects.length > 3 && (
          <div className="mt-12 flex justify-center border-t border-purple-accent/10 pt-8">
            <button 
              onClick={() => setShowAll(!showAll)}
              className="text-sm font-bold text-purple-accent hover:text-rose-700 transition-colors uppercase tracking-widest flex items-center gap-2"
            >
              {showAll ? "Show Less" : "Archive"} <span className="font-mono text-[10px] opacity-70">/ {showAll ? "少なく表示" : "さらに表示"}</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
