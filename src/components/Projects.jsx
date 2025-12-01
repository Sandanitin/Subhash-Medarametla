import React from 'react';
import { FaHospital, FaBolt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Projects = () => {
    const projects = [
        {
            title: 'AI-Integrated Cancer Prediction & Hospital Portal',
            period: 'Jan 2025 – May 2025',
            type: 'Academic Project',
            description: 'AI-integrated hospital portal with patient records, cancer-risk screening, and a policy/help chat.',
            features: [
                'Implemented Python CNN with Grad-CAM for cancer-risk screening and visualization',
                'Built a policy/help chat using OpenAI with embeddings + vector search (RAG) over hospital PDFs',
                'Secured the application via Spring Boot REST + OAuth2',
                'Instrumented with basic telemetry for research/education use'
            ],
            tech: ['Python', 'Spring Boot', 'OpenAI API', 'RAG', 'React', 'OAuth2'],
            gradient: 'from-pink-500 to-rose-500',
            icon: <FaHospital className="text-3xl" />
        },
        {
            title: 'AI Home Utility Optimization Agent',
            period: 'Jan 2025 – Mar 2025',
            type: 'Academic Project',
            description: 'Python-based home utility agent using OpenAI embeddings and time-series analysis.',
            features: [
                'Developed an agent to predict bills using simple time-series analysis on tariff and usage data',
                'Implemented logic to suggest off-peak schedules for cost optimization',
                'Created alert system for abnormal electricity, water, or gas consumption',
                'Utilized OpenAI embeddings to connect LLMs to real utility data safely'
            ],
            tech: ['Python', 'OpenAI Embeddings', 'Time-Series Analysis', 'LLMs'],
            gradient: 'from-amber-500 to-orange-500',
            icon: <FaBolt className="text-3xl" />
        }
    ];

    return (
        <section id="projects" className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title">Academic Projects</h2>
                    <p className="section-subtitle">
                        Recent work in AI integration and Full-Stack Development
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card p-8 hover:scale-[1.02] transition-transform duration-300 flex flex-col h-full"
                        >
                            {/* Header */}
                            <div className="flex items-start justify-between mb-6">
                                <div className="flex items-center gap-4">
                                    <div className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient} bg-opacity-20`}>
                                        {project.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                                        <span className="text-sm text-cyan-400 font-medium">{project.type}</span>
                                    </div>
                                </div>
                                <span className="text-sm text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full border border-gray-700">
                                    {project.period}
                                </span>
                            </div>

                            {/* Description */}
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                {project.description}
                            </p>

                            {/* Features */}
                            <div className="mb-8 flex-grow">
                                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Key Features</h4>
                                <ul className="space-y-2">
                                    {project.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-start gap-2 text-gray-300 text-sm">
                                            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.gradient}`} />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tech.map((tech, tIdx) => (
                                    <span
                                        key={tIdx}
                                        className="px-3 py-1 text-xs font-medium rounded-full bg-gray-800 border border-gray-700 text-gray-300 hover:border-cyan-500/50 hover:text-cyan-400 transition-colors"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
