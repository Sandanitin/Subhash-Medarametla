import React from 'react';
import {
    FaCloud, FaCode, FaChartLine, FaRobot, FaServer,
    FaDocker, FaGitAlt, FaAws, FaDatabase
} from 'react-icons/fa';
import {
    SiJenkins, SiKubernetes, SiPostgresql, SiMongodb, SiRedis, SiApachekafka
} from 'react-icons/si';
import { motion } from 'framer-motion';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Programming Languages',
            icon: <FaCode className="text-4xl" />,
            gradient: 'from-blue-500 to-cyan-500',
            skills: [
                { name: 'JavaScript', level: 95 },
                { name: 'Python', level: 90 },
                { name: 'Java', level: 88 },
                { name: 'C++', level: 80 },
                { name: 'HTML/CSS', level: 93 },
            ]
        },
        {
            title: 'Frontend Development',
            icon: <FaCode className="text-4xl" />,
            gradient: 'from-purple-500 to-pink-500',
            skills: [
                { name: 'React.js', level: 95 },
                { name: 'GraphQL', level: 82 },
                { name: 'Bootstrap', level: 88 },
                { name: 'Tailwind CSS', level: 85 },
            ]
        },
        {
            title: 'Backend & APIs',
            icon: <FaServer className="text-4xl" />,
            gradient: 'from-green-500 to-teal-500',
            skills: [
                { name: 'Node.js', level: 93 },
                { name: 'Spring Boot', level: 90 },
                { name: 'REST APIs', level: 95 },
                { name: 'Microservices', level: 85 },
                { name: 'JPA/Hibernate', level: 82 },
            ]
        },
        {
            title: 'AI & Machine Learning',
            icon: <FaRobot className="text-4xl" />,
            gradient: 'from-orange-500 to-red-500',
            skills: [
                { name: 'OpenAI API', level: 88 },
                { name: 'Embeddings & Vector Search', level: 85 },
                { name: 'RAG Architecture', level: 82 },
                { name: 'Prompt Design & Guardrails', level: 87 },
            ]
        },
        {
            title: 'Cloud Platforms',
            icon: <FaCloud className="text-4xl" />,
            gradient: 'from-indigo-500 to-purple-500',
            skills: [
                { name: 'AWS', icon: <FaAws />, level: 90 },
                { name: 'Google Cloud Platform (GCP)', level: 80 },
            ]
        },
        {
            title: 'Data & Messaging',
            icon: <FaDatabase className="text-4xl" />,
            gradient: 'from-yellow-500 to-orange-500',
            skills: [
                { name: 'PostgreSQL', icon: <SiPostgresql />, level: 88 },
                { name: 'MySQL', level: 88 },
                { name: 'DynamoDB', level: 80 },
                { name: 'MongoDB', icon: <SiMongodb />, level: 85 },
                { name: 'Redis', icon: <SiRedis />, level: 82 },
                { name: 'Kafka', icon: <SiApachekafka />, level: 80 },
            ]
        },
        {
            title: 'DevOps & CI/CD',
            icon: <FaDocker className="text-4xl" />,
            gradient: 'from-cyan-500 to-blue-500',
            skills: [
                { name: 'Docker', icon: <FaDocker />, level: 90 },
                { name: 'Kubernetes', icon: <SiKubernetes />, level: 85 },
                { name: 'Git/GitLab', icon: <FaGitAlt />, level: 92 },
                { name: 'Jenkins', icon: <SiJenkins />, level: 88 },
            ]
        },
        {
            title: 'Testing & Quality',
            icon: <FaChartLine className="text-4xl" />,
            gradient: 'from-pink-500 to-red-500',
            skills: [
                { name: 'JUnit', level: 88 },
                { name: 'Jest', level: 85 },
                { name: 'Cypress', level: 80 },
                { name: 'Mocha', level: 78 },
                { name: 'SonarQube', level: 82 },
            ]
        },
    ];

    return (
        <section id="skills" className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title">Technical Skills</h2>
                    <p className="section-subtitle">
                        Comprehensive skill set across full-stack development, AI integration, and cloud platforms
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card p-6 hover:scale-105 transition-transform duration-300"
                        >
                            {/* Category Header */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className={`icon-wrapper bg-gradient-to-r ${category.gradient} p-3`}>
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white">{category.title}</h3>
                            </div>

                            {/* Skills List */}
                            <div className="space-y-4">
                                {category.skills.map((skill, skillIdx) => (
                                    <div key={skillIdx}>
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-2">
                                                {skill.icon && (
                                                    <span className="text-cyan-400 text-xl">{skill.icon}</span>
                                                )}
                                                <span className="text-gray-300 font-medium">{skill.name}</span>
                                            </div>
                                            <span className="text-cyan-400 text-sm font-semibold">{skill.level}%</span>
                                        </div>
                                        {/* Progress Bar */}
                                        <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                transition={{ duration: 1, delay: idx * 0.1 + skillIdx * 0.1 }}
                                                viewport={{ once: true }}
                                                className={`h-full bg-gradient-to-r ${category.gradient} rounded-full`}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Skills Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mt-12"
                >
                    <div className="glass-card p-8">
                        <h3 className="text-2xl font-bold text-white mb-6 text-center">Practices & Soft Skills</h3>
                        <div className="flex flex-wrap justify-center gap-3">
                            {[
                                'Agile/Scrum', 'Jira', 'Performance Tuning', 'Security Hardening',
                                'Problem-solving', 'Collaboration', 'Communication', 'Technical Documentation',
                                'Algorithms', 'Data Structures'
                            ].map((skill, idx) => (
                                <span
                                    key={idx}
                                    className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-gray-300 font-medium hover:border-cyan-400 hover:text-cyan-400 transition-colors cursor-default"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
