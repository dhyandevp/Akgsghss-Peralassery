import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

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
                                Made with love by Dhyandev P
                            </span>
                        </p>

                    </div>
                    <div className="flex gap-4">
                        <span className="hover:text-gray-300 cursor-pointer">Privacy</span>
                        <span className="hover:text-gray-300 cursor-pointer">Terms</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
