import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { Menu, X, GraduationCap } from 'lucide-react';
import { cn } from '../lib/utils';



const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Academics', path: '/academics' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 h-[80px] flex items-center shadow-sm transition-all duration-300">
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">

                {/* Brand / Logo */}
                <NavLink to="/" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-primary-700 rounded-lg flex items-center justify-center text-white shrink-0 shadow-sm group-hover:bg-primary-800 transition-colors">
                        <GraduationCap size={24} />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-heading font-bold text-gray-900 text-sm md:text-lg leading-tight uppercase tracking-tight">
                            AKGSGHSS Peralassery
                        </span>
                        <span className="text-[10px] md:text-xs font-medium text-primary-700 tracking-wider">
                            Government Of Kerala | Est. 1956
                        </span>
                    </div>
                </NavLink>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-1">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) => cn(
                                "px-4 py-2 text-sm font-medium rounded-md transition-all duration-200",
                                isActive
                                    ? "text-primary-700 bg-primary-50 font-semibold"
                                    : "text-gray-600 hover:text-primary-700 hover:bg-gray-50"
                            )}
                        >
                            {item.name}
                        </NavLink>
                    ))}
                    <div className="w-px h-6 bg-gray-200 mx-2" />
                    <NavLink
                        to="/admissions"
                        className="bg-primary-700 hover:bg-primary-800 text-white px-5 py-2 rounded-md text-sm font-bold shadow-sm transition-all active:scale-95 hover:shadow-md"
                    >
                        Admission Open
                    </NavLink>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
                    aria-label="Toggle Menu"
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="absolute top-[80px] left-0 right-0 bg-white border-b border-gray-200 shadow-xl lg:hidden overflow-hidden"
                >
                    <div className="p-4 flex flex-col gap-2 max-h-[calc(100vh-80px)] overflow-y-auto pb-8">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={({ isActive }) => cn(
                                    "px-4 py-4 text-base font-medium rounded-lg transition-colors flex items-center justify-between",
                                    isActive
                                        ? "text-primary-700 bg-primary-50"
                                        : "text-gray-600 hover:bg-gray-50"
                                )}
                            >
                                {item.name}
                                {/* Chevron or indicator could go here */}
                            </NavLink>
                        ))}
                        <hr className="border-gray-100 my-2" />
                        <NavLink
                            to="/admissions"
                            onClick={() => setIsMobileMenuOpen(false)}

                            className="w-full text-center bg-primary-700 active:bg-primary-800 text-white py-4 rounded-lg font-bold shadow-sm"
                        >
                            Admission Open
                        </NavLink>
                    </div>
                </div>
            )}

        </header>
    );
}
