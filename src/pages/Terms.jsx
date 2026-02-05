import React from 'react';
import Section from '../components/ui/Section';
import PageHeader from '../components/PageHeader';

export default function Terms() {
    return (
        <>
            <PageHeader
                title="Terms of Service"
                description="Guidelines for using our website and services."
            />

            <Section>
                <div className="max-w-4xl mx-auto prose prose-lg text-gray-600">
                    <p className="text-sm text-gray-500 mb-8">Effective Date: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

                    <h3>1. Agreement to Terms</h3>
                    <p>
                        These Terms of Service ("Terms") utilize the official website of AKG Smaraka Government Higher Secondary School ("the School"). By accessing or using this website, you agree to be bound by these Terms and all applicable laws and regulations governing educational institutions in Kerala.
                    </p>

                    <h3>2. Use License</h3>
                    <p>
                        Permission is granted to temporarily download one copy of the materials (information, admission forms, or software) on the School's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license, you may not:
                    </p>
                    <ul>
                        <li>Modify or copy the materials.</li>
                        <li>Use the materials for any commercial purpose or public display.</li>
                        <li>Attempt to decompile or reverse engineer any software contained on the website.</li>
                        <li>Remove any copyright or other proprietary notations from the materials.</li>
                    </ul>

                    <h3>3. Disclaimer</h3>
                    <p>
                        The materials on the School's website are provided on an 'as is' basis. The School makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property. Further, the School does not warrant the accuracy of information regarding exam schedules or results found here; official government notifications should always be considered final.
                    </p>

                    <h3>4. Code of Conduct</h3>
                    <p>
                        Users are prohibited from using the website to transmit any material that is unlawful, harmful, threatening, abusive, harassing, defamatory, or otherwise objectionable. Students accessing the site are expected to adhere to the school's disciplinary code of conduct in their digital interactions.
                    </p>

                    <h3>5. Limitations</h3>
                    <p>
                        In no event shall AKG Smaraka Government Higher Secondary School or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the School's website.
                    </p>

                    <h3>6. Accuracy of Materials</h3>
                    <p>
                        The materials appearing on the website could include technical, typographical, or photographic errors. The School does not warrant that any of the materials on its website are accurate, complete, or current. We may make changes to the materials contained on its website at any time without notice.
                    </p>

                    <h3>7. Governing Law</h3>
                    <p>
                        These terms and conditions are governed by and construed in accordance with the laws of the State of Kerala and the Government of India, and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                    </p>
                </div>
            </Section>
        </>
    );
}
