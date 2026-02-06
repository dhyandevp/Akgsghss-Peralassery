import React from 'react';
import Hero from '../components/Hero';

import Section from '../components/ui/Section';
import StatItem from '../components/StatItem';
import ProgramCard from '../components/ProgramCard';


import { BookOpen, Users, Trophy, GraduationCap, ArrowRight, Star } from 'lucide-react';

import { Link } from 'react-router-dom';
import campusLifeImage from '../assets/images/school images/campus-event.png';


export default function Home() {
    return (
        <>
            <Hero />

            {/* Intro Section */}
            <Section background="white">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="text-primary-700 font-bold tracking-wider text-sm uppercase mb-2 block">Welcome to AKGSGHSS</span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 font-heading leading-tight">
                            A Legacy of Educational Excellence
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                            Named after the visionary leader A. K. Gopalan, AKG Smaraka Government Higher Secondary School has stood as a beacon of knowledge in Peralassery for over 60 years.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-8 border-l-4 border-primary-200 pl-4 italic">
                            "We are committed to providing an inclusive environment where academic excellence meets character building."
                        </p>
                        <Link to="/about" className="text-primary-700 font-bold hover:text-primary-900 transition-colors inline-flex items-center gap-2 border-b-2 border-primary-100 hover:border-primary-700 pb-1">
                            Read our History <ArrowRight size={18} />
                        </Link>
                    </div>
                    <div>
                        <img
                            src={campusLifeImage}
                            alt="Campus Life"
                            loading="lazy"
                            width="1200"
                            height="675"
                            className="rounded-2xl shadow-lg w-full object-cover aspect-video bg-gray-100"
                        />

                    </div>

                </div>
            </Section>

            {/* Stats Bar */}
            <div className="bg-primary-900 text-white py-16">
                <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-white/10 md:divide-x">
                    <StatItem number="3000+" label="Students" />
                    <StatItem number="100+" label="Faculty Members" />
                    <StatItem number="1956" label="Established" />
                    <StatItem number="100%" label="Pass Percentage" />
                </div>
            </div>

            {/* Academic Pillars */}
            <Section background="gray">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 font-heading mb-4">Academic Programs</h2>
                    <p className="text-gray-600">
                        Comprehensive education pathways designed to empower students for future success in Science, Humanities, and Commerce.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <ProgramCard
                        title="Science Stream"
                        desc="Physics, Chemistry, Biology, Maths, Computer Science."
                        icon={<Star className="text-primary-600" />}
                    />
                    <ProgramCard
                        title="Commerce Stream"
                        desc="Accountancy, Business Studies, Economics, Computer Application."
                        icon={<Star className="text-gray-600" />}
                    />
                    <ProgramCard
                        title="Humanities Stream"
                        desc="History, Economics, Political Science, Sociology."
                        icon={<Star className="text-primary-400" />}
                    />
                </div>



                <div className="text-center mt-12">
                    <Link to="/academics" className="inline-block bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-bold hover:border-primary-600 hover:text-primary-700 transition-colors shadow-sm">
                        View Full Curriculum
                    </Link>
                </div>
            </Section>

            {/* CTA */}
            <Section background="red" className="text-center">
                <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-primary-100">
                    <GraduationCap className="w-12 h-12 text-primary-700 mx-auto mb-6" />
                    <h2 className="text-3xl font-bold text-gray-900 font-heading mb-4">
                        Admissions Open for {new Date().getFullYear()}-{(new Date().getFullYear() + 1).toString().slice(-2)}
                    </h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Secure your child's future with quality government education. Applications are now being accepted for Class 5 to 7, Class 8, and Plus One.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link to="/admissions" className="bg-primary-700 text-white px-8 py-3 rounded-lg font-bold hover:bg-primary-800 transition-colors shadow-sm">
                            Apply Now
                        </Link>
                        <Link to="/contact" className="bg-white border border-gray-200 text-gray-700 px-8 py-3 rounded-lg font-bold hover:bg-gray-50 transition-colors">
                            Contact Office
                        </Link>
                    </div>
                </div>
            </Section>
        </>
    );
}


