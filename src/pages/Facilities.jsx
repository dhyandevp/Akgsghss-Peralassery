import React from 'react';
import Section from '../components/ui/Section';
import PageHeader from '../components/PageHeader';
import { Monitor, FlaskConical, BookOpen, Trophy, Printer, Presentation, Cpu, FileText, Lightbulb, Bus, Utensils, HeartPulse, UserCheck, ShieldPlus } from 'lucide-react';


import FeatureCard from '../components/FeatureCard';

export default function Facilities() {
    const facilities = [
        {
            title: "40 High-tech Classrooms",
            desc: "All classrooms in the primary section are high-tech, ensuring the best learning environment.",
            icon: Monitor
        },
        {
            title: "Science Labs",
            desc: "Fully equipped Physics, Chemistry, and Biology laboratories for practical learning.",
            icon: FlaskConical
        },
        {
            title: "Library",
            desc: "A vast collection of over 10,000 books, journals, and newspapers.",
            icon: BookOpen
        },
        {
            title: "Sports Ground",
            desc: "Expansive grounds for football, cricket, and athletics training.",
            icon: Trophy
        }
    ];

    return (
        <>
            <PageHeader
                title="Our Facilities"
                description="Providing a supportive environment for holistic development."
            />


            <Section>
                <div className="grid md:grid-cols-2 gap-8">
                    {facilities.map((item, idx) => (
                        <FeatureCard
                            key={idx}
                            icon={item.icon}
                            title={item.title}
                            description={item.desc}
                            className="flex-row gap-6 p-6 items-start"
                            iconBg="bg-primary-50"
                            iconColor="text-primary-700"
                        />
                    ))}
                </div>

                {/* Smart & Digital Learning */}
                <div className="mt-16">
                    <h3 className="text-2xl font-bold text-gray-900 font-heading mb-8 border-l-4 border-blue-500 pl-4">Smart & Digital Learning Facilities</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <FeatureCard
                            icon={Monitor}
                            title="Computer Lab"
                            description="Dedicated computer-aided learning lab for digital skills development."
                            iconColor="text-blue-600"
                            iconBg="bg-white"
                        />
                        <FeatureCard
                            icon={Cpu}
                            title="100+ Functional Desktops & Laptops"
                            description="Available for teaching, practice, and computer education."
                            iconColor="text-purple-600"
                            iconBg="bg-white"
                        />
                        <FeatureCard
                            icon={Presentation}
                            title="Digiboard Classrooms"
                            description="Interactive digital boards for engaging and modern lesson delivery."
                            iconColor="text-orange-600"
                            iconBg="bg-white"
                        />
                        <FeatureCard
                            icon={Printer}
                            title="Printer & Scanner"
                            description="Supporting study material printing and administrative needs."
                            iconColor="text-gray-600"
                            iconBg="bg-white"
                        />
                        <FeatureCard
                            icon={Lightbulb}
                            title="STREAM Lab"
                            description="Integrated Science, Technology, Reading, Engineering, Arts, and Mathematics lab for holistic innovation."
                            iconColor="text-yellow-500"
                            iconBg="bg-white"
                        />
                    </div>
                </div>

                {/* Blended Tech Support */}
                <div className="mt-16 bg-gray-50 rounded-2xl p-8 border border-gray-100">
                    <h3 className="text-2xl font-bold text-gray-900 font-heading mb-6">Blended Tech Support</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="flex gap-4">
                            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-primary-600 shadow-sm shrink-0">
                                <Monitor size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-2 text-gray-900">Computer Science Stream</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">Higher secondary students have the option to specialize in Computer Science, paving the way for advanced technical careers.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-primary-600 shadow-sm shrink-0">
                                <FileText size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-2 text-gray-900">Active Lab Integration</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">Computers are an integral part of the daily curriculum. Regular lab sessions ensure hands-on experience for all students.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Infrastructure & Support */}
                <div className="mt-16 grid md:grid-cols-2 gap-8">
                    {/* School Infrastructure */}
                    <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
                        <h3 className="text-xl font-bold text-gray-900 font-heading mb-6 flex items-center gap-2">
                            <Bus size={24} className="text-primary-600" /> Infrastructure
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex gap-4">
                                <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center shrink-0">
                                    <Utensils size={20} className="text-orange-500" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Modern Kitchen & Dining</h4>
                                    <p className="text-sm text-gray-600">Hygienic food preparation and spacious dining hall for students.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center shrink-0">
                                    <Bus size={20} className="text-blue-500" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">School Transportation</h4>
                                    <p className="text-sm text-gray-600">Two school buses providing connectivity to areas with limited transportation facilities.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Student Care */}
                    <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
                        <h3 className="text-xl font-bold text-gray-900 font-heading mb-6 flex items-center gap-2">
                            <HeartPulse size={24} className="text-red-500" /> Student Care
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex gap-4">
                                <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center shrink-0">
                                    <UserCheck size={20} className="text-green-500" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Resource Teacher</h4>
                                    <p className="text-sm text-gray-600">Daily support for differently-abled students and those with learning difficulties.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center shrink-0">
                                    <ShieldPlus size={20} className="text-red-500" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Medical Support</h4>
                                    <p className="text-sm text-gray-600">Pediatrician services for first aid and health monitoring.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </Section>
        </>
    );
}
