import React from 'react';
import Section from '../components/ui/Section';
import PageHeader from '../components/PageHeader';
import { Instagram, ExternalLink } from 'lucide-react';
import { InstagramEmbed } from 'react-social-media-embed';

export default function Gallery() {
    // ----------------------------------------------------------------------------------
    // INSTRUCTIONS TO ADD POSTS:
    // 1. Go to the school's Instagram (https://www.instagram.com/akgs_ghss_peralassery/)
    // 2. Click on a post you want to show.
    // 3. Copy the URL from the browser address bar (e.g., https://www.instagram.com/p/Cyl3.../)
    // 4. Paste it inside the quotes below. Add a comma after each line.
    // ----------------------------------------------------------------------------------
    const instagramPosts = [
        "https://www.instagram.com/p/DTX89f_kpNR/",
        "https://www.instagram.com/p/DRSZ-A2ErHd/",
        "https://www.instagram.com/p/DTgEJzeksu6/",
    ];

    return (
        <>
            <PageHeader
                title="Social Gallery"
                description="Follow our latest updates on Instagram."
            />

            <Section>
                <div className="max-w-6xl mx-auto">
                    {/* Follow Card */}
                    <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 rounded-2xl p-8 mb-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <Instagram size={32} />
                                <h2 className="text-2xl font-bold">@akgs_ghss_peralassery</h2>
                            </div>
                            <p className="opacity-90 max-w-lg">
                                Join our digital community! Follow us for real-time updates, event photos, and student achievements.
                            </p>
                        </div>
                        <a
                            href="https://www.instagram.com/akgs_ghss_peralassery/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-pink-600 px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-gray-50 transition-colors shadow-sm whitespace-nowrap"
                        >
                            Visit Profile <ExternalLink size={18} />
                        </a>
                    </div>

                    {/* Posts Grid */}
                    {instagramPosts.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                            {instagramPosts.map((url, index) => (
                                <div key={index} className="w-full flex justify-center">
                                    <InstagramEmbed url={url} width={328} />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12 bg-gray-50 rounded-2xl border border-dashed border-gray-300">
                            <Instagram className="mx-auto h-12 w-12 text-gray-300 mb-4" />
                            <h3 className="text-lg font-medium text-gray-900">Curated Gallery</h3>
                            <p className="text-gray-500 mt-1">Check back soon for our featured updates!</p>
                        </div>
                    )}
                </div>
            </Section>
        </>
    );
}
