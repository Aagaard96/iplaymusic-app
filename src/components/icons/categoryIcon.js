import React from 'react';

export default function CategoryIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <defs>
        <linearGradient id="myGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6A00" />
          <stop offset="100%" stopColor="#EE0979" />
        </linearGradient>
      </defs>
      <path fill="url(#myGradient)" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M160 144h288M160 256h288M160 368h288"></path>
      <circle cx="80" cy="144" r="16" fill="url(#myGradient)" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"></circle>
      <circle cx="80" cy="256" r="16" fill="url(#myGradient)" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"></circle>
      <circle cx="80" cy="368" r="16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"></circle>
    </svg>
  );
}
