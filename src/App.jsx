import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="App relative">
      {/* Animated Background */}
      <div className="animated-bg" />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />

        {/* About Section - Brief overview */}
        <section id="about" className="py-20 px-4">
          <div className="max-w-4xl mx-auto glass-card p-12">
            <h2 className="section-title text-center mb-8">About Me</h2>
            <div className="text-gray-300 text-lg leading-relaxed space-y-4">
              <p>
                As a <span className="text-cyan-400 font-semibold">Software Developer</span> with over 6 years of experience,
                I specialize in building scalable web applications and integrating AI solutions to solve real-world problems.
              </p>
              <p>
                My expertise spans across <span className="text-purple-400 font-semibold">Full-Stack Development</span> and <span className="text-blue-400 font-semibold">AI Integration</span>,
                with a strong focus on creating seamless user experiences and robust backend systems using React, Node.js, and Java/Spring Boot.
              </p>
              <p>
                As a recent Master's graduate, I am focused on leveraging Large Language Models (LLMs) and RAG architectures to build intelligent agents that can understand and interact with complex data.
                I'm passionate about bridging the gap between traditional software engineering and modern AI capabilities.
              </p>
              <p className="text-cyan-400 italic">
                "Building the future of web applications with AI-driven intelligence."
              </p>
            </div>
          </div>
        </section>

        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
