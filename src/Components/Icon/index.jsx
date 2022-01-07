import React from 'react';
import IconsSVG from './icons.svg';

function Icons({ name, color, size, styles, onClick }) {
  return (
    <svg
      fill={color}
      stroke={color}
      width={size}
      height={size}
      onClick={onClick}
    >
      <use xlinkHref={`${IconsSVG}#icon-${name}`} />
    </svg>
  );
}

export default Icons;
