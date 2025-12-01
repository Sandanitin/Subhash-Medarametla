import React, { useState } from 'react';
import { FaGraduationCap, FaUniversity, FaCalendar, FaMedal, FaAward, FaBook, FaChevronRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Education = () => {
    const [hoveredCard, setHoveredCard] = useState(null);
    
    const educationData = [
        {
            degree: "Master's in Information Systems",
            status: 'GPA: 3.83/4.0',
            institution: 'Saint Louis University, Saint Louis, MO, USA',
            year: 'Aug 2023 - May 2025',
            icon: <FaGraduationCap className="text-4xl" />,
            gradient: 'from-purple-500 to-pink-500',
            image: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            logo: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80',
            highlights: ['Advanced Database Systems', 'Data Analytics', 'Cloud Computing', 'Machine Learning'],
            achievements: ['Dean\'s List', 'Research Assistant']
        },
        {
            degree: "Bachelor's in Computer Science",
            status: 'GPA: 8.9/10',
            institution: 'India',
            year: 'July 2014 - May 2018',
            icon: <FaUniversity className="text-4xl" />,
            gradient: 'from-blue-500 to-cyan-500',
            image: 'https://images.unsplash.com/photo-1581078426770-6d336e5de7bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            logo: 'https://images.unsplash.com/photo-1568667256549-094345257637?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80',
            highlights: ['Data Structures', 'Algorithms', 'Web Development', 'Database Management'],
            achievements: ['First Class with Distinction', 'Technical Lead']
        }
    ];

    return (
        <section id="education" className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Education Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-3 mb-6">
                        <div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent w-20"></div>
                        <FaGraduationCap className="text-3xl text-cyan-400" />
                        <div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent w-20"></div>
                    </div>
                    <h2 className="section-title">Education Journey</h2>
                    <p className="section-subtitle max-w-2xl mx-auto">
                        My academic path and continuous learning journey in technology and information systems
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-cyan-500/50 to-purple-500/50"></div>
                    
                    <div className="space-y-12">
                        {educationData.map((edu, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: idx === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: idx * 0.2 }}
                                viewport={{ once: true }}
                                className={`relative flex items-center ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                onMouseEnter={() => setHoveredCard(idx)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                {/* Timeline Dot */}
                                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full border-4 border-gray-900 z-10">
                                    <motion.div
                                        animate={{ scale: hoveredCard === idx ? 1.5 : 1 }}
                                        className="w-full h-full bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
                                    />
                                </div>
                                
                                {/* Education Card */}
                                <motion.div
                                    whileHover={{ scale: 1.02, y: -5 }}
                                    transition={{ duration: 0.3 }}
                                    className={`w-full md:w-5/12 ${idx % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}
                                >
                                    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500">
                                        {/* Background Image */}
                                        <div className="absolute inset-0">
                                            <img 
                                                src={edu.image} 
                                                alt={`${edu.degree} background`}
                                                className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                                            />
                                            <div className={`absolute inset-0 bg-gradient-to-br ${edu.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                                        </div>
                                        
                                        {/* Content */}
                                        <div className="relative p-8">
                                            {/* Header */}
                                            <div className="flex items-start justify-between mb-6">
                                                <div className="flex items-center gap-4">
                                                    {/* University Logo */}
                                                    <div className="relative">
                                                        <img 
                                                            src={edu.logo} 
                                                            alt={`${edu.institution} logo`}
                                                            className="w-12 h-12 rounded-full object-cover border-2 border-cyan-500/50"
                                                        />
                                                        <div className={`absolute -inset-1 bg-gradient-to-r ${edu.gradient} rounded-full blur-sm opacity-50`}></div>
                                                    </div>
                                                    <div className={`p-3 rounded-xl bg-gradient-to-r ${edu.gradient} shadow-lg transform group-hover:scale-110 transition-transform duration-500`}>
                                                        {edu.icon}
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2 text-cyan-400">
                                                    <FaCalendar className="text-sm" />
                                                    <span className="text-sm font-medium">{edu.year}</span>
                                                </div>
                                            </div>
                                            
                                            {/* Degree */}
                                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                                                {edu.degree}
                                            </h3>
                                            
                                            {/* Institution */}
                                            <p className="text-gray-300 mb-4 flex items-center gap-2">
                                                <FaUniversity className="text-cyan-500" />
                                                {edu.institution}
                                            </p>
                                            
                                            {/* Status Badge */}
                                            {edu.status && (
                                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 mb-6">
                                                    <FaMedal className="text-yellow-400" />
                                                    <span className="text-yellow-400 font-semibold">{edu.status}</span>
                                                </div>
                                            )}
                                            
                                            {/* Expandable Details */}
                                            <AnimatePresence>
                                                {hoveredCard === idx && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: 'auto' }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="pt-4 border-t border-gray-700/50">
                                                            <div className="mb-4">
                                                                <h4 className="text-sm font-semibold text-cyan-400 mb-2 flex items-center gap-2">
                                                                    <FaBook /> Key Courses
                                                                </h4>
                                                                <div className="flex flex-wrap gap-2">
                                                                    {edu.highlights.map((highlight, i) => (
                                                                        <span key={i} className="px-3 py-1 rounded-full bg-gray-700/50 text-gray-300 text-xs border border-gray-600/50">
                                                                            {highlight}
                                                                        </span>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                            
                                                            <div>
                                                                <h4 className="text-sm font-semibold text-cyan-400 mb-2 flex items-center gap-2">
                                                                    <FaAward /> Achievements
                                                                </h4>
                                                                <div className="flex flex-wrap gap-2">
                                                                    {edu.achievements.map((achievement, i) => (
                                                                        <span key={i} className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 text-xs border border-purple-500/30">
                                                                            {achievement}
                                                                        </span>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                            
                                            {/* Hover Indicator */}
                                            <div className="flex items-center justify-center mt-4 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <span className="text-sm mr-2">View details</span>
                                                <FaChevronRight className="animate-pulse" />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
