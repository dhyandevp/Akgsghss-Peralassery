import React from 'react';
import { Download, CheckSquare } from 'lucide-react';
import heroImage from '../assets/images/hero.jpg';
import annualDayImage from '../assets/images/annual-day.jpg';
import scienceExhibitionImage from '../assets/images/science-exhibition.jpg';
import digiClassroomImage from '../assets/images/digi-classroom.jpg';
import footballTeamImage from '../assets/images/football-team.jpg';
import chemistryLabImage from '../assets/images/chemistry-lab.jpg';

import Section from '../components/ui/Section';
import PageHeader from '../components/PageHeader';


const images = [
    { src: heroImage, caption: "Main Campus Block" },
    { src: annualDayImage, caption: "Annual Day 2025" },
    { src: scienceExhibitionImage, caption: "Science Exhibition" },
    { src: digiClassroomImage, caption: "Digi-Classroom" },
    { src: footballTeamImage, caption: "School Football Team" },
    { src: chemistryLabImage, caption: "Chemistry Lab" },
];

export default function Gallery() {
    return (
        <>
            <PageHeader
                title="Photo Gallery"
                description="Glimpses of campus life and events."
            />


            <Section>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {images.map((img, index) => (
                        <div key={index} className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 border border-gray-200">
                            <img
                                src={img.src}
                                alt={img.caption}
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-x-0 bottom-0 bg-gray-900/80 p-4">
                                <p className="text-white text-sm font-medium text-center">{img.caption}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </Section>
        </>
    );
}
