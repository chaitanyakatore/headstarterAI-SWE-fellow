"use client";

import { useState } from "react";
import blogs from "@/data/blogs.json";

export default function BlogsAndPersonal() {
  const [showAll, setShowAll] = useState(false);
  const displayedBlogs = showAll ? blogs : blogs.slice(0, 3);

  return (
    <section id="blogs-personal" className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
      
      <div className="bg-purple-accent/5 rounded-2xl p-8 sm:p-12 relative overflow-hidden">
        <h2 className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-6 flex items-center">
          Writing & Thoughts <span className="font-mono text-purple-accent/60 ml-2 font-normal">/ 思考</span>
        </h2>
        
        <div className="flex flex-col gap-6 sm:gap-8 border-l border-neutral-100 pl-4 sm:pl-6">
          {displayedBlogs.map((blog, idx) => (
            <div key={idx} className="group relative">
               {/* Hover line indicator */}
              <div className="absolute -left-[17px] sm:-left-[25px] top-0 h-full w-[2px] bg-purple-accent/0 group-hover:bg-purple-accent/100 transition-colors duration-300"></div>

              <div className="flex flex-col">
                <div className="flex items-center gap-3 mb-1">
                  <a href={blog.link} target="_blank" rel="noopener noreferrer" className="font-medium group-hover:text-purple-accent transition-colors text-base sm:text-lg text-neutral-800">
                    {blog.title}
                  </a>
                  <span className="text-xs text-neutral-400">
                    {blog.date}
                  </span>
                </div>
                
                <p className="text-neutral-500 leading-relaxed max-w-2xl text-sm sm:text-base">
                  {blog.snippet}
                </p>
              </div>
            </div>
          ))}
        </div>

        {blogs.length > 3 && (
          <div className="mt-12 flex justify-center border-t border-purple-accent/10 pt-8">
            <button 
              onClick={() => setShowAll(!showAll)}
              className="text-sm font-bold text-purple-accent hover:text-rose-700 transition-colors uppercase tracking-widest flex items-center gap-2"
            >
              {showAll ? "Collapse" : "Read More"} <span className="font-mono text-[10px] opacity-70">/ {showAll ? "閉じる" : "さらに読む"}</span>
            </button>
          </div>
        )}
      </div>

    </section>
  );
}
