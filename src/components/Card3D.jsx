import React from 'react';

export default function Card3D({ 
  children, 
  className = '', 
  onClick
}) {
  return (
    <div
      onClick={onClick}
      className={`relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-card hover:shadow-card-hover hover:border-slate-300 transition-all duration-200 ${className}`}
    >
      {children}
    </div>
  );
}
