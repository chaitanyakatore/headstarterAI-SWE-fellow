import profile from "@/data/profile.json";

export default function Footer() {
  return (
    <footer className="mt-12 sm:mt-24 border-t border-neutral-100 pt-16 pb-8 flex flex-col gap-16 animate-in fade-in duration-1000 delay-700">
      
      {/* CTA Section */}
      <div className="text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900">Let's build something great.</h2>
        <p className="text-neutral-500 text-base sm:text-lg max-w-md mx-auto">
          I'm currently looking for new opportunities. Whether it's a full-time role, a freelance project, or just a chat about tech—my inbox is open.
        </p>
        <a 
          href={`mailto:${profile.email}`} 
          className="inline-block bg-neutral-900 text-white font-medium px-8 py-3 rounded-full hover:bg-neutral-800 transition-colors shadow-sm"
        >
          Say Hello
        </a>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-neutral-50">
        <div className="text-neutral-500 text-sm">
          © {new Date().getFullYear()} Chaitanya Katore. All rights reserved.
        </div>
        
        <div className="flex space-x-6">
          {profile.socials.map((social, idx) => (
            <a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-purple-accent transition-colors text-sm font-medium"
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
