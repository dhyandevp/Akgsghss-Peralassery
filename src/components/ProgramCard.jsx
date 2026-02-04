import React from 'react';

export default function ProgramCard({ title, desc, icon }) {
    return (
        <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-primary-200">
            <div className="mb-4 bg-gray-50 w-12 h-12 rounded-lg flex items-center justify-center">

                {icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">{title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
        </div>
    );
}
