import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm border-b border-light-gray p-4 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-lg font-semibold text-black animate-fadeIn">
            Riddhi Gangbhoj
          </h1>
          
          <div className="flex gap-6">
            {["Home", "About", "Projects", "Resume"].map((item, index) => (
              <a
                key={item}
                href={item === "Home" ? "#" : item === "Resume" ? "/resume.pdf" : `#${item.toLowerCase()}`}
                className="hover:text-muted-pink transition-colors relative group animate-slideDown text-sm text-black"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-muted-pink group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-20 px-4">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between py-20 gap-8">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl font-semibold text-black">
              Hi, I'm Riddhi Gangbhoj
            </h2>
            
            
            <div className="flex gap-4">
              <a 
                href="#projects" 
                className="bg-muted-pink text-white px-5 py-2 rounded-full hover:bg-muted-pink/90 transition-colors text-sm font-medium"
              >
                View Projects
              </a>
              <a 
                href="/resume.pdf" 
                className="border border-muted-pink text-muted-pink px-5 py-2 rounded-full hover:bg-soft-pink/30 transition-colors text-sm font-medium"
              >
                Download Resume
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/riddhiphoto.jpg"
              alt="Profile picture"
              width={300}
              height={300}
              className="rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
        </div>

        {/* Projects Section */}
        <section id="projects" className="max-w-6xl mx-auto py-20">
          <h3 className="text-2xl font-semibold mb-8 text-black">
            Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="border border-light-gray rounded-lg p-6 hover:shadow-lg hover:shadow-soft-pink/10 transition-all duration-300 bg-light-gray/50 hover:border-soft-pink/30">
              <h4 className="text-lg font-semibold mb-2 text-black">GSoC Project</h4>
              <p className="text-gray mb-4 text-sm">
                Google Summer of Code project focusing on open source development. 
                Contributed to improving software tools and collaborated with mentors from the open source community.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-soft-pink/20 text-muted-pink rounded-full text-xs font-medium border border-soft-pink/40">Open Source</span>
                <span className="px-3 py-1 bg-soft-pink/20 text-muted-pink rounded-full text-xs font-medium border border-soft-pink/40">Python</span>
                <span className="px-3 py-1 bg-soft-pink/20 text-muted-pink rounded-full text-xs font-medium border border-soft-pink/40">Git</span>
              </div>
              <a href="/gsoc-project" className="text-muted-pink hover:text-muted-pink/80 hover:underline text-sm font-medium transition-colors">View Project →</a>
            </div>

          </div>
        </section>
      </main>
    </div>
  );
}
