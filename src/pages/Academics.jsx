import React from 'react';
import Section from '../components/ui/Section';
import PageHeader from '../components/PageHeader';
import StreamCard from '../components/StreamCard';
import { Book, CheckCircle } from 'lucide-react';


export default function Academics() {
    return (
        <>
            <PageHeader
                title="Academic Programs"
                description="Comprehensive curriculum designed for student success."
            />


            <Section>
                <div className="max-w-4xl mx-auto space-y-16">
                    {/* High School */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-700">
                                <Book size={20} />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 font-heading">High School (Class 8-10)</h2>
                        </div>
                        <p className="text-gray-600 mb-8 pl-14">
                            Following the Kerala State Syllabus, we focus on building a strong foundation in core subjects.
                        </p>
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 pl-14">
                            {['Mathematics', 'Basic Science', 'Social Science', 'English', 'Malayalam', 'Hindi', 'IT'].map(sub => (
                                <div key={sub} className="flex items-center gap-2 text-sm text-gray-700 bg-gray-50 p-3 rounded border border-gray-100">
                                    <CheckCircle size={14} className="text-primary-600" /> {sub}
                                </div>
                            ))}
                        </div>
                    </div>

                    <hr className="border-gray-100" />

                    {/* Higher Secondary */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-700">
                                <Book size={20} />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 font-heading">Higher Secondary (+1, +2)</h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6 pl-0 md:pl-14">
                            <StreamCard
                                title="Science"
                                list={['Physics', 'Chemistry', 'Biology', 'Maths', 'Computer Science']}
                            />
                            <StreamCard
                                title="Commerce"
                                list={['Accountancy', 'Business', 'Economics', 'Computer App']}
                            />
                            <StreamCard
                                title="Humanities"
                                list={['History', 'Economics', 'Political Science', 'Sociology']}
                            />
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}


