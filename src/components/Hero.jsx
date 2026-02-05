import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import heroImage from '../assets/images/hero.jpg';


export default function Hero() {
    return (
        <div className="relative w-full min-h-[600px] flex items-center bg-gray-900 border-b border-gray-200">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroImage}
                    alt="School Building"
                    className="w-full h-full object-cover opacity-40"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-primary-800/60" />
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 md:px-6 relative z-10 py-20 text-white">
                <div className="max-w-3xl">
                    <div className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
                        Est. 1956
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6 text-white">
                        We Ensure <br />
                        <span className="text-primary-100">A Better Education.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed max-w-2xl">
                        A premier government institution providing quality education and holistic development for over six decades.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            to="/admissions"
                            className="bg-white text-primary-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                        >
                            Apply for Admission
                            <ArrowRight size={20} />
                        </Link>
                        <Link
                            to="/about"
                            className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-colors flex items-center justify-center"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
