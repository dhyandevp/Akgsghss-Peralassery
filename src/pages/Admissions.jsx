import React from 'react';
import Section from '../components/ui/Section';
import PageHeader from '../components/PageHeader';
import { Download, CheckSquare } from 'lucide-react';


export default function Admissions() {
    return (
        <>
            <PageHeader
                title="Admissions"
                description="Join the AKGSGHSS family. Application process and details."
            />


            <Section>
                <div className="max-w-4xl mx-auto">

                    {/* Notice */}
                    <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-r-lg mb-12">
                        <h3 className="font-bold text-lg text-primary-900 mb-2">Admissions Open for 2026-27</h3>
                        <p className="text-primary-800 text-sm">
                            Applications for Standard 8 and Plus One are now being accepted. Please submit before May 31, 2026.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">

                        {/* Process */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 font-heading mb-6">Admission Process</h2>
                            <ol className="relative border-l border-gray-200 ml-3 space-y-8">
                                <Step number="1" title="Online Application" desc="Apply via the HSCAP portal (for Plus One) or School Office." />
                                <Step number="2" title="Verification" desc="Submit original documents for verification upon allotment." />
                                <Step number="3" title="Interview" desc="Candidate interview with parents/guardians." />
                                <Step number="4" title="Confirmation" desc="Fee payment and admission confirmation." />
                            </ol>
                        </div>

                        {/* Documents */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 font-heading mb-6">Required Documents</h2>
                            <ul className="space-y-3">
                                {['Transfer Certificate (TC)', 'Mark List / Grade Card', 'Conduct Certificate', 'Aadhar Card Copy', 'Passport Size Photo'].map((doc, i) => (
                                    <li key={i} className="flex items-center gap-3 bg-gray-50 p-3 rounded border border-gray-100 text-sm text-gray-700">
                                        <CheckSquare size={16} className="text-primary-600" />
                                        {doc}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8">
                                <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors">
                                    <Download size={18} />
                                    Download Prospectus
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}

function Step({ number, title, desc }) {
    return (
        <li className="ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-white rounded-full -left-3 ring-4 ring-white border border-gray-200 text-xs font-bold text-gray-500">
                {number}
            </span>
            <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
        </li>
    );
}
