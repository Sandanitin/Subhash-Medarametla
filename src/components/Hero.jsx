import React, { useState, useEffect } from 'react';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaCode, FaRocket, FaStar } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [hoveredSkill, setHoveredSkill] = useState(null);
    
    const profileImage = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80';
    
    const skills = [
        { icon: <FaCode />, name: 'Full-Stack', color: 'from-blue-500 to-cyan-500' },
        { icon: <FaRocket />, name: 'AI Integration', color: 'from-purple-500 to-pink-500' },
        { icon: <FaStar />, name: '6+ Years Exp', color: 'from-yellow-500 to-orange-500' }
    ];
    
    useEffect(() => {
        const img = new Image();
        img.src = profileImage;
        img.onload = () => setImageLoaded(true);
    }, [profileImage]);
    
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -100, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        x: [0, -100, 0],
                        y: [0, 100, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
                />
            </div>
            
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center lg:text-left"
                    >
                        {/* Greeting */}
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-xl md:text-2xl text-cyan-400 mb-4 font-light"
                        >
                            Hey 👋 I&apos;m
                        </motion.h2>

                        {/* Name */}
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
                        >
                            <span className="gradient-text">Subhash Medarametla</span>
                        </motion.h1>

                        {/* Title */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="mb-8"
                        >
                            <h3 className="text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-4">
                                Software Developer
                            </h3>
                            <div className="flex items-center gap-2 flex-wrap lg:justify-start justify-center">
                                {skills.map((skill, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
                                        onMouseEnter={() => setHoveredSkill(idx)}
                                        onMouseLeave={() => setHoveredSkill(null)}
                                        className="relative"
                                    >
                                        <span className={`px-4 py-2 rounded-full bg-gradient-to-r ${skill.color}/20 border ${skill.color.split(' ')[0]}/30 text-${skill.color.split(' ')[0].split('-')[0]}-300 text-sm flex items-center gap-2 cursor-pointer`}>
                                            <span className="text-base">{skill.icon}</span>
                                            {skill.name}
                                        </span>
                                        <AnimatePresence>
                                            {hoveredSkill === idx && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -10 }}
                                                    className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap"
                                                >
                                                    Click to learn more
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Professional Summary */}
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-12 leading-relaxed"
                        >
                            Software developer with <span className="text-cyan-400 font-semibold">6+ years</span> across banking (Wells Fargo), e-commerce (Flipkart) and enterprise work at Accenture.
                            Experienced building web features end-to-end, from React and JavaScript on the frontend to Node.js and Java/Spring Boot on the backend, designing scalable REST APIs on AWS.
                            Recently completed Master&apos;s with focus on <span className="text-purple-400 font-semibold">AI integration</span> using OpenAI, embeddings, RAG and LLMs.
                        </motion.p>

                        {/* Contact Info */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                            className="flex flex-wrap items-center gap-6 mb-12 lg:justify-start justify-center"
                        >
                            <a href="tel:+13143206694" className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors group">
                                <div className="icon-wrapper group-hover:scale-110 transition-transform">
                                    <FaPhone className="text-cyan-400" />
                                </div>
                                <span>+1 (314) 320-6694</span>
                            </a>
                            <a href="mailto:subhashaj05@gmail.com" className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors group">
                                <div className="icon-wrapper group-hover:scale-110 transition-transform">
                                    <FaEnvelope className="text-cyan-400" />
                                </div>
                                <span>subhashaj05@gmail.com</span>
                            </a>
                            <a href="https://www.linkedin.com/in/subhashchandrabosu" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors group">
                                <div className="icon-wrapper group-hover:scale-110 transition-transform">
                                    <FaLinkedin className="text-cyan-400" />
                                </div>
                                <span>LinkedIn</span>
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors group">
                                <div className="icon-wrapper group-hover:scale-110 transition-transform">
                                    <FaGithub className="text-cyan-400" />
                                </div>
                                <span>GitHub</span>
                            </a>
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="flex flex-wrap gap-4 lg:justify-start justify-center"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                                className="btn-primary"
                            >
                                Get In Touch
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => document.getElementById('experience').scrollIntoView({ behavior: 'smooth' })}
                                className="px-8 py-3 rounded-full border-2 border-cyan-400 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
                            >
                                View My Work
                            </motion.button>
                        </motion.div>
                    </motion.div>
                    
                    {/* Right Column - Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex justify-center lg:justify-end"
                    >
                        <div className="relative">
                            {/* Glow Effect */}
                            <motion.div
                                animate={{
                                    scale: [1, 1.1, 1],
                                    rotate: [0, 5, -5, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full blur-2xl opacity-30"
                            />
                            
                            {/* Profile Image Container */}
                            <motion.div
                                animate={{
                                    y: [0, -10, 0],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
                            >
                                {/* Image Frame */}
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full p-1">
                                    <div className="w-full h-full bg-gray-900 rounded-full p-1">
                                        <div className="w-full h-full bg-gray-800 rounded-full overflow-hidden relative">
                                            {imageLoaded ? (
                                                <img
                                                    src={profileImage}
                                                    alt="Subhash Medarametla"
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center">
                                                    <motion.div
                                                        animate={{ rotate: 360 }}
                                                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                                        className="w-12 h-12 border-4 border-cyan-400 border-t-transparent rounded-full"
                                                    />
                                                </div>
                                            )}
                                            
                                            {/* Overlay Gradient */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent pointer-events-none" />
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Floating Elements */}
                                <motion.div
                                    animate={{
                                        y: [0, -20, 0],
                                        rotate: [0, 10, -10, 0],
                                    }}
                                    transition={{
                                        duration: 5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 0.5
                                    }}
                                    className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg"
                                >
                                    <FaStar className="text-white text-xl" />
                                </motion.div>
                                
                                <motion.div
                                    animate={{
                                        y: [0, -15, 0],
                                        rotate: [0, -10, 10, 0],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 1
                                    }}
                                    className="absolute -bottom-4 -left-4 w-14 h-14 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center shadow-lg"
                                >
                                    <FaCode className="text-white text-lg" />
                                </motion.div>
                                
                                <motion.div
                                    animate={{
                                        y: [0, -25, 0],
                                        rotate: [0, 15, -15, 0],
                                    }}
                                    transition={{
                                        duration: 6,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 1.5
                                    }}
                                    className="absolute top-1/2 -left-8 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center shadow-lg"
                                >
                                    <FaRocket className="text-white text-sm" />
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
                
                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="mt-16 text-center lg:text-left"
                >
                    <div className="inline-block animate-bounce">
                        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full mx-auto lg:mx-0 flex items-start justify-center p-2">
                            <div className="w-1 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
