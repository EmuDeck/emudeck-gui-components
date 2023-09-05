import React, { useContext } from 'react';
import { GlobalContext } from 'context/globalContext';
import PropTypes from 'prop-types';
import Main from 'components/organisms/Main/Main';

function DeviceSelector({ children }) {
  const { state } = useContext(GlobalContext);
  const { system } = state;

  return (
    <>
      <p className="lead">
        {system === 'win32' &&
          'EmuDeck tailors the install for different hardware. Please select your controller.'}

        {system !== 'win32' &&
          'EmuDeck tailors the install for different hardware. Each device will have its own configuration, emulators and pre-configured bezels.'}
      </p>
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
