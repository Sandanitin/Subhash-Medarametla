import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaLinkedin, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form submitted:', formData);
        alert('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const contactInfo = [
        {
            icon: <FaPhone className="text-2xl" />,
            label: 'Phone',
            value: '+1 (314) 320-6694',
            link: 'tel:+13143206694',
            gradient: 'from-green-500 to-teal-500'
        },
        {
            icon: <FaEnvelope className="text-2xl" />,
            label: 'Email',
            value: 'subhashaj05@gmail.com',
            link: 'mailto:subhashaj05@gmail.com',
            gradient: 'from-blue-500 to-cyan-500'
        },
        {
            icon: <FaLinkedin className="text-2xl" />,
            label: 'LinkedIn',
            value: 'linkedin.com/in/subhash03',
            link: 'https://www.linkedin.com/in/subhash03',
            gradient: 'from-purple-500 to-pink-500'
        },
        {
            icon: <FaMapMarkerAlt className="text-2xl" />,
            label: 'Location',
            value: 'St. Louis, MO | Open to Relocate',
            link: null,
            gradient: 'from-orange-500 to-red-500'
        }
    ];

    return (
        <section id="contact" className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="section-subtitle">
                        Looking for a full-stack role building end-to-end features with a practical AI edge
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-3xl font-bold text-white mb-8">Contact Information</h3>

                        <div className="space-y-6 mb-8">
                            {contactInfo.map((info, idx) => (
                                info.link ? (
                                    <a
                                        key={idx}
                                        href={info.link}
                                        target={info.link.startsWith('http') ? '_blank' : undefined}
                                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                                        className="glass-card p-6 flex items-center gap-4 hover:scale-105 transition-transform duration-300 block"
                                    >
                                        <div className={`icon-wrapper bg-gradient-to-r ${info.gradient} p-4`}>
                                            {info.icon}
                                        </div>
                                        <div>
                                            <div className="text-gray-400 text-sm mb-1">{info.label}</div>
                                            <div className="text-white font-semibold">{info.value}</div>
                                        </div>
                                    </a>
                                ) : (
                                    <div
                                        key={idx}
                                        className="glass-card p-6 flex items-center gap-4"
                                    >
                                        <div className={`icon-wrapper bg-gradient-to-r ${info.gradient} p-4`}>
                                            {info.icon}
                                        </div>
                                        <div>
                                            <div className="text-gray-400 text-sm mb-1">{info.label}</div>
                                            <div className="text-white font-semibold">{info.value}</div>
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>

                        {/* Quick Facts */}
                        <div className="glass-card p-8 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-500/30">
                            <h4 className="text-xl font-bold text-white mb-3">💡 Quick Facts</h4>
                            <ul className="space-y-2 text-gray-300">
                                <li>✨ 5+ years in Software Development</li>
                                <li>🏢 Experience: T-Mobile, C2N IT Services</li>
                                <li>🏆 Full-Stack & AI Integration Specialist</li>
                                <li>📚 Master's in Information Systems (Saint Louis University)</li>
                                <li>🌍 Telecom, Banking & E-Commerce domains</li>
                                <li>🤖 Focused on LLMs, RAG & AI-driven solutions</li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="glass-card p-8">
                            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors duration-300"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors duration-300"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-gray-300 mb-2 font-medium">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors duration-300"
                                        placeholder="Job Opportunity / Collaboration"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors duration-300 resize-none"
                                        placeholder="Tell me about the opportunity or project..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="btn-primary w-full flex items-center justify-center gap-2"
                                >
                                    <FaPaperPlane />
                                    <span>Send Message</span>
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
