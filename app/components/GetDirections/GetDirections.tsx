import React from 'react';

interface GetDirectionsProps {
    location: string;
    className?: string;
}

const GetDirections: React.FC<GetDirectionsProps> = ({ location, className = '' }) => {
    const handleGetDirections = () => {
        // Encode the location for the URL
        const encodedLocation = encodeURIComponent(location);

        // Open Google Maps in a new tab with the location
        window.open(
            `https://www.google.com/maps/search/?api=1&query=${encodedLocation}`,
            '_blank'
        );
    };

    return (
        <button
            onClick={handleGetDirections}
            className={`bg-red-500/50 hover:bg-red-600/50 text-white font-semibold py-3 px-8 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/20 flex items-center gap-2 ${className}`}
        >
            <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
            </svg>
            Get Directions
        </button>
    );
};

export default GetDirections; 