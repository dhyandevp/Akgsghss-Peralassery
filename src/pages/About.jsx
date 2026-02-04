import React from 'react';
import Section from '../components/ui/Section';
import PageHeader from '../components/PageHeader';
import { Target, Users } from 'lucide-react';


export default function About() {
    return (
        <>
            <PageHeader
                title="About Our Institution"
                description="A legacy of quality public education since 1956."
            />


            <Section>
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <div className="prose prose-lg text-gray-600">
                        <h2 className="text-2xl font-bold text-gray-900 font-heading mb-6">Our History</h2>
                        <p className="mb-4">
                            AKG Smaraka Government Higher Secondary School, Peralassery, stands as a proud testament to the educational aspirations of the Kannur district. Established in 1956, the institution has nurtured generations of students, empowering them with knowledge, values, and discipline.
                        </p>
                        <p className="mb-4">
                            The school is named after the legendary Indian leader <strong>A. K. Gopalan (AKG)</strong>, whose vision for a progressive and educated society continues to inspire our mission.
                        </p>
                    </div>
                    <div>
                        <div className="bg-primary-50 p-8 rounded-2xl border border-primary-100">
                            <h3 className="text-xl font-bold text-primary-900 mb-6 font-heading">Mission & Vision</h3>

                            <div className="mb-6">
                                <div className="flex items-center gap-2 mb-2">
                                    <Target className="text-primary-600" size={20} />
                                    <h4 className="font-bold text-gray-900">Our Mission</h4>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    To provide high-quality, value-based education that empowers students to reach their full potential and become responsible citizens.
                                </p>
                            </div>

                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <Users className="text-primary-600" size={20} />
                                    <h4 className="font-bold text-gray-900">Our Vision</h4>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    To be a center of excellence known for academic achievements, holistic development, and inclusive growth.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}
