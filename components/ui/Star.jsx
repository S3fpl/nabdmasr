import React from "react";

export const Star = (props) => (
    <svg
        className="coolshapes star-12"
        height="400"
        width="400"
        fill="none"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <g clipPath="url(#cs_clip_1_star-12)">
            <mask
                height="200"
                id="cs_mask_1_star-12"
                style={{ maskType: "alpha" }}
                width="200"
                x="0"
                y="0"
                maskUnits="userSpaceOnUse"
            >
                <path
                    d="M100 200l-14.412-72.059L45 155l27.059-40.588L0 100l72.059-14.412L44.999 45l40.59 27.059L100 0l14.412 72.058L155 45l-27.059 40.588L200 100l-72.059 14.412L155 155l-40.588-27.059L100 200z"
                    fill="#fff"
                />
            </mask>
            <g mask="url(#cs_mask_1_star-12)">
                <rect width="200" height="200" fill="#ff0000" />
                <rect width="200" height="200" fill="url(#paint0_radial)" />
                <rect width="200" height="200" fill="url(#paint1_radial)" />
            </g>
        </g>
        <defs>
            <radialGradient id="paint0_radial" cx="0" cy="0" gradientTransform="rotate(45) scale(200)" r="1">
                <stop stopColor="#ff4d4d" />
                <stop offset="1" stopColor="#ff0000" stopOpacity="0.6" />
            </radialGradient>
            <radialGradient id="paint1_radial" cx="0" cy="0" gradientTransform="rotate(-45) scale(200)" r="1">
                <stop stopColor="#ff6666" />
                <stop offset="1" stopColor="#cc0000" stopOpacity="0.5" />
            </radialGradient>
            <clipPath id="cs_clip_1_star-12">
                <path d="M0 0H200V200H0z" fill="#fff" />
            </clipPath>
        </defs>
    </svg>
);
