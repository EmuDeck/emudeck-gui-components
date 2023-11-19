import React, { useContext } from 'react';
import { GlobalContext } from 'context/globalContext';
import PropTypes from 'prop-types';
import Main from 'components/organisms/Main/Main';
import Card from 'components/molecules/Card/Card';

function EmulatorSelector({ onClick, images }) {
  const { state } = useContext(GlobalContext);
  const { installEmus, system } = state;
  const installEmusArray = Object.values(installEmus);

  return (
    <>
      <p className="lead">
        These are the emulators EmuDeck installs to your system. Selected
        emulators will be installed and updated to the latest version.
        De-selected emulators will not be installed or updated.
      </p>
      <Main>
        <div className="cards cards--mini">
          {installEmusArray.map((item) => {
            if (item.id === 'srm' || item.id === 'primehacks') {
              return;
            }
            if (item.id === 'ares') {
              return;
            }
            if (system === 'win32') {
              if (item.id === 'rmg' || item.id === 'ares') {
                return;
              }
            }

            if (system === 'darwin') {
              if (item.id !== 'ra') {
                return;
              }
            }

            const img = images[item.id];
            // eslint-disable-next-line consistent-return
            return (
              <Card
                css={item.status === true && 'is-selected'}
                key={item.id}
                onClick={() => onClick(item.id)}
              >
                <img src={img} alt={item.name} />
                <span className="h6">{item.name}</span>
              </Card>
            );
          })}
        </div>
      </Main>
    </>
  );
}

EmulatorSelector.propTypes = {
  onClick: PropTypes.func,
  images: PropTypes.array,
};

EmulatorSelector.defaultProps = {
  onClick: '',
  images: '',
};

export default EmulatorSelector;
