import profile from "@/data/profile.json";

export default function Hero() {
  return (
    <section id="hero" className="flex flex-col justify-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
      <h1 className="text-4xl sm:text-5xl font-medium tracking-tight mb-6">
        Hello! I&apos;m <span className="bg-gradient-to-r from-red-600 via-rose-500 to-amber-500 bg-clip-text text-transparent">{profile.name.split(' ')[0]}</span><span className="text-purple-accent">.</span>
      </h1>
      
      <div className="text-neutral-500 font-medium leading-relaxed max-w-xl text-lg sm:text-xl">
        <p className="mb-2">
          {profile.headline.split('|')[0].trim()}
        </p>
        <p className="text-neutral-400 text-base">
          {profile.headline.split('|')[1]?.trim()}
        </p>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:items-center w-full">
        <a 
          href="/resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-purple-accent text-white font-medium px-6 py-2.5 rounded-full hover:bg-rose-700 transition-colors shadow-md shadow-purple-accent/20 w-full sm:w-auto"
        >
          View Resume <span className="font-mono text-[10px] opacity-70">/ 履歴書</span>
        </a>
        
        <div className="flex gap-3 w-full sm:w-auto">
          {profile.socials.map((social, idx) => (
            <a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-neutral-800 hover:text-purple-accent transition-colors duration-200 border border-neutral-200 rounded-full px-5 py-2.5 shadow-sm bg-white hover:border-purple-accent/30 flex items-center justify-center flex-1 sm:flex-none"
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
