import React from 'react';

export function GuruphoriaLogo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 512 512" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      {/* Monitor Base and Stand */}
      <path 
        d="M192 460H320" 
        stroke="currentColor" 
        strokeWidth="24" 
        strokeLinecap="round"
      />
      <path 
        d="M256 380V460" 
        stroke="currentColor" 
        strokeWidth="24" 
        strokeLinecap="round"
      />
      
      {/* Monitor Frame */}
      <rect 
        x="64" 
        y="128" 
        width="384" 
        height="256" 
        rx="24" 
        stroke="currentColor" 
        strokeWidth="24"
      />
      
      {/* Open Book inside monitor */}
      <path 
        d="M128 200C192 180 256 220 256 220C256 220 320 180 384 200V320C320 300 256 340 256 340C256 340 192 300 128 320V200Z" 
        fill="currentColor" 
        fillOpacity="0.1"
      />
      <path 
        d="M256 220V340" 
        stroke="currentColor" 
        strokeWidth="8"
      />

      {/* Graduation Cap (Mortarboard) - Tilted on the top left */}
      <g transform="translate(-20, -10)">
        <path 
          d="M40 140L180 60L320 140L180 220L40 140Z" 
          fill="currentColor"
        />
        <path 
          d="M90 170V210C90 210 135 240 180 240C225 240 270 210 270 210V170" 
          stroke="currentColor" 
          strokeWidth="16" 
          fill="none" 
          strokeLinejoin="round"
        />
        {/* Tassel */}
        <circle cx="40" cy="280" r="14" fill="currentColor"/>
        <path d="M40 140V280" stroke="currentColor" strokeWidth="6"/>
      </g>
    </svg>
  );
}
