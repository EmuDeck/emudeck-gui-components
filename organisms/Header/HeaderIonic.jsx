import React, { useContext } from 'react';
import { PropTypes } from 'prop-types';
import { GlobalContext } from 'context/globalContext';
import './Header.scss';

const HeaderIonic = ({ title, bold }) => {
  const { state, setState } = useContext(GlobalContext);
  const { debug, version, branch } = state;

  const toggleDebug = () => {
    setState({
      ...state,
      debug: !debug,
    });
  };

  // Xmas
  const d = new Date();
  const month = d.getMonth();
  const snowFlakes = [];
  if (month === 11) {
    for (let i = 0; i < 150; i++) {
      snowFlakes.push(<div className="snow" />);
    }
  }

  return (
    <header className="header">
      {month === 11 && snowFlakes && snowFlakes}
      <small onClick={toggleDebug} className="header__version">
        {version}
      </small>

      {branch === 'beta' && <div className="header__beta"> {branch}</div>}
      {!debug && (
        <h1 className="h2">
          {title} <span>{bold}</span>
        </h1>
      )}
    </header>
  );
};

export default HeaderIonic;

HeaderIonic.propTypes = {
  title: PropTypes.string.isRequired,
  bold: PropTypes.string,
};
HeaderIonic.defaultProps = {
  bold: '',
};
