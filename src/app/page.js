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
                href={item === "Home" ? "#" : item === "Resume" ? "/resume" : `#${item.toLowerCase()}`}
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

          {/* Tech Projects - 2x2 grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">

            {/* GSoC */}
            <div className="border border-light-gray rounded-lg p-6 hover:shadow-lg hover:shadow-soft-pink/10 transition-all duration-300 bg-light-gray/50 hover:border-soft-pink/30 flex flex-col">
              <div className="flex items-center gap-3 text-sm mb-4">
                <a href="/gsoc-project" className="text-gray-400 hover:text-gray-600 font-medium transition-colors">View Project</a>
                <span className="text-gray-300">|</span>
                <a href="https://github.com/tardis-sn/tardisbase/pull/21" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 font-medium transition-colors">GitHub</a>
              </div>
              <h4 className="text-lg font-semibold mb-2 text-black">Google Summer of Code Project</h4>
              <p className="text-gray mb-4 text-sm flex-1">
                Built an automated regression data comparison system for TARDIS that fetches commits, creates isolated conda environments, runs pytest suites, and generates visual comparison matrices to track how HDF files change across commits.
              </p>
              <div className="flex flex-wrap gap-2 min-h-[2rem]">
                <span className="px-3 py-1 bg-soft-pink/20 text-muted-pink rounded-full text-xs font-medium border border-soft-pink/40">Python</span>
                <span className="px-3 py-1 bg-soft-pink/20 text-muted-pink rounded-full text-xs font-medium border border-soft-pink/40">HDF5</span>
                <span className="px-3 py-1 bg-soft-pink/20 text-muted-pink rounded-full text-xs font-medium border border-soft-pink/40">Git/Git LFS</span>
                <span className="px-3 py-1 bg-soft-pink/20 text-muted-pink rounded-full text-xs font-medium border border-soft-pink/40">Pytest</span>
                <span className="px-3 py-1 bg-soft-pink/20 text-muted-pink rounded-full text-xs font-medium border border-soft-pink/40">CI/CD</span>
                <span className="px-3 py-1 bg-soft-pink/20 text-muted-pink rounded-full text-xs font-medium border border-soft-pink/40">Pandas/NumPy</span>
              </div>
            </div>

            {/* Themis */}
            <div className="border border-light-gray rounded-lg p-6 hover:shadow-lg hover:shadow-soft-pink/10 transition-all duration-300 bg-light-gray/50 hover:border-soft-pink/30 flex flex-col">
              <div className="flex items-center gap-3 text-sm mb-4">
                <a href="#" className="text-gray-400 hover:text-gray-600 font-medium transition-colors">View Project</a>
                <span className="text-gray-300">|</span>
                <a href="https://github.com/riddhigangbhoj/Themis" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 font-medium transition-colors">GitHub</a>
              </div>
              <h4 className="text-lg font-semibold mb-2 text-black">Themis</h4>
              <p className="text-gray mb-4 text-sm flex-1">
                An AI legal research platform that uses multi-agent orchestration to analyze 380,000+ Indian court judgments. A Planner Agent coordinates parallel Base Agents equipped with semantic search, SQL queries, PDF extraction, and sandboxed file access to retrieve evidence-grounded case precedents, judge patterns, and outcome predictions.
              </p>
              <div className="flex flex-wrap gap-2 min-h-[2rem]">
                <span className="px-3 py-1 bg-soft-pink/20 text-muted-pink rounded-full text-xs font-medium border border-soft-pink/40">Python</span>
                <span className="px-3 py-1 bg-soft-pink/20 text-muted-pink rounded-full text-xs font-medium border border-soft-pink/40">ChromaDB</span>
                <span className="px-3 py-1 bg-soft-pink/20 text-muted-pink rounded-full text-xs font-medium border border-soft-pink/40">DuckDB</span>
                <span className="px-3 py-1 bg-soft-pink/20 text-muted-pink rounded-full text-xs font-medium border border-soft-pink/40">AWS S3</span>
                <span className="px-3 py-1 bg-soft-pink/20 text-muted-pink rounded-full text-xs font-medium border border-soft-pink/40">PyMuPDF</span>
                <span className="px-3 py-1 bg-soft-pink/20 text-muted-pink rounded-full text-xs font-medium border border-soft-pink/40">Claude Sonnet 4</span>
              </div>
            </div>

            {/* Pair Programming */}
            <div className="border border-light-gray rounded-lg p-6 hover:shadow-lg hover:shadow-soft-pink/10 transition-all duration-300 bg-light-gray/50 hover:border-soft-pink/30 flex flex-col">
              <div className="flex items-center gap-3 text-sm mb-4">
                <a href="https://pairprogramming.riddhigangbhoj.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 font-medium transition-colors">View Project</a>
                <span className="text-gray-300">|</span>
                <a href="https://github.com/riddhigangbhoj/PairProgramming" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 font-medium transition-colors">GitHub</a>
              </div>
              <h4 className="text-lg font-semibold mb-2 text-black">Pair Programming</h4>
              <p className="text-gray mb-4 text-sm flex-1">
                A real-time pair-programming web application using FastAPI with WebSocket synchronization for collaborative code editing, where multiple users can see changes instantly. The application features a modular architecture with separate backend and frontend files.
              </p>
              <div className="flex flex-wrap gap-2 min-h-[2rem]">
                <span className="px-3 py-1 bg-soft-pink/20 text-muted-pink rounded-full text-xs font-medium border border-soft-pink/40">Python + FastAPI</span>
                <span className="px-3 py-1 bg-soft-pink/20 text-muted-pink rounded-full text-xs font-medium border border-soft-pink/40">WebSocket</span>
                <span className="px-3 py-1 bg-soft-pink/20 text-muted-pink rounded-full text-xs font-medium border border-soft-pink/40">React 18 + TypeScript</span>
                <span className="px-3 py-1 bg-soft-pink/20 text-muted-pink rounded-full text-xs font-medium border border-soft-pink/40">RESTful API design</span>
                <span className="px-3 py-1 bg-soft-pink/20 text-muted-pink rounded-full text-xs font-medium border border-soft-pink/40">Railway deployment</span>
              </div>
            </div>

            {/* Paper Swipe */}
            <div className="border border-light-gray rounded-lg p-6 hover:shadow-lg hover:shadow-soft-pink/10 transition-all duration-300 bg-light-gray/50 hover:border-soft-pink/30 flex flex-col">
              <div className="flex items-center gap-3 text-sm mb-4">
                <a href="https://paperswipe.riddhigangbhoj.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 font-medium transition-colors">View Project</a>
                <span className="text-gray-300">|</span>
                <a href="https://github.com/riddhigangbhoj/PaperSwipe" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 font-medium transition-colors">GitHub</a>
              </div>
              <h4 className="text-lg font-semibold mb-2 text-black">Paper Swipe</h4>
              <p className="text-gray mb-4 text-sm flex-1">
                A Tinder-style web app for discovering and saving academic research papers from arXiv through swipe gestures.
              </p>
              <div className="flex flex-wrap gap-2 min-h-[2rem]">
                <span className="px-3 py-1 bg-soft-pink/20 text-muted-pink rounded-full text-xs font-medium border border-soft-pink/40">React</span>
                <span className="px-3 py-1 bg-soft-pink/20 text-muted-pink rounded-full text-xs font-medium border border-soft-pink/40">Tailwind CSS</span>
                <span className="px-3 py-1 bg-soft-pink/20 text-muted-pink rounded-full text-xs font-medium border border-soft-pink/40">FastAPI</span>
                <span className="px-3 py-1 bg-soft-pink/20 text-muted-pink rounded-full text-xs font-medium border border-soft-pink/40">arXiv API</span>
                <span className="px-3 py-1 bg-soft-pink/20 text-muted-pink rounded-full text-xs font-medium border border-soft-pink/40">Supabase</span>
              </div>
            </div>

          </div>

          {/* Product Management Projects */}
          <h3 className="text-2xl font-semibold mb-8 text-black">
            Product Management Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">

            {/* PM Project 1 */}
            <div className="border border-light-gray rounded-lg p-6 hover:shadow-lg hover:shadow-soft-pink/10 transition-all duration-300 bg-light-gray/50 hover:border-soft-pink/30 flex flex-col">
              <div className="flex items-center gap-3 text-sm mb-4">
                <a href="/NL_WhatsApp.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 font-medium transition-colors">View Project</a>
              </div>
              <h4 className="text-lg font-semibold mb-2 text-black">Updating Search in WhatsApp</h4>
              <p className="text-gray text-sm flex-1">
                Coming soon.
              </p>
            </div>

            {/* PM Project 2 */}
            <div className="border border-light-gray rounded-lg p-6 hover:shadow-lg hover:shadow-soft-pink/10 transition-all duration-300 bg-light-gray/50 hover:border-soft-pink/30 flex flex-col">
              <div className="flex items-center gap-3 text-sm mb-4">
                <a href="#" className="text-gray-400 hover:text-gray-600 font-medium transition-colors">View Project</a>
              </div>
              <h4 className="text-lg font-semibold mb-2 text-black">Project 2</h4>
              <p className="text-gray text-sm flex-1">
                Coming soon.
              </p>
            </div>

          </div>

          {/* Photo - left aligned, reduced size */}
          <div className="flex justify-start">
            <Image
              src="/riddhiphoto.jpg"
              alt="Profile picture"
              width={200}
              height={200}
              className="shadow-lg hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
        </section>
      </main>
    </div>
  );
}
