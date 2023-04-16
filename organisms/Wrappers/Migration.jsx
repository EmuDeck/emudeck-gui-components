import React, { useEffect, useState, useContext } from 'react';
import { GlobalContext } from 'context/globalContext';

import Main from 'components/organisms/Main/Main';
import imgSD from 'assets/sdcard.png';
import imgInternal from 'assets/internal.png';
import {
  BtnSimple,
  ProgressBar,
  FormInputSimple,
  LinkSimple,
  Iframe,
} from 'getbasecore/Atoms';
import { Form } from 'getbasecore/Molecules';

import Card from 'components/molecules/Card/Card';

const ipcChannel = window.electron.ipcRenderer;
const Migration = ({
  disabledNext,
  disabledBack,
  onChange,
  onClick,
  onClickStart,
  next,
  back,
  minute,
  sdCardValid,
  sdCardName,
  reloadSDcard,
  storage,
  storageDestination,
  storagePath,
  storagePathDestination,
  statusMigration,
}) => {
  const { state, setState } = useContext(GlobalContext);
  const { SDID, mode, system } = state;
  return (
    <>
      <p className="lead">
        This utility will move your EmuDeck installation, with your ROMs in tact, to the selected
        destination as well as update your Steam Library paths.
      </p>
      <Main>
        <div className="container--grid">
          <div data-col-sm="6">
            <span className="h4">Current installation:</span>
            <div className="cards cards--half">
              {storage == 'SD-Card' && (
                <Card css={storage == 'SD-Card' && 'is-selected'}>
                  <img src={imgSD} width="100" alt="Background" />
                  <span className="h5">SD Card</span>
                  {sdCardName != null && (
                    <span className="h6">{sdCardName}</span>
                  )}
                  {sdCardName == null ||
                    (sdCardValid == false && (
                      <span className="h6">Not detected</span>
                    ))}
                </Card>
              )}

              {storage == 'Internal Storage' && (
                <Card css={storage == 'Internal Storage' && 'is-selected'}>
                  <img src={imgInternal} width="100" alt="Background" />
                  <span className="h6">Internal Storage</span>
                </Card>
              )}
              {storage == 'Custom' && (
                <Card css={storage == 'Custom' && 'is-selected'}>
                  <img src={imgInternal} width="100" alt="Background" />
                  <span className="h6">Custom Directory</span>
                  {storagePath && storage == 'Custom' && (
                    <span className="h6">{storagePath}</span>
                  )}
                </Card>
              )}
            </div>
          </div>
          <div data-col-sm="6">
            <span className="h4">Pick your destination:</span>
            <div className="cards cards--half">
              <Card
                css={storageDestination == 'SD-Card' && 'is-selected'}
                onClick={() =>
                  sdCardValid == true ? onClick('SD-Card') : reloadSDcard()
                }
              >
                <img src={imgSD} width="100" alt="Background" />
                <span className="h5">SD Card</span>
                {sdCardName != null && <span className="h6">{sdCardName}</span>}
                {sdCardName == null ||
                  (sdCardValid == false && (
                    <span className="h6">Not detected</span>
                  ))}
              </Card>

              <Card
                css={storageDestination == 'Internal Storage' && 'is-selected'}
                onClick={() => onClick('Internal Storage')}
              >
                <img src={imgInternal} width="100" alt="Background" />
                <span className="h6">Internal Storage</span>
              </Card>

              <Card
                css={storageDestination == 'Custom' && 'is-selected'}
                onClick={() => onClick('Custom')}
              >
                <img src={imgInternal} width="100" alt="Background" />
                <span className="h6">Custom Directory</span>
                {storagePathDestination && storageDestination == 'Custom' && (
                  <span className="h6">{storagePathDestination}</span>
                )}
              </Card>
            </div>
            {statusMigration === null && (
              <BtnSimple
                css="btn-simple--1"
                type="button"
                aria="Start Migration"
                onClick={() => onClickStart()}
              >
                Start Migration
              </BtnSimple>
            )}

            {statusMigration !== null && (
              <BtnSimple
                css="btn-simple--1"
                type="button"
                aria="Waiting Migration"
                disabled
              >
                Doing Migration...
              </BtnSimple>
            )}
          </div>
        </div>
      </Main>
    </>
  );
};

export default Migration;
