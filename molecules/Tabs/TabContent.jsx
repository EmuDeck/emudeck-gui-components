import React from 'react';

export function TabContent({ children, active, id }) {
  const css = active ? 'is-active' : '';

  return (
    <div
      tabIndex="0"
      role="tabpanel"
      id={`tab${id}-content`}
      aria-labelledby={`tab${id}`}
      className={`tab-content__panel ${css}`}
    >
      {children}
    </div>
  );
}
