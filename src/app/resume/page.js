export default function Resume() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm border-b border-light-gray p-4 z-50">
        <div className="max-w-full mx-auto px-8 flex justify-between items-center">
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

      {/* Resume Content */}
      <main className="pt-24 pb-20 px-8">
        <article className="max-w-full mx-auto">
          {/* Header */}
          <header className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-black mb-4">Riddhi Gangbhoj</h1>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <span>Bengaluru, Karnataka, India</span>
              <span>•</span>
              <a href="mailto:riddhigangbhoj76@gmail.com" className="text-muted-pink hover:underline">riddhigangbhoj76@gmail.com</a>
              <span>•</span>
              <span>+91 8806255882</span>
              <span>•</span>
              <a href="https://riddhigangbhoj.com/" target="_blank" rel="noopener noreferrer" className="text-muted-pink hover:underline">riddhigangbhoj.com</a>
            </div>
          </header>

          {/* Education Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-black mb-6 pb-2 border-b-2 border-soft-pink">Education</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold text-black">Shri Ramdeobaba College of Engineering and Management</h3>
                    <p className="text-gray-600">Bachelor of Engineering (BE) Electronics and Communication Engineering</p>
                  </div>
                  <span className="text-sm text-gray-500 whitespace-nowrap ml-4">Nagpur, Maharashtra</span>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-600">GPA: 7.4/10.0</p>
                  <p className="text-sm text-gray-500">Jul 2019 - Jun 2023</p>
                </div>
              </div>
            </div>
          </section>

          {/* Work Experience Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-black mb-6 pb-2 border-b-2 border-soft-pink">Work Experience</h2>

            <div className="space-y-8">
              {/* TARDIS */}
              <div>
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-black">TARDIS (Open-Source Scientific Computing)</h3>
                    <p className="text-muted-pink font-medium">Software Developer | Google Summer of Code</p>
                  </div>
                  <div className="text-right text-sm text-gray-500 whitespace-nowrap ml-4">
                    <p>Remote</p>
                    <p>Jun 2025 - Sept 2025</p>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li className="text-sm leading-relaxed">Designed automated Python script supporting both sequential n-commit fetching and custom commit list processing from Git repositories</li>
                  <li className="text-sm leading-relaxed">Developed isolated conda environment management system for each Git commit using lockfiles for precise dependency version control and pip-based optional dependency installation from pyproject.toml files with automatic fallback mechanisms</li>
                  <li className="text-sm leading-relaxed">Built automated testing pipeline executing Pytest for continuum and non-continuum test suites across multiple commits, automatically committing captured regression data results to repository</li>
                  <li className="text-sm leading-relaxed">Created tabular data visualization system with commit preview functionality displaying hashes, descriptions, and timestamps alongside matrix visualization showing file changes with status indicators and file filtering option (.npy,.h5)</li>
                </ul>
              </div>

              {/* Accenture */}
              <div>
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-black">Accenture</h3>
                    <p className="text-muted-pink font-medium">Packaged App Development Associate</p>
                  </div>
                  <div className="text-right text-sm text-gray-500 whitespace-nowrap ml-4">
                    <p>Pune, Maharashtra</p>
                    <p>Jul 2023 - May 2024</p>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li className="text-sm leading-relaxed">Gained exposure to PL/SQL and Oracle database systems through enterprise training program</li>
                  <li className="text-sm leading-relaxed">Monitored Oracle system integrations and documented integration processes and system configurations</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Technical Skills Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-black mb-6 pb-2 border-b-2 border-soft-pink">Technical Skills</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-black mb-2">Programming & Databases</h3>
                <p className="text-gray-700 text-sm leading-relaxed">Python, JavaScript, PL/SQL, PostgreSQL, Oracle Database, HTML, CSS, FastAPI, Asynchronous Programming</p>
              </div>
              <div>
                <h3 className="font-semibold text-black mb-2">Tools & Technologies</h3>
                <p className="text-gray-700 text-sm leading-relaxed">Git, GitHub, GitHub Actions, Docker, Pandas, NumPy, pytest, CI/CD, Testing</p>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-black mb-6 pb-2 border-b-2 border-soft-pink">Projects</h2>

            <div className="space-y-6">
              {/* Portfolio Website */}
              <div className="bg-light-gray/30 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-black">Portfolio Website</h3>
                  <a href="https://riddhigangbhoj.com/" target="_blank" rel="noopener noreferrer" className="text-muted-pink hover:underline text-sm">riddhigangbhoj.com →</a>
                </div>
                <p className="text-xs text-gray-600 mb-3">Next.js, React, Tailwind CSS, GitHub Actions</p>
                <p className="text-sm text-gray-700 leading-relaxed">Developed and deployed a responsive personal portfolio website using Next.js 15 and React 19. Implemented mobile-first design with Tailwind CSS, dark mode support. Configured automated CI/CD pipeline with GitHub Actions for continuous deployment to GitHub Pages.</p>
              </div>

              {/* Paper Swipe */}
              <div className="bg-light-gray/30 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-black mb-2">Paper Swipe</h3>
                <p className="text-xs text-gray-600 mb-3">Python, FastAPI, PostgreSQL, REST APIs, Docker, Git, API Integration, Asynchronous Programming, Database Design</p>
                <p className="text-sm text-gray-700 leading-relaxed">Built a research paper recommendation platform using FastAPI and PostgreSQL that aggregates 200M+ papers from ArXiv and Semantic Scholar APIs. Implemented swipe-based UI for paper discovery, designed relational database schema for user interactions, and containerized the application with Docker for streamlined deployment.</p>
              </div>
            </div>
          </section>

          {/* Achievements Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-black mb-6 pb-2 border-b-2 border-soft-pink">Achievements</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-black">Google Summer of Code 2025 Participant</h3>
                  <div className="text-right text-sm text-gray-500 whitespace-nowrap ml-4">
                    <p>Google</p>
                    <p>Jun 2025</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">Selected as one of the participants in Google Summer of Code 2025, working on open-source scientific computing project TARDIS</p>
              </div>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
