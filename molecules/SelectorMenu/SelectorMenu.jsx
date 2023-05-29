import React from 'react';
import PropTypes from 'prop-types';
import './selector-menu.scss';

function SelectorMenu({ children, css }) {
  return <div className={`selector-menu ${css}`}>{children}</div>;
}

SelectorMenu.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.element,
    PropTypes.string,
  ]),
  css: PropTypes.string,
};

SelectorMenu.defaultProps = {
  children: '',
  css: '',
};

export default SelectorMenu;
