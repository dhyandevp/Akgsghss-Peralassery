import React from 'react';

export default function PageHeader({ title, description }) {
    return (
        <div className="bg-gray-50 py-16 border-b border-gray-200">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 font-heading mb-4">{title}</h1>
                <p className="text-gray-500 max-w-2xl mx-auto">{description}</p>
            </div>
        </div>
    );
}
