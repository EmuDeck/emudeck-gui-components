import React from 'react';

export function TabList({ children, active, onClick, id }) {
  // const childrenArray = Object.values(children);

  return (
    <li role="presentation" className={active ? 'is-active' : ''}>
      <button
        type="button"
        aria-selected={active ? 'true' : 'false'}
        aria-controls={`tab${id}-content`}
        id={`tab${id}`}
        role="tab"
        onClick={onClick}
      >
        {children}
      </button>
    </li>
  );
}
