import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white dark:bg-gray-800 shadow-md p-4 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text animate-fadeIn">
            Riddhi Gangbhoj
          </h1>
          
          <div className="flex gap-6">
            {["Home", "About", "Projects", "Resume"].map((item, index) => (
              <a
                key={item}
                href={item === "Home" ? "#" : item === "Resume" ? "/resume.pdf" : `#${item.toLowerCase()}`}
                className="hover:text-blue-600 transition-colors relative group animate-slideDown"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-20 px-4">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between py-20 gap-8">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold text-blue-600">
              Hi, I'm Riddhi Gangbhoj
            </h2>
            
            <p className="text-xl text-gray-600 dark:text-gray-300">
              A passionate developer specialized in web development
            </p>
            
            <div className="flex gap-4">
              <a 
                href="#projects" 
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
              >
                View Projects
              </a>
              <a 
                href="/resume.pdf" 
                className="border border-blue-600 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-50 transition-colors"
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

        {/* About Section */}
        <section id="about" className="max-w-6xl mx-auto py-20">
          <h3 className="text-3xl font-bold mb-8 text-blue-600">
            About Me
          </h3>
          <div className="space-y-6 text-gray-600 dark:text-gray-300">
            <p className="text-lg leading-relaxed">
              My name is Riddhi Gangbhoj, and I'm a skilled full-stack developer with proficiency in React, Node/Next.js, TSX/JSX, SQL, PostgreSQL, Git/GA, and Oracle. I've had 11 months of experience working at Accenture on the Oracle Integration Cloud. I recently built a Sudoku game from scratch and a portfolio website both using React and Next.js and deployed them using GitHub actions.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div>
                <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Technical Skills</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Frontend: React.js, Next.js, HTML5, CSS3, JavaScript</li>
                  <li>Database: MySQL, PostgreSQL</li>
                  <li>Tools: Git, Github Actions, VS Code</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Education</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Bachelor's in Electronics and Communication Engineering</li>
                  
                  
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="max-w-6xl mx-auto py-20">
          <h3 className="text-3xl font-bold mb-8 text-blue-600">
            Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow bg-white dark:bg-gray-800">
              <h4 className="text-xl font-bold mb-2">Sudoku Game</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                A platform built with Next.js and JavaScript. 
                Features include button for difficulty level, get hint, eraser and change game.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Next.js</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">JavaScript</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Github Actions</span>
              </div>
              <a href="#" className="text-blue-600 hover:underline">View Project →</a>
            </div>

          </div>
        </section>
      </main>
    </div>
  );
}
