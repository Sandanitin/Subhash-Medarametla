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
                As a <span className="text-cyan-400 font-semibold">Software Developer</span> with <span className="text-cyan-400 font-semibold">5+ years</span> of experience across Telecom (T-Mobile), Banking, and E-commerce domains,
                I specialize in building scalable web applications and integrating AI solutions to solve real-world problems.
              </p>
              <p>
                My expertise spans across <span className="text-purple-400 font-semibold">Full-Stack Development</span> with proficiency in <span className="text-purple-400 font-semibold">JavaScript, React, Python, and Java</span>,
                focused on creating responsive, user-focused frontend applications, plus backend experience in <span className="text-blue-400 font-semibold">Node.js and Java/Spring Boot</span> to build and update REST APIs.
              </p>
              <p>
                I'm skilled with cloud platforms <span className="text-green-400 font-semibold">AWS and GCP</span>, experienced with CI/CD pipelines, and proficient with databases including <span className="text-yellow-400 font-semibold">PostgreSQL and MongoDB</span>.
              </p>
              <p>
                During my recent <span className="text-pink-400 font-semibold">Master's at Saint Louis University</span>, I focused on AI and built projects using <span className="text-cyan-400 font-semibold">OpenAI, embeddings, and RAG</span> to connect LLMs to real data safely.
                I'm passionate about bridging the gap between traditional software engineering and modern AI capabilities.
              </p>
              <p className="text-cyan-400 italic text-center mt-6 text-xl">
                "Looking for a full-stack role building end-to-end features with a practical AI edge."
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
