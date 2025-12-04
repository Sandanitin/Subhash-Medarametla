import React from 'react';
import { FaHeart, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: <FaLinkedin />, link: '#', name: 'LinkedIn' },
        { icon: <FaGithub />, link: '#', name: 'GitHub' },

    ];

    return (
        <footer className="bg-gradient-to-b from-transparent to-gray-900/50 py-12 px-4 border-t border-gray-800">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Copyright */}
                    <div className="text-center md:text-left">
                        <p className="text-gray-400">
                            © 2025 <span className="gradient-text font-semibold">Subhash Medarametla</span>. All rights reserved.
                        </p>
                        <p className="text-gray-500 text-sm mt-1">
                            Designed and Developed by{" "}
                            <a
                                href="https://www.vikrin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-cyan-400 font-semibold hover:underline"
                            >
                                Vikrin
                            </a>
                        </p>

                    </div>

                    {/* Social Links */}
                    <div className="flex gap-4">
                        {socialLinks.map((social, idx) => (
                            <a
                                key={idx}
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 hover:scale-110 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 hover:text-white transition-all duration-300"
                                aria-label={social.name}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Back to Top */}
                <div className="text-center mt-8">
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                    >
                        Back to Top ↑
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
