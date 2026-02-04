import React from 'react';
import Section from '../components/ui/Section';
import PageHeader from '../components/PageHeader';
import { MapPin, Phone, Mail, Send } from 'lucide-react';



export default function Contact() {
    return (
        <>
            <PageHeader
                title="Contact Us"
                description="Get in touch with the school administration."
            />


            <Section>
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Info */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 font-heading mb-6">School Office</h3>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary-50 rounded flex items-center justify-center text-primary-700 shrink-0">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-sm">Address</h4>
                                        <p className="text-gray-600 text-sm mt-1">
                                            AKG Smaraka Govt. Higher Secondary School<br />
                                            Peralassery, Mundalur P.O<br />
                                            Kannur, Kerala - 670622
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary-50 rounded flex items-center justify-center text-primary-700 shrink-0">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-sm">Phone</h4>
                                        <p className="text-gray-600 text-sm mt-1">+91 497 282 2345</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-10 h-10 bg-primary-50 rounded flex items-center justify-center text-primary-700 shrink-0">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-sm">Email</h4>
                                        <p className="text-gray-600 text-sm mt-1">akgsghssperalassery@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="h-64 bg-gray-100 rounded-xl overflow-hidden border border-gray-200">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124944.3735071167!2d75.46743916719818!3d11.83984950346366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba42618991f81d3%3A0xc3b5380536c47285!2sAKGSGHSS%20Peralassery!5e0!3m2!1sen!2sin!4v1708761234567!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                        <h3 className="text-xl font-bold text-gray-900 font-heading mb-6">Send Message</h3>
                        <form className="space-y-4" onSubmit={(e) => {
                            e.preventDefault();
                            const formData = new FormData(e.target);
                            const subject = `Inquiry from ${formData.get('firstName')} ${formData.get('lastName')}`;
                            const body = `${formData.get('message')}\n\nFrom: ${formData.get('email')}`;
                            window.location.href = `mailto:akgsghssperalassery@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                        }}>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-gray-700 uppercase">First Name</label>
                                    <input name="firstName" type="text" required className="w-full p-3 bg-gray-50 border border-gray-200 rounded focus:border-primary-500 focus:ring-1 focus:ring-primary-200 outline-none text-sm transition-all" />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-gray-700 uppercase">Last Name</label>
                                    <input name="lastName" type="text" required className="w-full p-3 bg-gray-50 border border-gray-200 rounded focus:border-primary-500 focus:ring-1 focus:ring-primary-200 outline-none text-sm transition-all" />
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs font-bold text-gray-700 uppercase">Email</label>
                                <input name="email" type="email" required className="w-full p-3 bg-gray-50 border border-gray-200 rounded focus:border-primary-500 focus:ring-1 focus:ring-primary-200 outline-none text-sm transition-all" />
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs font-bold text-gray-700 uppercase">Message</label>
                                <textarea name="message" rows="4" required className="w-full p-3 bg-gray-50 border border-gray-200 rounded focus:border-primary-500 focus:ring-1 focus:ring-primary-200 outline-none text-sm transition-all"></textarea>
                            </div>

                            <button type="submit" className="w-full py-3 bg-primary-700 text-white rounded font-bold hover:bg-primary-800 transition-colors flex items-center justify-center gap-2">
                                <Send size={18} /> Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </Section>
        </>
    );
}
