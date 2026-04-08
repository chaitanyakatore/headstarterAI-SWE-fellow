import profile from "@/data/profile.json";

export default function About() {
  return (
    <section id="about" className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
       <div className="bg-purple-accent/5 rounded-2xl p-8 sm:p-12 relative overflow-hidden">
        
        <h2 className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-8">
          A bit about me <span className="font-mono text-purple-accent/60 ml-2 font-normal">/ 自己紹介</span>
        </h2>

        <div className="space-y-12">
           <div>
            <h3 className="text-lg font-semibold text-neutral-900 mb-3">
              Who are you?
            </h3>
            <p className="text-neutral-600 text-sm sm:text-base leading-loose italic font-serif">
               {profile.about}
            </p>
          </div>

           <div>
            <h3 className="text-lg font-semibold text-neutral-900 mb-3">
              What kind of work do you do?
            </h3>
            <p className="text-neutral-600 text-sm sm:text-base leading-loose italic font-serif">
              I specialize in full-stack development. I enjoy building applications with <span className="text-purple-accent font-sans not-italic font-medium">React, Next.js, and TypeScript</span>, and designing scalable backends using <span className="text-purple-accent font-sans not-italic font-medium">Node.js and modern databases.</span>
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-neutral-900 mb-4 flex items-center gap-2">
              Technical Arsenal <span className="text-sm font-mono text-purple-accent/60 font-normal">武器</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {Object.entries(profile.skills).map(([category, items]) => (
                <div key={category}>
                  <h4 className="text-sm font-medium text-neutral-800 mb-1">{category}</h4>
                  <p className="text-neutral-500 text-sm font-mono leading-relaxed">
                    {items.join(" / ")}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
