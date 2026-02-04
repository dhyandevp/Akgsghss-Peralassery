import React from 'react';

export default function StreamCard({ title, list }) {
    return (
        <div className="border border-gray-200 rounded-xl p-6 hover:border-primary-200">
            <h3 className="font-bold text-lg text-gray-900 mb-4">{title}</h3>

            <ul className="space-y-2">
                {list.map(item => (
                    <li key={item} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-1.5 shrink-0" />
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}
