import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { GlobalContext } from 'context/globalContext';

import Main from 'components/organisms/Main/Main';

function ChangeLog({ children }) {
  return <Main>{children}</Main>;
}

ChangeLog.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.element,
    PropTypes.string,
  ]),
};

ChangeLog.defaultProps = {
  children: '',
};

export default ChangeLog;
