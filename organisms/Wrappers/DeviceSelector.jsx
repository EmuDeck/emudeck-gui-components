import { useTranslation } from 'react-i18next';
import React, { useContext } from 'react';
import { GlobalContext } from 'context/globalContext';
import PropTypes from 'prop-types';
import Main from 'components/organisms/Main/Main';

function DeviceSelector({ children }) {
  const { t, i18n } = useTranslation();
  const { state } = useContext(GlobalContext);
  const { system } = state;

  return (
    <>
      <Main>
        <div className="cards">{children}</div>
      </Main>
    </>
  );
}

DeviceSelector.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.element,
    PropTypes.string,
  ]),
};

DeviceSelector.defaultProps = {
  children: '',
};

export default DeviceSelector;
