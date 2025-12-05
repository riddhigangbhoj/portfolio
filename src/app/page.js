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

      {/* Projects Section */}
      <main className="pt-24 px-4">
        <section id="projects" className="max-w-6xl mx-auto pt-4 pb-20">
          <h3 className="text-2xl font-semibold mb-8 text-black">
            Projects
          </h3>
          <div className="flex flex-col md:flex-row gap-8">
            {/* Projects Column - Left Side */}
            <div className="md:w-1/2 space-y-6">
              {/* Project 1 */}
              <div className="border border-light-gray rounded-lg p-6 hover:shadow-lg hover:shadow-soft-pink/10 transition-all duration-300 bg-light-gray/50 hover:border-soft-pink/30">
                <h4 className="text-lg font-semibold mb-2 text-black">Google Summer of Code Project</h4>
                <p className="text-gray mb-4 text-sm">
                  Built an automated regression data comparison system for TARDIS that fetches commits, creates isolated conda environments, runs pytest suites, and generates visual comparison matrices to track how HDF files change across commits.
                </p>
                <div className="flex flex-wrap gap-2 mb-6 min-h-[2rem]">
                  <span className="px-3 py-1 bg-soft-pink/20 text-muted-pink rounded-full text-xs font-medium border border-soft-pink/40">Open Source</span>
                  <span className="px-3 py-1 bg-soft-pink/20 text-muted-pink rounded-full text-xs font-medium border border-soft-pink/40">Python</span>
                  <span className="px-3 py-1 bg-soft-pink/20 text-muted-pink rounded-full text-xs font-medium border border-soft-pink/40">Git</span>
                </div>
                <div className="flex items-center gap-3 text-sm mt-auto">
                  <a href="/gsoc-project" className="text-muted-pink hover:text-muted-pink/80 font-medium transition-colors">View Project</a>
                  <span className="text-gray-400">|</span>
                  <a href="https://github.com/tardis-sn/tardisbase/pull/21" target="_blank" rel="noopener noreferrer" className="text-muted-pink hover:text-muted-pink/80 font-medium transition-colors">GitHub</a>
                </div>
              </div>

              {/* Project 2 */}
              <div className="border border-light-gray rounded-lg p-6 hover:shadow-lg hover:shadow-soft-pink/10 transition-all duration-300 bg-light-gray/50 hover:border-soft-pink/30">
                <h4 className="text-lg font-semibold mb-2 text-black">Pair Programming</h4>
                <p className="text-gray mb-4 text-sm">
                  A real-time pair-programming web application using FastAPI with WebSocket synchronization for collaborative code editing, where multiple users can see changes instantly. The application features a modular architecture with separate backend and frontend files.
                </p>
                <div className="flex flex-wrap gap-2 mb-6 min-h-[2rem]">
                  <span className="px-3 py-1 bg-soft-pink/20 text-muted-pink rounded-full text-xs font-medium border border-soft-pink/40">HTML</span>
                  <span className="px-3 py-1 bg-soft-pink/20 text-muted-pink rounded-full text-xs font-medium border border-soft-pink/40">CSS</span>
                  <span className="px-3 py-1 bg-soft-pink/20 text-muted-pink rounded-full text-xs font-medium border border-soft-pink/40">JavaScript</span>
                  <span className="px-3 py-1 bg-soft-pink/20 text-muted-pink rounded-full text-xs font-medium border border-soft-pink/40">FastAPI</span>
                  <span className="px-3 py-1 bg-soft-pink/20 text-muted-pink rounded-full text-xs font-medium border border-soft-pink/40">WebSocket</span>
                  <span className="px-3 py-1 bg-soft-pink/20 text-muted-pink rounded-full text-xs font-medium border border-soft-pink/40">Python</span>
                </div>
                <div className="flex items-center gap-3 text-sm mt-auto">
                  <a href="https://pairprogramming.riddhigangbhoj.com" target="_blank" rel="noopener noreferrer" className="text-muted-pink hover:text-muted-pink/80 font-medium transition-colors">View Project</a>
                  <span className="text-gray-400">|</span>
                  <a href="https://github.com/riddhigangbhoj/PairProgramming" target="_blank" rel="noopener noreferrer" className="text-muted-pink hover:text-muted-pink/80 font-medium transition-colors">GitHub</a>
                </div>
              </div>

              {/* Project 3 */}
              <div className="border border-light-gray rounded-lg p-6 hover:shadow-lg hover:shadow-soft-pink/10 transition-all duration-300 bg-light-gray/50 hover:border-soft-pink/30">
                <h4 className="text-lg font-semibold mb-2 text-black">Project 3</h4>
                <p className="text-gray mb-4 text-sm">
                  Description of your third project goes here. Add details about what you built, technologies used, and impact.
                </p>
                <div className="flex flex-wrap gap-2 mb-6 min-h-[2rem]">
                  <span className="px-3 py-1 bg-soft-pink/20 text-muted-pink rounded-full text-xs font-medium border border-soft-pink/40">Technology 1</span>
                  <span className="px-3 py-1 bg-soft-pink/20 text-muted-pink rounded-full text-xs font-medium border border-soft-pink/40">Technology 2</span>
                  <span className="px-3 py-1 bg-soft-pink/20 text-muted-pink rounded-full text-xs font-medium border border-soft-pink/40">Technology 3</span>
                  <span className="px-3 py-1 bg-soft-pink/20 text-muted-pink rounded-full text-xs font-medium border border-soft-pink/40">Technology 4</span>
                </div>
                <div className="flex items-center gap-3 text-sm mt-auto">
                  <a href="#" className="text-muted-pink hover:text-muted-pink/80 font-medium transition-colors">View Project</a>
                  <span className="text-gray-400">|</span>
                  <a href="https://github.com/yourusername/project3" target="_blank" rel="noopener noreferrer" className="text-muted-pink hover:text-muted-pink/80 font-medium transition-colors">GitHub</a>
                </div>
              </div>
            </div>

            {/* Photo Column - Right Side */}
            <div className="md:w-1/2 flex justify-center items-start">
              <Image
                src="/riddhiphoto.jpg"
                alt="Profile picture"
                width={400}
                height={400}
                className="shadow-lg hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
