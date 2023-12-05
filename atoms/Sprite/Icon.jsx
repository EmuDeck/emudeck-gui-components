import React from 'react';

function Icon({ name, className, stroke, fill }) {
  return (
    <svg className={`icon ${className}`} style={{ fill, stroke }}>
      <use xlinkHref={`#${name}`} />
    </svg>
  );
}

export default Icon;
