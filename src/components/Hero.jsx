import React, { useState, useEffect } from 'react';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaCode, FaRocket, FaStar, FaDownload, FaArrowRight, FaMouse, FaBriefcase, FaGraduationCap, FaMapMarkerAlt } from 'react-icons/fa';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [hoveredSkill, setHoveredSkill] = useState(null);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const { scrollY } = useScroll();

    const profileImage = '/profile.jpg';

    const titles = [
        'Software Developer',
        'Full-Stack Engineer',
        'AI Integration Specialist',
        'Problem Solver'
    ];

    const skills = [
        { icon: <FaCode />, name: 'Full-Stack', color: 'from-blue-500 to-cyan-500', level: 95 },
        { icon: <FaRocket />, name: 'AI Integration', color: 'from-purple-500 to-pink-500', level: 88 },
        { icon: <FaStar />, name: '5+ Years Exp', color: 'from-yellow-500 to-orange-500', level: 92 }
    ];

    const stats = [
        { icon: <FaBriefcase />, value: '5+', label: 'Years Experience' },
        { icon: <FaGraduationCap />, value: '2', label: 'Degrees' },
        { icon: <FaCode />, value: '20+', label: 'Projects' }
    ];

    const yTransform = useTransform(scrollY, [0, 300], [0, -50]);
    const opacityTransform = useTransform(scrollY, [0, 300], [1, 0]);

    useEffect(() => {
        const img = new Image();
        img.src = profileImage;
        img.onload = () => setImageLoaded(true);
    }, [profileImage]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTextIndex((prev) => (prev + 1) % titles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [titles.length]);

    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-12 px-3 sm:px-4 relative overflow-hidden">
            {/* Enhanced Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Particle System - Reduced for mobile */}
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            x: [Math.random() * 30 - 15, Math.random() * 30 - 15],
                            y: [Math.random() * 30 - 15, Math.random() * 30 - 15],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: Math.random() * 6 + 3,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                            ease: "linear"
                        }}
                        className="absolute w-0.5 h-0.5 bg-cyan-400 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                    />
                ))}

                {/* Main Background Orbs - Smaller for mobile */}
                <motion.div
                    animate={{
                        x: [0, 50, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.05, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-5 left-5 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-2xl"
                />
                <motion.div
                    animate={{
                        x: [0, -50, 0],
                        y: [0, 50, 0],
                        scale: [1.05, 1, 1.05],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute bottom-5 right-5 w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-2xl"
                />
                <motion.div
                    animate={{
                        rotate: [0, 360],
                    }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-2xl"
                />
            </div>

            <motion.div
                style={{ y: yTransform, opacity: opacityTransform }}
                className="max-w-6xl mx-auto relative z-10 px-2 sm:px-4"
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
                    {/* Left Column - Enhanced Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center lg:text-left order-2 lg:order-1"
                    >
                        {/* Enhanced Greeting - Mobile Optimized */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-sm sm:text-base md:text-lg lg:text-xl text-cyan-400 font-light mb-2"
                        >
                            Welcome to my digital space
                        </motion.h2>

                        {/* Enhanced Name - Mobile Optimized */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4"
                        >
                            <span className="gradient-text">Subhash Chandrabosu Medarametla</span>
                        </motion.h1>

                        {/* Animated Title - Mobile Optimized */}
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-4 sm:mb-6"
                        >
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={currentTextIndex}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                    className="inline-block"
                                >
                                    {titles[currentTextIndex]}
                                </motion.span>
                            </AnimatePresence>
                            <motion.span
                                animate={{ opacity: [1, 0, 1] }}
                                transition={{ duration: 1, repeat: Infinity }}
                                className="ml-2 text-cyan-400"
                            >
                                |
                            </motion.span>
                        </motion.h3>
                        {/* Enhanced Skills Display - Mobile Optimized */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="mb-4 sm:mb-6"
                        >
                            <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3">
                                {skills.map((skill, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
                                        onMouseEnter={() => setHoveredSkill(idx)}
                                        onMouseLeave={() => setHoveredSkill(null)}
                                        className="relative group"
                                    >
                                        <div className={`px-2 py-1 sm:px-3 sm:py-2 rounded-lg sm:rounded-xl bg-gradient-to-br ${skill.color}/10 border ${skill.color.split(' ')[0]}/30 backdrop-blur-sm hover:shadow-lg transition-all duration-300 cursor-pointer`}>
                                            <div className="flex items-center gap-1 sm:gap-2">
                                                <span className="text-sm sm:text-lg">{skill.icon}</span>
                                                <span className="text-xs sm:text-sm font-medium text-gray-300">{skill.name}</span>
                                            </div>
                                        </div>
                                        <AnimatePresence>
                                            {hoveredSkill === idx && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -10 }}
                                                    className="absolute -top-8 sm:-top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded-lg shadow-lg whitespace-nowrap z-20"
                                                >
                                                    {skill.level}% proficient
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Stats Bar - Mobile Optimized */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="mb-4 sm:mb-6"
                        >
                            <div className="flex items-center justify-center lg:justify-start gap-4 sm:gap-6">
                                {stats.map((stat, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, delay: 0.7 + idx * 0.1 }}
                                        className="text-center"
                                    >
                                        <div className="flex items-center justify-center gap-1 text-cyan-400 mb-1">
                                            {stat.icon}
                                        </div>
                                        <div className="text-base sm:text-lg font-bold text-white">{stat.value}</div>
                                        <div className="text-xs text-gray-400">{stat.label}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Enhanced Professional Summary - Mobile Optimized */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                            className="text-sm sm:text-base text-gray-400 max-w-xs sm:max-w-md md:max-w-lg mx-auto lg:mx-0 mb-4 sm:mb-6 leading-relaxed"
                        >
                            Passionate developer with <span className="text-cyan-400 font-semibold">5+ years</span> across Telecom, Banking & E-commerce. Expert in <span className="text-purple-400 font-semibold">React, Node.js, Java/Spring Boot</span> & <span className="text-purple-400 font-semibold">AI integration with LLMs & RAG</span>.
                        </motion.p>

                        {/* Location Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.75 }}
                            className="flex items-center justify-center lg:justify-start gap-2 mb-4 text-gray-400"
                        >
                            <FaMapMarkerAlt className="text-cyan-400" />
                            <span className="text-sm">St. Louis, MO | Open to relocate</span>
                        </motion.div>

                        {/* Enhanced Contact Info - Mobile Optimized */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="flex flex-wrap items-center justify-center lg:justify-start gap-1 sm:gap-2 mb-4 sm:mb-6"
                        >
                            <a href="tel:+13143206694" className="group flex items-center gap-1 px-2 py-1 rounded-full bg-gray-800/50 border border-gray-700/50 hover:border-green-500/50 transition-all duration-300 text-xs">
                                <FaPhone className="text-green-400" />
                                <span className="text-gray-300 group-hover:text-white transition-colors">+1 (314) 320-6694</span>
                            </a>
                            <a href="mailto:subhashaj05@gmail.com" className="group flex items-center gap-1 px-2 py-1 rounded-full bg-gray-800/50 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 text-xs">
                                <FaEnvelope className="text-purple-400" />
                                <span className="text-gray-300 group-hover:text-white transition-colors">Email</span>
                            </a>
                            <a href="https://www.linkedin.com/in/subhash03" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-1 px-2 py-1 rounded-full bg-gray-800/50 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 text-xs">
                                <FaLinkedin className="text-blue-400" />
                                <span className="text-gray-300 group-hover:text-white transition-colors">LinkedIn</span>
                            </a>
                        </motion.div>

                        {/* Enhanced CTA Buttons - Mobile Optimized */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.9 }}
                            className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center lg:justify-start"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                                className="group relative px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 text-xs sm:text-sm w-full sm:w-auto"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-1">
                                    Get In Touch
                                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </span>
                                <motion.div
                                    initial={{ x: '-100%' }}
                                    whileHover={{ x: '0%' }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500"
                                />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => document.getElementById('experience').scrollIntoView({ behavior: 'smooth' })}
                                className="group relative px-3 py-1.5 sm:px-4 sm:py-2 bg-transparent border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full overflow-hidden transition-all duration-300 hover:bg-cyan-400 hover:text-gray-900 text-xs sm:text-sm w-full sm:w-auto"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-1">
                                    <FaDownload className="group-hover:rotate-12 transition-transform" />
                                    View My Work
                                </span>
                            </motion.button>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Enhanced Profile Image - Mobile Optimized */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex justify-center items-center order-1 lg:order-2 mb-6 lg:mb-0"
                    >
                        <div className="relative">
                            {/* Enhanced Glow Effect - Mobile Optimized */}
                            <motion.div
                                animate={{
                                    scale: [1, 1.05, 1],
                                    rotate: [0, 2, -2, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full blur-xl sm:blur-2xl opacity-30"
                            />

                            {/* Profile Image Container - Mobile Optimized */}
                            <motion.div
                                animate={{
                                    y: [0, -5, 0],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64"
                            >
                                {/* Enhanced Image Frame */}
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full p-0.5 sm:p-1">
                                    <div className="w-full h-full bg-gray-900 rounded-full p-0.5 sm:p-1">
                                        <div className="w-full h-full bg-gray-800 rounded-full overflow-hidden relative">
                                            {imageLoaded ? (
                                                <img
                                                    src={profileImage}
                                                    alt="Subhash Chandrabosu Medarametla"
                                                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center">
                                                    <motion.div
                                                        animate={{ rotate: 360 }}
                                                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                                        className="w-6 h-6 sm:w-8 sm:h-8 border-2 sm:border-4 border-cyan-400 border-t-transparent rounded-full"
                                                    />
                                                </div>
                                            )}

                                            {/* Enhanced Overlay Gradient */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent pointer-events-none" />
                                        </div>
                                    </div>
                                </div>

                                {/* Enhanced Floating Elements - Mobile Optimized */}
                                <motion.div
                                    animate={{
                                        y: [0, -10, 0],
                                        rotate: [0, 5, -5, 0],
                                        scale: [1, 1.05, 1],
                                    }}
                                    transition={{
                                        duration: 5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 0.5
                                    }}
                                    className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-xl border-2 sm:border-4 border-gray-900"
                                >
                                    <FaStar className="text-white text-xs sm:text-sm animate-pulse" />
                                </motion.div>

                                <motion.div
                                    animate={{
                                        y: [0, -8, 0],
                                        rotate: [0, -5, 5, 0],
                                        scale: [1, 1.05, 1],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 1
                                    }}
                                    className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 w-6 h-6 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center shadow-xl border-2 sm:border-4 border-gray-900"
                                >
                                    <FaCode className="text-white text-xs" />
                                </motion.div>

                                <motion.div
                                    animate={{
                                        y: [0, -12, 0],
                                        rotate: [0, 8, -8, 0],
                                        scale: [1, 1.1, 1],
                                    }}
                                    transition={{
                                        duration: 6,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 1.5
                                    }}
                                    className="absolute top-1/2 -left-3 sm:-left-4 w-5 h-5 sm:w-8 sm:h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center shadow-xl border-2 sm:border-4 border-gray-900"
                                >
                                    <FaRocket className="text-white text-xs" />
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Enhanced Scroll Indicator - Mobile Optimized */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.0 }}
                    className="mt-8 sm:mt-12 text-center"
                >
                    <div className="inline-flex flex-col items-center gap-1 cursor-pointer group"
                        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
                        <motion.div
                            animate={{ y: [0, 3, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="text-cyan-400 text-xs font-medium group-hover:text-cyan-300 transition-colors"
                        >
                            Scroll to explore
                        </motion.div>
                        <div className="relative">
                            <motion.div
                                animate={{ y: [0, 6, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="w-4 h-6 sm:w-5 sm:h-8 border border-cyan-400 rounded-full flex items-start justify-center p-1 sm:p-1.5 group-hover:border-cyan-300 transition-colors"
                            >
                                <motion.div
                                    animate={{ y: [0, 8, 0] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="w-0.5 h-1.5 sm:w-0.5 sm:h-2 bg-cyan-400 rounded-full group-hover:bg-cyan-300 transition-colors"
                                />
                            </motion.div>
                            <FaMouse className="absolute -top-4 sm:-top-6 left-1/2 transform -translate-x-1/2 text-cyan-400 text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
