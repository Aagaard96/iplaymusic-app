import React from 'react';

export default function Contrast(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm127.3 335.3c-34 34-79.2 52.7-127.3 52.7V76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256s-18.7 93.3-52.7 127.3z" fill={props.fill}></path>
      <defs>
        <linearGradient id="myGradient">
          <stop offset="0%" stopColor="#FF6A00" />
          <stop offset="100%" stopColor="#EE0979" />
        </linearGradient>
      </defs>
    </svg>
  );
}
