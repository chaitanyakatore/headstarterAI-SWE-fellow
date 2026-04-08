import profile from "@/data/profile.json";

export default function Experience() {
  return (
    <section id="experience" className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
      <div className="bg-purple-accent/5 rounded-2xl p-8 sm:p-12 relative overflow-hidden">
        
        <h2 className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-8">
          Previously... <span className="font-mono text-purple-accent/60 ml-2 font-normal">/ 以前</span>
        </h2>

        <div className="flex flex-col gap-12">
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                 AI/SWE Fellow
              </h3>
              <p className="text-neutral-500 text-sm mb-4">
                 Headstarter AI
              </p>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Building 5+ AI applications and APIs using Next.js, OpenAI, Pinecone, and Stripe under the guidance of YC-backed founders.
              </p>
            </div>

             <div className="flex-1">
              <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                 Bachelor of Engineering
              </h3>
              <p className="text-neutral-500 text-sm mb-4">
                 Information Technology
              </p>
              <p className="text-neutral-600 text-sm leading-relaxed">
                University of Mumbai, Don Bosco Institute of Technology. Graduating in 2026.
              </p>
            </div>
          </div>
          
          <div className="mt-4 border-l-2 border-purple-accent/30 pl-6 py-2">
            <p className="italic font-serif text-neutral-600 text-base sm:text-lg mb-3">
              "Chaitanya consistently demonstrated a strong ability to architect robust full-stack solutions and delivered high-quality code ahead of schedule."
            </p>
            <p className="text-sm font-semibold text-neutral-900">— Software Engineering Peer, Headstarter AI</p>
          </div>
        </div>
      </div>
    </section>
  );
}
