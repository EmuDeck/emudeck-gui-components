import React, { useContext } from 'react';
import { PropTypes } from 'prop-types';
import { GlobalContext } from 'context/globalContext';
import HeaderElectron from './HeaderElectron';
import HeaderIonic from './HeaderIonic';

const Header = ({ title, bold }) => {
  const { state } = useContext(GlobalContext);
  const { app } = state;

  return app === 'electron' ? (
    <HeaderElectron title={title} bold={bold} />
  ) : (
    <HeaderIonic title={title} bold={bold} />
  );
};

export default Header;

Header.propTypes = {
  title: PropTypes.string.isRequired,
  bold: PropTypes.string,
};
Header.defaultProps = {
  bold: '',
};
