import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook, BookOpen, Heart } from 'lucide-react';

// Configuration Constants for Maintainability
const SCHOOL_INFO = {
    name: "AKGSGHSS Peralassery",
    established: 1956,
    description: "A premier government institution named after the visionary leader A. K. Gopalan. Dedicated to excellence in education since 1956.",
    contact: {
        address: "Peralassery, Mundalur P.O, Kannur, Kerala - 670622",
        phone: "+91 497 282 2345",
        email: "akgsghssperalassery@gmail.com"
    },
    socials: [
        { icon: Instagram, url: "https://www.instagram.com/akgs_ghss_peralassery/", label: "Instagram", colorClass: "hover:text-pink-500" },
        { icon: Facebook, url: "https://www.facebook.com/people/AKGS-GHSS-Peralassery/61558713118715/", label: "Facebook", colorClass: "hover:text-blue-600" },
        { icon: BookOpen, url: "https://schoolwiki.in/AKGSGHSS_Peralassery", label: "SchoolWiki", colorClass: "hover:text-green-600", title: "SchoolWiki" }
    ]
};

const FOOTER_LINKS = [
    { label: "About Us", path: "/about" },
    { label: "Academics", path: "/academics" },
    { label: "Admissions", path: "/admissions" },
    { label: "Facilities", path: "/facilities" },
    { label: "Contact", path: "/contact" }
];

export default function Footer() {
    // Optimization: Calculate year once. Though negligible here, it's a good practice for heavier computations.
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                    {/* Brand Section */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 text-white mb-2">
                            <span className="font-heading font-bold text-xl uppercase tracking-tight">{SCHOOL_INFO.name}</span>
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
                            {SCHOOL_INFO.description}
                        </p>

                        {/* Social Links - Rendered from Config */}
                        <div className="flex gap-4 pt-2">
                            {SCHOOL_INFO.socials.map(({ icon: Icon, url, label, colorClass, title }, index) => (
                                <a
                                    key={index}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`text-gray-400 transition-colors ${colorClass}`}
                                    aria-label={`Follow us on ${label}`}
                                    title={title || label}
                                >
                                    <Icon size={24} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links - DRY Implementation */}
                    <div>
                        <h4 className="text-white font-bold mb-4 font-heading uppercase text-sm tracking-widest">Quick Links</h4>
                        <nav aria-label="Footer Navigation">
                            <ul className="space-y-2 text-sm">
                                {FOOTER_LINKS.map((link) => (
                                    <li key={link.path}>
                                        <Link to={link.path} className="hover:text-white transition-colors">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h4 className="text-white font-bold mb-4 font-heading uppercase text-sm tracking-widest">Contact</h4>
                        <address className="not-italic space-y-4 text-sm">
                            <div className="flex items-start gap-3">
                                <MapPin size={18} className="text-primary-400 shrink-0 mt-0.5" aria-hidden="true" />
                                <span className="whitespace-pre-line">{SCHOOL_INFO.contact.address.replace(', ', '\n')}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone size={18} className="text-primary-400 shrink-0" aria-hidden="true" />
                                <a href={`tel:${SCHOOL_INFO.contact.phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors">
                                    {SCHOOL_INFO.contact.phone}
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail size={18} className="text-primary-400 shrink-0" aria-hidden="true" />
                                <a href={`mailto:${SCHOOL_INFO.contact.email}`} className="hover:text-white transition-colors">
                                    {SCHOOL_INFO.contact.email}
                                </a>
                            </div>
                        </address>
                    </div>
                </div>

                {/* Copyright & Legal */}
                <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
                        <p>&copy; {currentYear} {SCHOOL_INFO.name}. Government of Kerala.</p>
                        <span className="hidden md:inline text-gray-700" aria-hidden="true">|</span>

                        {/* Credits */}
                        <p className="flex items-center gap-1 opacity-70 hover:opacity-100 transition-opacity">
                            <span className="text-gray-500 font-bold text-[10px] uppercase tracking-widest border border-gray-700 px-2 py-0.5 rounded-full flex items-center gap-1">
                                Made with <Heart size={10} className="text-rose-500 fill-current" aria-label="Love" />{' '}
                                <a href="https://linktr.ee/DhyandevRTX" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                    Dhyandev P
                                </a>
                            </span>
                        </p>
                    </div>

                    <nav className="flex gap-4" aria-label="Legal Links">
                        <Link to="/privacy" className="hover:text-gray-300">Privacy</Link>
                        <Link to="/terms" className="hover:text-gray-300">Terms</Link>
                    </nav>
                </div>
            </div>
        </footer>
    );
}
