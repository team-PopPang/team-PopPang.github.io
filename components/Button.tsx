import React from 'react';

export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, className = '', ...props }) => {
  return (
    <button {...props} className={`px-6 py-3 rounded-full bg-black text-white ${className}`}>
      {children}
    </button>
  );
};
