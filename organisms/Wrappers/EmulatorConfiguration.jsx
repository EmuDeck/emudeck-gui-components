import React, { useContext } from 'react';
import { GlobalContext } from 'context/globalContext';
import PropTypes from 'prop-types';
import Main from 'components/organisms/Main/Main';
import Card from 'components/molecules/Card/Card';

function EmulatorConfiguration({ onClick, images }) {
  const { state } = useContext(GlobalContext);
  const { overwriteConfigEmus, second, system } = state;
  const overwriteConfigEmusArray = Object.values(overwriteConfigEmus);

  return (
    <>
      {second && (
        <p className="lead">
          EmuDeck will optimize and configure emulators during this install.
          Selected emulators will have their configurations reset and updated to
          EmuDeck defaults. De-selected emulators will not be touched and
          EmuDeck will respect your configurations (Not Recommended).
        </p>
      )}
      {!second && (
        <p className="lead">
          EmuDeck will optimize and configure emulators during this install.
          Selected emulators will have their configurations reset and updated to
          EmuDeck defaults. De-selected emulators will not be touched and
          EmuDeck will respect your configurations (Not Recommended).
        </p>
      )}
      <Main>
        <div className="cards cards--mini">
          {overwriteConfigEmusArray.map((item) => {
            if (
              overwriteConfigEmusArray.id === 'srm' ||
              item.id === 'primehacks'
            ) {
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

            if (item.id === 'ares') {
              return;
            }

            if (item.id === 'pegasus') {
              return;
            }

            if (item.id === 'srm' && second === false) {
              return;
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

EmulatorConfiguration.propTypes = {
  onClick: PropTypes.func,
  images: PropTypes.array,
};

EmulatorConfiguration.defaultProps = {
  onClick: '',
  images: '',
};

export default EmulatorConfiguration;
