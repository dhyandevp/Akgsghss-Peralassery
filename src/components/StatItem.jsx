import React from 'react';

export default function StatItem({ number, label }) {
    return (
        <div className="p-4">
            <div className="text-3xl md:text-4xl font-bold font-heading mb-1 text-white">{number}</div>
            <div className="text-primary-200 text-sm font-medium uppercase tracking-wider">{label}</div>
        </div>
    );
}
