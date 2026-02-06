import React from 'react';
import { cn } from '../lib/utils';

export default function FeatureCard({ icon: Icon, title, description, className, iconColor = "text-primary-600", iconBg = "bg-primary-50" }) {
    return (
        <div className={cn("bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow", className)}>
            {Icon && (
                <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center shrink-0 mb-4", iconBg, iconColor)}>
                    <Icon size={24} />
                </div>
            )}
            <h4 className="font-bold text-lg mb-2 text-gray-900 font-heading">{title}</h4>
            <p className="text-sm text-gray-600 leading-relaxed flex-grow">{description}</p>
        </div>
    );
}
