import React, { useEffect, useState, useContext } from 'react';

import { GlobalContext } from 'context/globalContext';

import Main from 'components/organisms/Main/Main';

import Card from 'components/molecules/Card/Card';
import SelectorMenu from 'components/molecules/SelectorMenu/SelectorMenu';

import none from 'assets/cloud/none.png';
import backup from 'assets/cloud/backup.png';
import sync from 'assets/cloud/sync.png';

function CloudSync({
  disabledNext,
  disabledBack,
  downloadComplete,
  onClick,
  next,
  back,
  data,
}) {
  const { state, setState } = useContext(GlobalContext);
  const { cloudSyncType, system } = state;

  return (
    <>
      <p className="lead">Select the type of Cloud saves you want.</p>
      <Main>
        <SelectorMenu>
          <div className="selector-menu__img">
            <img
              src={sync}
              className={cloudSyncType != 'Sync' && 'is-hidden'}
              alt="Background"
            />
            <img
              src={backup}
              className={cloudSyncType != 'Save' && 'is-hidden'}
              alt="Background"
            />
            <img
              src={none}
              className={cloudSyncType != 'none' && 'is-hidden'}
              alt="Background"
            />
          </div>
          <div className="selector-menu__options selector-menu__options--full">
            <ul>
              <li onClick={() => onClick('Sync')}>
                <Card css={cloudSyncType == 'Sync' && 'is-selected'}>
                  <span className="h4">Sync</span>
                  <p>Sync between EmuDeck installations</p>
                </Card>
              </li>
              {system !== 'win32' && (
                <li onClick={() => onClick('Save')}>
                  <Card css={cloudSyncType == 'Save' && 'is-selected'}>
                    <span className="h4">Backup</span>
                    <p>Backup to the cloud</p>
                  </Card>
                </li>
              )}
              <li onClick={() => onClick('none')}>
                <Card css={cloudSyncType == 'none' && 'is-selected'}>
                  <span className="h4">None</span>
                </Card>
              </li>
            </ul>
          </div>
          <div className="selector-menu__details">
            <p className="lead">Systems</p>
            <ul>
              <li>All</li>
              {/* <li>Nintendo NES</li> */}
            </ul>
          </div>
        </SelectorMenu>
      </Main>
    </>
  );
}

export default CloudSync;
