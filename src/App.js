import React, { useState } from 'react';
import logo from './assets/logo.png'; // Make sure you've added your logo to src/assets/logo.png

// Main App Component
export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home setActiveSection={setActiveSection} />;
      case 'about':
        return <About />;
      case 'skills':
        return <Skills />;
      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <Header setActiveSection={setActiveSection} activeSection={activeSection} />
      <main className="container mx-auto px-4 py-8">
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
}

// Header Component with Mobile Menu Logic
const Header = ({ setActiveSection, activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ['home', 'about', 'skills', 'portfolio', 'contact'];

  const handleLinkClick = (item) => {
    setActiveSection(item);
    setIsMenuOpen(false); // Close menu on link click
  };

  return (
    <header className="bg-gray-800 sticky top-0 z-50 shadow-lg">
      <nav className="container mx-auto px-4 py-2 flex justify-between items-center">
        <button onClick={() => handleLinkClick('home')} className="flex items-center space-x-2">
          <img src={logo} alt="Onur Yaman Logo" className="h-12 w-auto" />
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <li key={item}>
              <button
                onClick={() => handleLinkClick(item)}
                className={`capitalize text-lg hover:text-cyan-400 transition-colors duration-300 ${
                  activeSection === item ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-gray-300'
                }`}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? (
              // Close Icon (X)
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger Icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {navItems.map((item) => (
              <li key={item}>
                <button
                  onClick={() => handleLinkClick(item)}
                  className={`capitalize text-lg hover:text-cyan-400 transition-colors duration-300 ${
                    activeSection === item ? 'text-cyan-400' : 'text-gray-300'
                  }`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};


// Home Section
const Home = ({ setActiveSection }) => (
  <section id="home" className="text-center py-20 min-h-[60vh] flex flex-col justify-center items-center">
    <h1 className="text-5xl md:text-6xl font-bold mb-4">Onur Yaman</h1>
    <p className="text-xl text-cyan-400 mb-8">Data Analytics & Software Development</p>
    <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
      Delivering high business value from data and software
    </p>
    <button
      onClick={() => setActiveSection('portfolio')}
      className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 text-lg"
    >
      View My Work
    </button>
  </section>
);

// About Section
const About = () => (
  <section id="about" className="py-20">
    <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
    <div className="max-w-4xl mx-auto text-lg text-gray-300 leading-relaxed">
      <p className="mb-6">
        As a mathematics graduate, my journey into the world of technology is driven by a deep-rooted passion for research and problem-solving. I thrive on transforming complex data into actionable insights and robust software solutions. My background has equipped me with a unique analytical lens, allowing me to design predictive models and build data-centric applications with precision and efficiency.
      </p>
      <p className="mb-6">
        My path has been defined by resilience and a relentless drive to succeed. I am a self-motivated and disciplined professional, confident in my ability to take initiative, make decisive technical choices, and see them through to implementation. I excel at integrating mathematical concepts into scripts and have a strong command of the entire software development lifecycle (SDLC).
      </p>
      <p>
        I am committed to continuous learning and am always eager to master the intricacies of the industry. My goal is to apply my skills in data science and business analytics to help build the future of software.
      </p>
    </div>
  </section>
);

// Skills Section
const Skills = () => {
    const skillCategories = {
        "Languages & Databases": ["C", "C++", "C#/.NET", "Python", "SQL (MySQL, PostgreSQL)", "MATLAB"],
        "Cloud & DevOps": ["AWS", "Azure", "Docker", "Kubernetes", "Git"],
        "Platforms & APIs": ["Windows", "Linux (Ubuntu)", "REST", "gRPC"],
    };

    return (
        <section id="skills" className="py-20">
            <h2 className="text-4xl font-bold text-center mb-12">Technical Skills</h2>
            <div className="max-w-4xl mx-auto">
                {Object.entries(skillCategories).map(([category, skills]) => (
                    <div key={category} className="mb-8">
                        <h3 className="text-2xl text-cyan-400 font-semibold mb-4">{category}</h3>
                        <div className="flex flex-wrap gap-3">
                            {skills.map(skill => (
                                <span key={skill} className="bg-gray-700 text-gray-200 py-2 px-4 rounded-lg">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};


// Portfolio Section
const Portfolio = () => {
  const projects = [
    {
      title: 'Vision with AI',
      description: 'An intelligent, real-time video processing application. Leveraging a sophisticated microservices architecture, it analyzes camera feeds to perform face detection, emotion analysis, and gesture recognition. The system was designed for minimal resource consumption and deployed on Azure using Docker and Kubernetes. A high-performance version utilizing WebRTC over GStreamer is also available. Both are available for live demonstration upon request. This work is designed to serve as both a foundation and an initial approach, providing a clear starting point for future applications.',
      link: 'http://vision.onuryaman.info',
      image: 'https://placehold.co/600x400/1a202c/FFFFFF?text=Vision+AI'
    },
//    {
//      title: 'AI Cover Letter Builder',
//      description: 'As a gift to the community, this tool automates the tedious process of writing cover letters. Powered by a custom AI agent using OpenAI\'s latest model, users can input their key points (even in Turkish) and generate a professionally crafted, tailored cover letter, complete with a final PDF export. It’s a smart assistant to help others advance their careers.',
//      link: process.env.PUBLIC_URL + '/cover_builder_index.html',
//      image: 'https://placehold.co/600x400/1a202c/FFFFFF?text=AI+Writer'
//    },
  ];

  return (
    <section id="portfolio" className="py-20">
      <h2 className="text-4xl font-bold text-center mb-12">My Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-cyan-500/50 transition-shadow duration-300 flex flex-col">
            <img src={project.image} alt={project.title} className="w-full h-56 object-cover" onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/1a202c/FFFFFF?text=Image+Error'; }}/>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline mt-auto"
                >
                  View Project →
                </a>
              ) : (
                 <p className="text-gray-500 mt-auto">Offline Project</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Contact Section
const Contact = () => (
  <section id="contact" className="py-20">
    <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>
    <div className="max-w-lg mx-auto text-center">
      <p className="text-lg text-gray-300 mb-8">
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious team. Feel free to reach out.
      </p>
      <a
        href="mailto:onur.yaman0090@gmail.com"
        className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 text-lg"
      >
        Email Me
      </a>
    </div>
  </section>
);

// Footer Component
const Footer = () => (
  <footer className="bg-gray-800 py-6 mt-12">
    <div className="container mx-auto px-4 text-center text-gray-500">
      <p>&copy; {new Date().getFullYear()} Onur Yaman. All Rights Reserved.</p>
    </div>
  </footer>
);
