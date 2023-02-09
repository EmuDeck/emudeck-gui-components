import React, { useEffect, useState, useContext } from 'react';

import { GlobalContext } from 'context/globalContext';

import Main from 'components/organisms/Main/Main';

import { BtnSimple } from 'getbasecore/Atoms';

import { Alert } from 'getbasecore/Molecules';

import Card from 'components/molecules/Card/Card';
import SelectorMenu from 'components/molecules/SelectorMenu/SelectorMenu';

import cloudSyncOn from 'assets/CloudSync.png';
import cloudSyncOff from 'assets/CloudSync.png';

import box from 'assets/cloud/box.png';
import dropbox from 'assets/cloud/dropbox.png';
import gdrive from 'assets/cloud/gdrive.png';
import nextcloud from 'assets/cloud/nextcloud.png';
import onedrive from 'assets/cloud/onedrive.png';
import pcloud from 'assets/cloud/pcloud.png';

const CloudSync = ({
  disabledNext,
  disabledBack,
  downloadComplete,
  onClick,
  onClickInstall,
  next,
  back,
  data,
}) => {
  const { state, setState } = useContext(GlobalContext);
  const { cloudSync } = state;

  return (
    <>
      <p className="lead">
        Backup your games to the cloud. After selecting one of the cloud providers below, 
        EmuDeck Save Backup will be added to your desktop. Use this application
        to manage and create backups. 
        This feature is currently in beta. At
        the moment, it will backup your games on an adhoc basis. 
        This feature does not support continuous syncing at this time. Stay tuned for a
        future update!
      </p>
      <Main>
        <p>Select one of the following providers:</p>

        <div className="cards cards--mini">
          <Card
            css={cloudSync == 'Emudeck-Box' && 'is-selected'}
            onClick={() => onClick('Emudeck-Box')}
          >
            <img src={box} alt="Box" />
            <span className="h6">Box</span>
          </Card>
          <Card
            css={cloudSync == 'Emudeck-DropBox' && 'is-selected'}
            onClick={() => onClick('Emudeck-DropBox')}
          >
            <img src={dropbox} alt="dropbox" />
            <span className="h6">DropBox</span>
          </Card>
          <Card
            css={cloudSync == 'Emudeck-GDrive' && 'is-selected'}
            onClick={() => onClick('Emudeck-GDrive')}
          >
            <img src={gdrive} alt="gdrive" />
            <span className="h6">Google Drive</span>
          </Card>
          <Card
            css={cloudSync == 'Emudeck-NextCloud' && 'is-selected'}
            onClick={() => onClick('Emudeck-NextCloud')}
          >
            <img src={nextcloud} alt="nextcloud" />
            <span className="h6">Nextcloud</span>
          </Card>
          <Card
            css={cloudSync == 'Emudeck-OneDrive' && 'is-selected'}
            onClick={() => onClick('Emudeck-OneDrive')}
          >
            <img src={onedrive} alt="onedrive" />
            <span className="h6">OneDrive</span>
          </Card>
        </div>
        {cloudSync !== '' && cloudSync !== false && (
          <BtnSimple
            css="btn-simple--1"
            type="button"
            aria="Install SaveSync"
            onClick={() => onClickInstall()}
            disabled={disabledNext && 'true'}
          >
            Run SaveBackup
          </BtnSimple>
        )}
      </Main>
    </>
  );
};

export default CloudSync;
