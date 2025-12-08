export default function Resume() {
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
                href={item === "Home" ? "/" : item === "Resume" ? "/resume" : `/#${item.toLowerCase()}`}
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

      {/* Hero Section - Full Screen */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-soft-pink/10 pt-20">
        <div className="text-center px-4 animate-fadeIn">
          <h1 className="text-6xl md:text-7xl font-bold text-black mb-6">Riddhi Gangbhoj</h1>
          <p className="text-xl text-gray-600 mb-4">Software Developer | Open Source Contributor</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 mb-8">
            <span>Bengaluru, Karnataka</span>
            <span>•</span>
            <a href="mailto:riddhigangbhoj76@gmail.com" className="text-muted-pink hover:underline">riddhigangbhoj76@gmail.com</a>
            <span>•</span>
            <a href="https://riddhigangbhoj.com/" target="_blank" rel="noopener noreferrer" className="text-muted-pink hover:underline">riddhigangbhoj.com</a>
          </div>
          <div className="animate-bounce mt-12">
            <svg className="w-6 h-6 mx-auto text-muted-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Education Section - Left Aligned */}
      <section className="min-h-screen flex items-center bg-white">
        <div className="w-full grid md:grid-cols-2 gap-0">
          <div className="flex items-center justify-center p-12 md:p-20">
            <div className="max-w-xl">
              <span className="text-muted-pink font-semibold text-sm tracking-wider uppercase mb-4 block">Education</span>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Academic Background</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-black mb-2">Shri Ramdeobaba College of Engineering</h3>
                  <p className="text-muted-pink font-medium mb-2">Bachelor of Engineering - Electronics and Communication</p>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>GPA: 7.4/10.0</span>
                    <span>2019 - 2023</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">Nagpur, Maharashtra</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-soft-pink/20 to-muted-pink/10 flex items-center justify-center p-12">
            <div className="text-9xl font-bold text-muted-pink/10">01</div>
          </div>
        </div>
      </section>

      {/* Work Experience - TARDIS - Right Aligned */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-soft-pink/5 to-white">
        <div className="w-full grid md:grid-cols-2 gap-0">
          <div className="bg-gradient-to-br from-muted-pink/10 to-soft-pink/20 flex items-center justify-center p-12 order-2 md:order-1">
            <div className="text-9xl font-bold text-muted-pink/10">02</div>
          </div>
          <div className="flex items-center justify-center p-12 md:p-20 order-1 md:order-2">
            <div className="max-w-xl">
              <span className="text-muted-pink font-semibold text-sm tracking-wider uppercase mb-4 block">Work Experience</span>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">TARDIS</h2>
              <p className="text-xl text-muted-pink font-medium mb-4">Software Developer | Google Summer of Code</p>
              <p className="text-sm text-gray-600 mb-6">Jun 2025 - Sept 2025 • Remote</p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-muted-pink mt-1">▸</span>
                  <span className="text-sm leading-relaxed">Designed automated Python script supporting both sequential n-commit fetching and custom commit list processing from Git repositories</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-muted-pink mt-1">▸</span>
                  <span className="text-sm leading-relaxed">Developed isolated conda environment management system for each Git commit using lockfiles for precise dependency version control</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-muted-pink mt-1">▸</span>
                  <span className="text-sm leading-relaxed">Built automated testing pipeline executing Pytest for continuum and non-continuum test suites across multiple commits</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-muted-pink mt-1">▸</span>
                  <span className="text-sm leading-relaxed">Created tabular data visualization system with commit preview functionality displaying hashes and timestamps</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience - Accenture - Left Aligned */}
      <section className="min-h-screen flex items-center bg-white">
        <div className="w-full grid md:grid-cols-2 gap-0">
          <div className="flex items-center justify-center p-12 md:p-20">
            <div className="max-w-xl">
              <span className="text-muted-pink font-semibold text-sm tracking-wider uppercase mb-4 block">Work Experience</span>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Accenture</h2>
              <p className="text-xl text-muted-pink font-medium mb-4">Packaged App Development Associate</p>
              <p className="text-sm text-gray-600 mb-6">Jul 2023 - May 2024 • Pune, Maharashtra</p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-muted-pink mt-1">▸</span>
                  <span className="text-sm leading-relaxed">Gained exposure to PL/SQL and Oracle database systems through enterprise training program</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-muted-pink mt-1">▸</span>
                  <span className="text-sm leading-relaxed">Monitored Oracle system integrations and documented integration processes and system configurations</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-gradient-to-br from-soft-pink/20 to-muted-pink/10 flex items-center justify-center p-12">
            <div className="text-9xl font-bold text-muted-pink/10">03</div>
          </div>
        </div>
      </section>

      {/* Technical Skills - Right Aligned */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-soft-pink/5 to-white">
        <div className="w-full grid md:grid-cols-2 gap-0">
          <div className="bg-gradient-to-br from-muted-pink/10 to-soft-pink/20 flex items-center justify-center p-12 order-2 md:order-1">
            <div className="text-9xl font-bold text-muted-pink/10">04</div>
          </div>
          <div className="flex items-center justify-center p-12 md:p-20 order-1 md:order-2">
            <div className="max-w-xl">
              <span className="text-muted-pink font-semibold text-sm tracking-wider uppercase mb-4 block">Technical Skills</span>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">Tech Stack</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-black mb-3">Programming & Databases</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "JavaScript", "PL/SQL", "PostgreSQL", "Oracle DB", "HTML", "CSS", "FastAPI"].map((skill) => (
                      <span key={skill} className="px-4 py-2 bg-soft-pink/30 text-muted-pink rounded-full text-sm font-medium border border-muted-pink/30">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black mb-3">Tools & Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Git", "GitHub", "Docker", "Pandas", "NumPy", "pytest", "CI/CD", "GitHub Actions"].map((skill) => (
                      <span key={skill} className="px-4 py-2 bg-soft-pink/30 text-muted-pink rounded-full text-sm font-medium border border-muted-pink/30">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects - Left Aligned */}
      <section className="min-h-screen flex items-center bg-white">
        <div className="w-full grid md:grid-cols-2 gap-0">
          <div className="flex items-center justify-center p-12 md:p-20">
            <div className="max-w-xl">
              <span className="text-muted-pink font-semibold text-sm tracking-wider uppercase mb-4 block">Projects</span>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">Featured Work</h2>
              <div className="space-y-6">
                {/* Portfolio Website */}
                <div className="border-l-4 border-muted-pink pl-6 py-4 hover:bg-soft-pink/10 transition-all">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-black">Portfolio Website</h3>
                    <a href="https://riddhigangbhoj.com/" target="_blank" rel="noopener noreferrer" className="text-muted-pink hover:underline text-sm whitespace-nowrap ml-4">View →</a>
                  </div>
                  <p className="text-xs text-gray-500 mb-2">Next.js • React • Tailwind CSS • GitHub Actions</p>
                  <p className="text-sm text-gray-700 leading-relaxed">Responsive portfolio with Next.js 15 and React 19. Mobile-first design with automated CI/CD pipeline for continuous deployment to GitHub Pages.</p>
                </div>

                {/* Paper Swipe */}
                <div className="border-l-4 border-muted-pink pl-6 py-4 hover:bg-soft-pink/10 transition-all">
                  <h3 className="text-xl font-semibold text-black mb-2">Paper Swipe</h3>
                  <p className="text-xs text-gray-500 mb-2">Python • FastAPI • PostgreSQL • Docker • REST APIs</p>
                  <p className="text-sm text-gray-700 leading-relaxed">Research paper recommendation platform aggregating 200M+ papers from ArXiv and Semantic Scholar APIs with swipe-based discovery interface.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-soft-pink/20 to-muted-pink/10 flex items-center justify-center p-12">
            <div className="text-9xl font-bold text-muted-pink/10">05</div>
          </div>
        </div>
      </section>

      {/* Achievements - Right Aligned */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-soft-pink/5 to-white">
        <div className="w-full grid md:grid-cols-2 gap-0">
          <div className="bg-gradient-to-br from-muted-pink/10 to-soft-pink/20 flex items-center justify-center p-12 order-2 md:order-1">
            <div className="text-9xl font-bold text-muted-pink/10">06</div>
          </div>
          <div className="flex items-center justify-center p-12 md:p-20 order-1 md:order-2">
            <div className="max-w-xl">
              <span className="text-muted-pink font-semibold text-sm tracking-wider uppercase mb-4 block">Achievements</span>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">Recognition</h2>
              <div className="border-l-4 border-muted-pink pl-6 py-4 bg-soft-pink/10">
                <h3 className="text-2xl font-semibold text-black mb-2">Google Summer of Code 2025</h3>
                <p className="text-muted-pink font-medium mb-2">Participant</p>
                <p className="text-sm text-gray-600 mb-3">Google • Jun 2025</p>
                <p className="text-sm text-gray-700 leading-relaxed">Selected as one of the participants in Google Summer of Code 2025, working on open-source scientific computing project TARDIS</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 text-center">
        <p className="text-sm">© 2025 Riddhi Gangbhoj. All rights reserved.</p>
      </footer>
    </div>
  );
}
