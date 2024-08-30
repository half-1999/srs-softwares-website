import React from 'react';

const NextJsIcon = ({ size = 48, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 256 256"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M0 0h256v256H0z"
      fill="none"
    />
    <path
      d="M128 0L0 128l128 128 128-128L128 0zm0 256L8 128 128 8l120 120-120 120zm0-96.8l-21.6-21.6 21.6-21.6 21.6 21.6-21.6 21.6zm0 0L128 256l120-120L128 16 8 136l120 120z"
      fill="#000"
    />
  </svg>
);

export default NextJsIcon;
