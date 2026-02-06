import React from 'react';
import Section from '../components/ui/Section';
import FeatureCard from '../components/FeatureCard';
import PageHeader from '../components/PageHeader';
import StreamCard from '../components/StreamCard';
import { Book, CheckCircle, Leaf, FlaskConical, Calculator, Globe, Palette, Music, HeartHandshake, Zap, Award } from 'lucide-react';

import nssLogo from '../assets/images/clubs/nss-symbol.png';
import nccLogo from '../assets/images/clubs/ncc-seeklogo.png';
import scoutsLogo from '../assets/images/clubs/960px-bharat-scouts-and-guides.png';
import spcLogo from '../assets/images/clubs/student-police-cadet-kerala-logo.png';
import littleKitesLogo from '../assets/images/clubs/47-473560_little-kites-little-kites-it-club.png';
import jrcLogo from '../assets/images/clubs/jrc.png';


export default function Academics() {
    return (
        <>
            <PageHeader
                title="Academic Programs"
                description="Comprehensive curriculum designed for student success."
            />


            <Section>
                <div className="max-w-4xl mx-auto space-y-16">
                    {/* Upper Primary */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-700">
                                <Book size={20} />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 font-heading">Upper Primary (Class 5-7)</h2>
                        </div>
                        <p className="text-gray-600 mb-8 pl-14">
                            Building a strong academic foundation through interactive learning and skill development.
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
                            {['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Social Science', 'English', 'Malayalam', 'Hindi', 'IT'].map(sub => (
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

            {/* Co-curricular Activities */}
            <Section background="gray">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-3 mb-10">
                        <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-700">
                            <Book size={20} />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 font-heading">Co-curricular Activities</h2>
                    </div>

                    <div className="space-y-8">
                        {/* Club Item */}
                        <FeatureCard
                            icon={() => <img src={nssLogo} alt="NSS Logo" className="w-full h-full object-contain" />}
                            title="National Service Scheme (NSS)"
                            description="Active in 11th and 12th classes, NSS provides opportunities for community service, including special camps, tutoring underprivileged children, and disaster management training. It instills a sense of social responsibility and service."
                            className="flex-col md:flex-row gap-6 items-start"
                            iconBg="bg-gray-50 h-24 w-24 p-2"
                        />

                        {/* Club Item */}
                        <FeatureCard
                            icon={() => <img src={nccLogo} alt="NCC Logo" className="w-full h-full object-contain" />}
                            title="National Cadet Corps (NCC)"
                            description="Includes both Army and Navy wings. Instilling discipline, patriotism, and leadership. 300 children joining 8th grade are enrolled in NCC and Scouts & Guides annually."
                            className="flex-col md:flex-row gap-6 items-start"
                            iconBg="bg-gray-50 h-24 w-24 p-2"
                        />

                        {/* Club Item */}
                        <FeatureCard
                            icon={() => <img src={scoutsLogo} alt="Scouts and Guides Logo" className="w-full h-full object-contain" />}
                            title="Bharat Scouts and Guides"
                            description="A prominent youth movement focusing on character building, self-discipline, and social service through activities like camping, pioneering, and community welfare. We aim to develop young people into responsible citizens."
                            className="flex-col md:flex-row gap-6 items-start"
                            iconBg="bg-gray-50 h-24 w-24 p-2"
                        />

                        {/* Club Item */}
                        <FeatureCard
                            icon={() => <img src={spcLogo} alt="SPC Logo" className="w-full h-full object-contain" />}
                            title="Student Police Cadet (SPC)"
                            description="A youth development initiative preparing students to be future leaders who respect the law, practice civic sense, and are empathetic to society. Training involves physical fitness, parade, and study classes on law and citizenship."
                            className="flex-col md:flex-row gap-6 items-start"
                            iconBg="bg-gray-50 h-24 w-24 p-2"
                        />

                        {/* Club Item */}
                        <FeatureCard
                            icon={() => <img src={littleKitesLogo} alt="Little Kites Logo" className="w-full h-full object-contain" />}
                            title="Little KITEs IT Club"
                            description="Kerala's largest student IT network. We focus on ICT enabled education, training students in animation, programming, robotics, IoT, and language computing, fostering a culture of innovation and digital literacy."
                            className="flex-col md:flex-row gap-6 items-start"
                            iconBg="bg-gray-50 h-24 w-24 p-2"
                        />

                        {/* Club Item */}
                        <FeatureCard
                            icon={() => <img src={jrcLogo} alt="Junior Red Cross Logo" className="w-full h-full object-contain" />}
                            title="Junior Red Cross (JRC)"
                            description="A humanitarian movement guided by the principles of health, service, and friendship. JRC members engage in first aid training, visits to orphanages, and various community service activities to foster empathy and social responsibility."
                            className="flex-col md:flex-row gap-6 items-start"
                            iconBg="bg-gray-50 h-24 w-24 p-2"
                        />

                    </div>


                    {/* Subject Clubs Grid */}
                    <div className="mt-16">
                        <h3 className="text-xl font-bold text-gray-900 mb-8 font-heading border-l-4 border-primary-500 pl-4">Subject & Interest Clubs</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

                            {/* Eco Club */}
                            <FeatureCard
                                icon={Leaf}
                                title="Eco Club"
                                description="Promoting environmental awareness, planting trees, and maintaining a plastic-free campus."
                                iconBg="bg-green-100"
                                iconColor="text-green-600"
                            />

                            {/* Science Club */}
                            <FeatureCard
                                icon={FlaskConical}
                                title="Science Club"
                                description="Fostering scientific temper through experiments, science fairs, and observation days."
                                iconBg="bg-blue-100"
                                iconColor="text-blue-600"
                            />

                            {/* Maths Club */}
                            <FeatureCard
                                icon={Calculator}
                                title="Maths Club"
                                description="Making mathematics fun through puzzles, quizzes, logic games, and celebrating Pi Day."
                                iconBg="bg-purple-100"
                                iconColor="text-purple-600"
                            />

                            {/* Social Science Club */}
                            <FeatureCard
                                icon={Globe}
                                title="Social Science Club"
                                description="Exploring history, heritage, and civics through field trips, exhibitions, and debates."
                                iconBg="bg-orange-100"
                                iconColor="text-orange-600"
                            />

                            {/* Arts & Literature Club */}
                            <FeatureCard
                                icon={Palette}
                                title="Arts & Literature Club"
                                description="Nurturing creativity and expression through painting, writing, reading, and cultural events."
                                iconBg="bg-pink-100"
                                iconColor="text-pink-600"
                            />

                            {/* Hindi Club */}
                            <FeatureCard
                                icon={() => <span className="font-bold text-xl">ह</span>}
                                title="Hindi Club"
                                description="Active since June 28 with 95+ members. Led by Shakuntala Teacher, organizing various language programs."
                                iconBg="bg-yellow-100"
                                iconColor="text-yellow-600"
                            />

                            {/* Vidyarangam */}
                            <FeatureCard
                                icon={Book}
                                title="Vidyarangam"
                                description="A dedicated platform for arts and literature, fostering creative talents and literary appreciation among students."
                                iconBg="bg-indigo-100"
                                iconColor="text-indigo-600"
                            />

                        </div>
                    </div>
                </div>
            </Section>

            {/* Student Development */}
            <Section background="gray" className="pt-0 md:pt-0">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-3 mb-10">
                        <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-700">
                            <Zap size={20} />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 font-heading">Holistic Student Development</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Training Card */}
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow">
                            <h4 className="font-bold text-xl mb-6 text-gray-900 flex items-center gap-3 border-b border-gray-100 pb-4">
                                <Award className="text-yellow-500" size={24} /> Training & Excellence
                            </h4>
                            <ul className="space-y-4 text-gray-600 flex-grow">
                                <li className="flex items-start gap-3">
                                    <CheckCircle size={18} className="text-green-500 mt-1 shrink-0" />
                                    <span><strong>Special Training:</strong> Roller Skating, Yoga, Karate, Music, and Instrumental Music training.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle size={18} className="text-green-500 mt-1 shrink-0" />
                                    <span><strong>Exam Prep:</strong> Dedicated training for USS and NMMS examinations.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle size={18} className="text-green-500 mt-1 shrink-0" />
                                    <span><strong>Competitions:</strong> Best practice in quiz competitions and state-level excellence in art, sports, and science fairs.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Care Card */}
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow">
                            <h4 className="font-bold text-xl mb-6 text-gray-900 flex items-center gap-3 border-b border-gray-100 pb-4">
                                <HeartHandshake className="text-pink-500" size={24} /> Care & Support
                            </h4>
                            <ul className="space-y-4 text-gray-600 flex-grow">
                                <li className="flex items-start gap-3">
                                    <CheckCircle size={18} className="text-green-500 mt-1 shrink-0" />
                                    <span><strong>Counseling:</strong> Full-time service of student counselors to resolve children's mental conflicts.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle size={18} className="text-green-500 mt-1 shrink-0" />
                                    <span><strong>Inclusive Education:</strong> Daily service of a Resource Teacher for children with disabilities and learning difficulties.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}


