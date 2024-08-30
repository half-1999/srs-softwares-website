import React from 'react';

const FirebaseIcon = ({ size = 48, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M11.952 1.559l-8.66 8.935L0 21.828l11.952-2.843L23.904 21.828l-3.292-11.416 5.982-5.572L11.952 1.559z"
      fill="#FFCC00"
    />
    <path
      d="M0 21.828L11.952 21.828 23.904 21.828 12.536 0 0 21.828z"
      fill="#FF6600"
    />
  </svg>
);

export default FirebaseIcon;
