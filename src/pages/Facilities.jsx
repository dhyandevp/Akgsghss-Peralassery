import React from 'react';
import Section from '../components/ui/Section';
import PageHeader from '../components/PageHeader';
import { Monitor, FlaskConical, BookOpen, Trophy } from 'lucide-react';


export default function Facilities() {
    const facilities = [
        {
            title: "Smart Classrooms",
            desc: "Modern technology-enabled classrooms aimed at fostering a digital learning environment.",
            icon: <Monitor />
        },
        {
            title: "Science Labs",
            desc: "Fully equipped Physics, Chemistry, and Biology laboratories for practical learning.",
            icon: <FlaskConical />
        },
        {
            title: "Library",
            desc: "A vast collection of over 10,000 books, journals, and newspapers.",
            icon: <BookOpen />
        },
        {
            title: "Sports Ground",
            desc: "Expansive grounds for football, cricket, and athletics training.",
            icon: <Trophy />
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
                        <div key={idx} className="flex gap-6 p-6 border border-gray-100 rounded-xl hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center text-primary-700 shrink-0">
                                {React.cloneElement(item.icon, { size: 24 })}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 font-heading mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
        </>
    );
}
