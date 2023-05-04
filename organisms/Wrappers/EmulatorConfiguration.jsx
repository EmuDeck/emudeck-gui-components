import React, { useEffect, useState, useContext } from 'react';
import { GlobalContext } from 'context/globalContext';

import Main from 'components/organisms/Main/Main';
import Card from 'components/molecules/Card/Card';

function EmulatorConfiguration({
  disabledNext,
  disabledBack,
  onClick,
  next,
  back,
  data,
  images,
}) {
  const { state, setState } = useContext(GlobalContext);
  const { device, overwriteConfigEmus, second, system } = state;
  const overwriteConfigEmusArray = Object.values(overwriteConfigEmus);

  return (
    <>
      {second && (
        <p className="lead">
          EmuDeck will optimize and configure emulators during this install.
          Selected emulators will have their configurations reset and updated to
          EmuDeck's defaults. De-selected emulators will not be touched and
          EmuDeck will respect your configurations (Not Recommended).
        </p>
      )}
      {!second && (
        <p className="lead">
          EmuDeck will optimize and configure emulators during this install.
          Selected emulators will have their configurations reset and updated to
          EmuDeck's defaults. De-selected emulators will not be touched and
          EmuDeck will respect your configurations (Not Recommended).
        </p>
      )}
      <Main>
        <div className="cards cards--mini">
          {overwriteConfigEmusArray.map((item, i) => {
            if (
              overwriteConfigEmusArray.id == 'srm' ||
              item.id == 'primehacks'
            ) {
              return;
            }

            if (system == 'win32') {
              if (
                item.id == 'primehack' ||
                item.id == 'melonds' ||
                item.id == 'rmg' ||
                item.id == 'mame' ||
                item.id == 'vita3k' ||
                item.id == 'scummvm' ||
                item.id == 'xemu' ||
                item.id == 'mgba'
              ) {
                return;
              }
            }

            const img = images[item.id];
            return (
              <Card
                css={item.status == true && 'is-selected'}
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

export default EmulatorConfiguration;
