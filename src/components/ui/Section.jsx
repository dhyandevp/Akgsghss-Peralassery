import React from 'react';
import { cn } from '../../lib/utils';

export default function Section({
    id,
    className,
    children,
    background = 'white'
}) {
    // Strict background map
    const bgColors = {
        white: 'bg-white',
        gray: 'bg-gray-50', // Surface
        red: 'bg-primary-50', // Subtle Pink/Red Tint for emphasis
        dark: 'bg-gray-900 text-white'
    };

    return (
        <section
            id={id}
            className={cn(
                'py-12 md:py-20 w-full',
                bgColors[background],
                className
            )}
        >
            <div className="container mx-auto px-4 md:px-6">
                {children}
            </div>
        </section>
    );
}
