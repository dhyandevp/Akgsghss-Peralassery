import React from 'react';
import Section from '../components/ui/Section';
import PageHeader from '../components/PageHeader';

export default function Privacy() {
    return (
        <>
            <PageHeader
                title="Privacy Policy"
                description="Our commitment to protecting your personal information."
            />

            <Section>
                <div className="max-w-4xl mx-auto prose prose-lg text-gray-600">
                    <p className="text-sm text-gray-500 mb-8">Effective Date: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

                    <h3>1. Introduction</h3>
                    <p>
                        AKG Smaraka Government Higher Secondary School ("we," "our," or "us") respects your privacy and is committed to protecting the personal information of our students, parents, staff, and website visitors. This Privacy Policy outlines our practices regarding the collection, use, and safeguarding of your information in accordance with Indian laws and educational regulations.
                    </p>

                    <h3>2. Information We Collect</h3>
                    <p>We collect information to provide educational services and improve our communication. This includes:</p>
                    <ul>
                        <li><strong>Personal Identification Information:</strong> Names, dates of birth, admission numbers, contact details (phone, email, address), and guardian information provided voluntarily during admission or inquiry processes.</li>
                        <li><strong>Academic Records:</strong> Grades, attendance, disciplinary records, and other educational data necessary for student evaluation and government reporting.</li>
                        <li><strong>Digital Usage Data:</strong> Non-personal analytics data such as IP addresses, browser types, and access times to monitor website performance and security.</li>
                    </ul>

                    <h3>3. How We Use Your Information</h3>
                    <p>collected data is utilized strictly for institutional and educational purposes:</p>
                    <ul>
                        <li><strong>Educational Administration:</strong> Managing enrollment, attendance, assessment, and certification.</li>
                        <li><strong>Communication:</strong> Sending urgent notifications, academic updates, event alerts, and newsletters to parents and students.</li>
                        <li><strong>Government Compliance:</strong> Submitting required data to the Department of General Education, Government of Kerala, for scholarships, examinations, and statistical purposes.</li>
                        <li><strong>Security:</strong> Ensuring the safety of our digital infrastructure and campus.</li>
                    </ul>

                    <h3>4. Data Protection and Security</h3>
                    <p>
                        We implement robust administrative, technical, and physical security measures to protect your data against unauthorized access, loss, or misuse. Student records are handled with strict confidentiality by authorized personnel only.
                    </p>

                    <h3>5. Information Sharing and Disclosure</h3>
                    <p>
                        <strong>We do not sell, trade, or rent personal identification information to others.</strong> We may share information only in the following circumstances:
                    </p>
                    <ul>
                        <li><strong>Legal Requirements:</strong> To comply with laws, court orders, or government regulations (e.g., reports to the Kerela Education Department).</li>
                        <li><strong>Service Providers:</strong> Restricted access may be granted to trusted third-party service providers (e.g., SMS gateways, IT support) who assist in school operations, bound by confidentiality agreements.</li>
                    </ul>

                    <h3>6. External Links</h3>
                    <p>
                        Our website may contain links to external sites (e.g., Samagra, HSCAP). We are not responsible for the content or privacy practices of these external websites. We encourage you to review their privacy policies.
                    </p>

                    <h3>7. Your Rights</h3>
                    <p>
                        Parents and guardians have the right to request access to their child's educational records and request corrections to inaccurate information, subject to school verification procedures.
                    </p>

                    <h3>8. Contact Us</h3>
                    <p>
                        For any concerns regarding this privacy policy or your data, please contact the school administration:
                    </p>
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 not-prose mt-4">
                        <p className="font-bold text-gray-900">Office of the Principal</p>
                        <p className="text-gray-700">AKG Smaraka Government Higher Secondary School</p>
                        <p className="text-gray-600">Peralassery, Mundalur P.O, Kannur, Kerala - 670622</p>
                        <p className="text-gray-600 mt-2">Email: <a href="mailto:akgsghssperalassery@gmail.com" className="text-primary-700 hover:underline">akgsghssperalassery@gmail.com</a></p>
                    </div>
                </div>
            </Section>
        </>
    );
}
