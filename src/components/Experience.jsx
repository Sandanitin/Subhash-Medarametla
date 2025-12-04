import React from 'react';
import { FaBuilding, FaCalendar, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            company: 'Wells Fargo',
            location: 'Remote',
            role: 'Software Developer',
            period: 'Dec 2024 – Present',
            project: 'Digital Payments & Account Portal',
            achievements: [
                'Simplified how the account overview page talks to backend services and removed extra calls, cutting average load time from ~3 seconds to under 2 seconds',
                'Worked with backend teammates to refine checks and error handling for payment services, bringing noisy "invalid request" errors down by ~33%'
            ],
            tools: ['React.js', 'JavaScript', 'Node.js', 'REST APIs', 'HTML/CSS'],
            gradient: 'from-blue-500 to-cyan-500'
        },
        {
            company: 'Flipkart',
            location: 'Bangalore, India',
            role: 'Software Developer',
            period: 'Feb 2021 – July 2023',
            project: 'E-Commerce Web & Checkout Portal',
            achievements: [
                'Worked on listing, search and product detail pages for selected categories; add-to-cart drop-offs decreased by 10-12% in analytics',
                'Cleaned up state handling and cut extra network calls on search and listing views, reducing average load time from ~2.8 seconds to under 2 seconds'
            ],
            tools: ['React.js', 'JavaScript', 'HTML/CSS', 'Bootstrap', 'REST APIs'],
            gradient: 'from-purple-500 to-pink-500'
        },
        {
            company: 'Accenture',
            location: 'Hyderabad, India',
            role: 'Software Developer',
            period: 'Aug 2018 – Jan 2021',
            project: 'Enterprise Web Dashboards & Workflows',
            achievements: [
                'Connected the UI with REST and GraphQL APIs and fixed data-handling issues, reducing API-related UI errors in logs by ~30%',
                'Helped set up and tune CI/CD pipelines in Azure DevOps for the frontend; manual deployment time dropped by ~40%'
            ],
            tools: ['React.js', 'JavaScript', 'REST', 'GraphQL', 'Azure DevOps', 'HTML/CSS'],
            gradient: 'from-green-500 to-teal-500'
        }
    ];

    return (
        <section id="experience" className="py-20 px-4 bg-gradient-to-b from-transparent to-gray-900/20">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title">Professional Experience</h2>
                    <p className="section-subtitle">
                        6+ years of experience across banking, e-commerce, and enterprise development
                    </p>
                </motion.div>

                <div className="space-y-8">
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card p-8 relative overflow-hidden"
                        >
                            {/* Gradient Accent */}
                            <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${exp.gradient}`} />

                            <div className="ml-4">
                                {/* Header */}
                                <div className="flex flex-wrap items-start justify-between mb-6">
                                    <div>
                                        {/* Project Title */}
                                        {exp.project && (
                                            <p className="text-sm text-purple-400 mb-2 font-semibold uppercase tracking-wide">
                                                Project: {exp.project}
                                            </p>
                                        )}
                                        <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                                        <div className="flex items-center gap-2 text-cyan-400 mb-2">
                                            <FaBuilding />
                                            <span className="font-semibold">{exp.company}</span>
                                        </div>
                                        <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
                                            <div className="flex items-center gap-2">
                                                <FaMapMarkerAlt className="text-purple-400" />
                                                <span>{exp.location}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <FaCalendar className="text-green-400" />
                                                <span>{exp.period}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Achievements */}
                                <div className="mb-6">
                                    <ul className="space-y-3">
                                        {exp.achievements.map((achievement, achievementIdx) => (
                                            <li key={achievementIdx} className="flex items-start gap-3 text-gray-300">
                                                <FaCheckCircle className="text-green-400 mt-1 flex-shrink-0" />
                                                <span>{achievement}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Tools/Technologies */}
                                <div className="flex flex-wrap gap-2">
                                    {exp.tools.map((tool, toolIdx) => (
                                        <span
                                            key={toolIdx}
                                            className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${exp.gradient} bg-opacity-20 border border-current text-white`}
                                        >
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
