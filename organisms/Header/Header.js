import React, { useEffect, useState, useContext } from 'react';
import { GlobalContext } from 'context/globalContext';
import './Header.scss';
const Header = ({ title, bold }) => {
  const { state, setState } = useContext(GlobalContext);
  const { debug, debugText } = state;

  return (
    <header className="header">
      {!debug && (
        <h1 className="h2">
          {title} <span>{bold}</span>
        </h1>
      )}
      {debug && <code>{JSON.stringify(debugText)}</code>}
    </header>
  );
};

export default Header;
