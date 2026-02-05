import React from 'react'; ``
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook, BookOpen } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 text-white mb-2">
                            <span className="font-heading font-bold text-xl uppercase tracking-tight">AKGSGHSS Peralassery</span>
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
                            A premier government institution named after the visionary leader A. K. Gopalan. Dedicated to excellence in education since 1956.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a
                                href="https://www.instagram.com/akgs_ghss_peralassery/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-pink-500 transition-colors"
                                aria-label="Follow us on Instagram"
                            >
                                <Instagram size={24} />
                            </a>
                            <a
                                href="https://www.facebook.com/people/AKGS-GHSS-Peralassery/61558713118715/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-blue-600 transition-colors"
                                aria-label="Follow us on Facebook"
                            >
                                <Facebook size={24} />
                            </a>
                            <a
                                href="https://schoolwiki.in/%E0%B4%8E.%E0%B4%95%E0%B5%86.%E0%B4%9C%E0%B4%BF.%E0%B4%8E%E0%B4%B8%E0%B5%8D_%E0%B4%9C%E0%B4%BF.%E0%B4%8E%E0%B4%9A%E0%B5%8D%E0%B4%9A%E0%B5%8D_%E0%B4%8E%E0%B4%B8%E0%B5%8D_%E0%B4%8E%E0%B4%B8%E0%B5%8D_%E0%B4%AA%E0%B5%86%E0%B4%B0%E0%B4%B3%E0%B4%B6%E0%B5%8D%E0%B4%B6%E0%B5%87%E0%B4%B0%E0%B4%BF"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-green-600 transition-colors"
                                aria-label="View on SchoolWiki"
                                title="SchoolWiki"
                            >
                                <BookOpen size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-4 font-heading uppercase text-sm tracking-widest">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link to="/academics" className="hover:text-white transition-colors">Academics</Link></li>
                            <li><Link to="/admissions" className="hover:text-white transition-colors">Admissions</Link></li>
                            <li><Link to="/facilities" className="hover:text-white transition-colors">Facilities</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold mb-4 font-heading uppercase text-sm tracking-widest">Contact</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-primary-400 shrink-0 mt-0.5" />
                                <span>Peralassery, Mundalur P.O<br />Kannur, Kerala - 670622</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-primary-400 shrink-0" />
                                <span>+91 497 282 2345</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-primary-400 shrink-0" />
                                <span>akgsghssperalassery@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
                        <p>&copy; {currentYear} AKGSGHSS Peralassery. Government of Kerala.</p>
                        <span className="hidden md:inline text-gray-700">|</span>
                        <p className="flex items-center gap-1 opacity-70 hover:opacity-100 transition-opacity">
                            <span className="text-gray-500 font-bold text-[10px] uppercase tracking-widest border border-gray-700 px-2 py-0.5 rounded-full">
                                <a href="https://madewithloveinindia.org" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                    Made with <span aria-label="Love" style={{ color: '#f43f5e' }}>&hearts;</span> in India
                                </a>
                                {' '}by Dhyandev P
                            </span>
                        </p>

                    </div>
                    <div className="flex gap-4">
                        <Link to="/privacy" className="hover:text-gray-300 cursor-pointer">Privacy</Link>
                        <Link to="/terms" className="hover:text-gray-300 cursor-pointer">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
