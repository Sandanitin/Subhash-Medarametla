import React from 'react';
import { FaBuilding, FaCalendar, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            company: 'T-Mobile',
            location: 'Remote',
            role: 'Software Developer',
            period: '2024 – Present',
            project: 'Plans & Add-Ons Management',
            description: 'T-Mobile is a major U.S. wireless carrier with customers managing lines and plans across web & mobile. Team project to improve the area where customers review plans, manage lines and add-ons, payment fixes for customers, across both the UI and backend services.',
            achievements: [
                'Improved layout and wording on plan and add-ons pages in React, lifting internal UX review scores from about 7.1 to around 8.3 over a few releases.',
                'Added confirmations and warnings for plan, roaming and international changes, cutting "I changed the wrong thing" tickets for that area by 15–20%.',
                'Removed duplicate calls in Node.js and Java/Spring Boot plan APIs, trimming response times on key screens by 200–300 ms in monitoring.',
                'Tightened validation and error handling for plan and add-on APIs on AWS, reducing noisy 4xx/5xx errors on those routes by one-third.',
                'Created reusable plan cards, add-on tiles and summary banners backed by shared data calls, trimming duplicate frontend code by 20%.',
                'Used logs, dashboards and a small log clustering/embeddings helper to group similar plan-change issues and cut triage time for recurring problems by 20%.'
            ],
            tools: ['React.js', 'JavaScript', 'Node.js', 'Java/Spring Boot', 'AWS', 'REST APIs'],
            gradient: 'from-pink-500 to-rose-500'
        },
        {
            company: 'C2N IT Services',
            location: 'Hyderabad, India',
            role: 'Software Developer',
            period: 'Jul 2018 – Jun 2023',
            projects: [
                {
                    name: 'Digital Payments & Account Portal',
                    description: 'Contributed to a digital banking portal for balances, transactions, bill pay, UPI/NEFT/IMPS transfers, and payee management across UI and backend services.'
                },
                {
                    name: 'Retail E-Commerce Web & Checkout',
                    description: 'Team project building an e-commerce site with product listings, product pages, cart, and checkout for smooth ordering on desktop and mobile.'
                }
            ],
            achievements: [
                'Worked on dashboard, transaction and payment pages using React/JavaScript, with clearer labels for UPI, NEFT, card payments, which reduced checkout drop-off on those screens.',
                'Simplified UPI and NEFT transfer flows with better inline errors, which reduced basic "payment failed, what next?" tickets in that area by 15–18%.',
                'Built UI screens to surface flagged UPI, NEFT and IMPS transfers, show risk reasons, scores and support audit review with searchable logs.',
                'Maintained Java/Spring Boot and Node.js APIs for payments and transfers, removing redundant calls and making key endpoints 200–250 ms faster.',
                'Tuned a few queries in PostgreSQL/MySQL for mini-statements and transaction search by adding indexes and cleaning filters, which reduced slow-query alerts during peak hours.',
                'Built reusable widgets for payees, recent payments and bank selection across UPI/NEFT/bill-pay, trimming duplicate frontend code by 20%.',
                'Built product listing and detail pages in React and JavaScript and improved click-through rate from listing to product detail by 8–10%.',
                'Fixed mobile/responsive issues with HTML/CSS/Bootstrap on key shopping pages, and layout bugs reported by QA dropped by 25–30% over a few sprints.',
                'Created reusable pieces for product cards, filter chips and offer banners so the team could spin up new sale or category pages faster, dev effort dropped to 20–25%.',
                'Updated cart and checkout APIs in Node.js and Java/Spring Boot to handle coupons and stock errors more cleanly, cutting 4xx/5xx errors on those routes by one-third.'
            ],
            tools: ['React.js', 'JavaScript', 'Node.js', 'Java/Spring Boot', 'PostgreSQL', 'MySQL', 'HTML/CSS', 'Bootstrap', 'REST APIs'],
            gradient: 'from-blue-500 to-cyan-500'
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
                        5+ years of experience across Telecom (T-Mobile), Banking, and E-commerce development
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
                                        {/* Multiple Projects */}
                                        {exp.projects && (
                                            <div className="mb-3">
                                                <p className="text-sm text-purple-400 font-semibold uppercase tracking-wide mb-2">Key Projects:</p>
                                                {exp.projects.map((project, pIdx) => (
                                                    <div key={pIdx} className="mb-2 pl-3 border-l-2 border-purple-400/30">
                                                        <p className="text-cyan-400 font-medium text-sm">{project.name}</p>
                                                        <p className="text-gray-400 text-sm">{project.description}</p>
                                                    </div>
                                                ))}
                                            </div>
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

                                {/* Description */}
                                {exp.description && (
                                    <p className="text-gray-400 mb-4 text-sm italic border-l-2 border-cyan-500/30 pl-4">
                                        {exp.description}
                                    </p>
                                )}

                                {/* Achievements */}
                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide mb-3">Responsibilities & Achievements</h4>
                                    <ul className="space-y-3">
                                        {exp.achievements.map((achievement, achievementIdx) => (
                                            <li key={achievementIdx} className="flex items-start gap-3 text-gray-300">
                                                <FaCheckCircle className="text-green-400 mt-1 flex-shrink-0" />
                                                <span className="text-sm">{achievement}</span>
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
